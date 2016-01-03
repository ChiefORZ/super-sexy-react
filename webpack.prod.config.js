var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sourceRootDir     = path.join(__dirname, './src/app');
var destRootDir       = path.join(__dirname, './www/js');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
    cache: true,

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
        filename: '[name]_[chunkhash].bundle.js',
        chunkname: '[name]_[chunkhash].bundle.js',
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
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap')
            }
        ]
    },

    plugins: [

        // css files from the extract-text-plugin loader
        new ExtractTextPlugin('[name]_[chunkhash].css', {allChunks: true}),

        // new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),

        // merges chunks that are similar to each other and would minify js even more
        //  - but does not fit in the dynamic-loading philosophy
        // new webpack.optimize.AggressiveMergingPlugin(),

        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),

        // minimize all javaScript output of chunks
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),

        new webpack.NoErrorsPlugin(),

        // set global vars
        new webpack.DefinePlugin({
            'process.env': {
                __CLIENT__: true,
                __SERVER__: false,
                __DEVELOPMENT__: false,
                __DEVTOOLS__: false,
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        }),
        webpackIsomorphicToolsPlugin
    ]
}
