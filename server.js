require('dotenv').config();

const bodyParser = require('body-parser');
const cluster = require('cluster');
const compression = require('compression');
const enforce = require('express-sslify');
const express = require('express');
const next = require('next');
const numCPUs = require('os').cpus().length;
const path = require('path');
const url = require('url');

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = next({ dir: '.', dev });
  const handle = app.getRequestHandler();
  // init i18next with serverside settings
  // using i18next-express-middleware
  i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
      {
        fallbackLng: 'en',
        preload: ['en', 'de'], // preload all langages
        ns: ['common', 'home'], // need to preload all the namespaces
        backend: {
          loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
          addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json'),
        },
      },
      () => {
        // loaded translations we can bootstrap our routes
        app
          .prepare()
          .then(() => {
            const server = express();

            server.disable('x-powered-by');

            if (!dev) {
              // enforce HTTPS connection
              server.use(enforce.HTTPS({ trustProtoHeader: true }));
            }

            server.use(compression());

            server.use(bodyParser.json({ limit: '30mb' }));
            server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

            server.use(
              '/static',
              express.static(path.join(__dirname, 'static'), {
                maxage: dev ? '0' : '7d',
                index: false,
                redirect: false,
              })
            );

            // enable middleware for i18next
            server.use(i18nextMiddleware.handle(i18n));

            // serve locales for client
            server.use('/locales', express.static(path.join(__dirname, '/locales')));

            // missing keys
            server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

            server.get('*', (req, res) => {
              const parsedUrl = url.parse(req.url, true);
              handle(req, res, parsedUrl);
            });

            // Error Handling
            /* eslint-disable no-unused-vars */
            server.use((err, req, res, n) => {
              console.log('error', err);
              /* eslint-enable no-unused-vars */
              if (err.code && err.status) {
                const newErr = err;
                newErr.full = undefined;
                return res.status(newErr.status).json(newErr);
              }
              return res
                .status(500)
                .json({ code: 100, status: 500, message: 'Internal Server Error' })
                .end();
            });

            server.listen(PORT, err => {
              if (err) throw err;
              console.log(`> Ready on http://localhost:${PORT}`);
            });
          })
          .catch(ex => {
            console.error(ex.stack);
            process.exit(1);
          });
      }
    );
}
