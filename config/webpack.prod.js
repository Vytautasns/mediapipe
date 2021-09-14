const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const path = require('path');

const DefinePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
});

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: false,
    bail: true,
    target: ['web', 'es5'],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../public'),
        library: '[name]',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        DefinePluginConfig,
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false
                    },
                    mangle: true,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                extractComments: false
            }),
            // new OptimizeCSSAssetsPlugin()
        ]
    }
});
