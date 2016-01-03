var path          = require('path');
var webpack       = require('webpack');
var sourceRootDir = path.join(__dirname, './src/app');
var destRootDir   = path.join(__dirname, './www/js');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
    entry: {
        app: [
            path.join(sourceRootDir, 'index.js')
        ],
        vendor: [
            'history',
            'react',
            'react-dom',
            'react-router',
            'react-hot-loader'
        ]
    },

    output: {
        path: destRootDir,
        filename: '[name].bundle.js',
        chunkname: '[name].bundle.js',
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?importLoaders=2&sourceMap',
                    'autoprefixer?browsers=last 2 version',
                    'sass?outputStyle=expanded&sourceMap&sourceMapContents=true'
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),

        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),

        webpackIsomorphicToolsPlugin.development()
    ]
}
