var path = require('path');
var webpack = require('webpack');
var sourceRootDir = path.join(__dirname, './src/app');
var destRootDir = path.join(__dirname, './www/js');

module.exports = {
    cache: true,
    debug: true,

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
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        })
    ]
}
