const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./webpack.util.js');

module.exports = {
    entry: {
        'app': [
            './src/app/app.ts'
        ]
    },

    output: {
        path: './dist',
        filename: '[name].' + process.env.NODE_ENV + '.[hash].js'
    },

    resolve: {
        extensions: ['.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            ejs: {
                environment: process.env.NODE_ENV
            },
            template: './src/index.ejs',
            excludeChunks: ['spec']
        }),

        new webpack.optimize.UglifyJsPlugin(),

        function ReactOnWebpackRunEventPlugin() {
            this.plugin('run', function (watching, callback) {
                util.logCurrentDateFormatted();
                util.npmRun('clean:dist', 'Clean');
                util.npmRun('lint', 'Lint');

                callback();
            });
        }
    ]
};
