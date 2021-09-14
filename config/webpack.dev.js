const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./webpack.config');
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../.env')
});

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../public'),
        library: '[name]',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    watch: true,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebook/create-react-app/issues/293
    // src/node_modules is not ignored to support absolute imports
    // https://github.com/facebook/create-react-app/issues/1065
    watchOptions: {
        // ignore: /node_modules/,
        aggregateTimeout: 200,
        poll: 500
    }
});
