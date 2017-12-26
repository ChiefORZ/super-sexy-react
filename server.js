const bodyParser = require('body-parser');
const compression = require('compression');
const enforce = require('express-sslify');
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./i18n');

// init i18next with serverside settings
// using i18next-express-middleware
i18n.use(Backend).use(i18nextMiddleware.LanguageDetector).init({
  preload: ['en', 'de'], // preload all langages
  ns: ['common', 'home'], // need to preload all the namespaces
  backend: {
    loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
    addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json'),
  },
}, () => {
  // loaded translations we can bootstrap our routes
  app
    .prepare()
    .then(() => {
      const server = express();

      server.disable('x-powered-by');

      // enforce HTTPS connection
      server.use(enforce.HTTPS({ trustProtoHeader: true }));

      server.use(compression());

      server.use(bodyParser.json({ limit: '30mb' }));
      server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

      server.use(
        '/static',
        express.static('./static', {
          maxage: '48h',
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

      server.get('*', (req, res) => handle(req, res));

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
});
