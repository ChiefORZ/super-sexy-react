import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import handleRender from './render';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var config = require('../webpack.config');

var join = require('path').join;

var app = express();

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3000';

app.use(cookieParser());
app.use(compression());

config.entry.app.unshift(
    'webpack-hot-middleware/client?http://localhost:' + PORT
);

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    contentBase: join(__dirname, './www'),
    hot: true,
    filename: 'app.bundle.js',
    publicPath: '/js/',
    stats: {
        colors: true,
        hash: false,
        chunks: false
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use(handleRender);

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
    }
});
