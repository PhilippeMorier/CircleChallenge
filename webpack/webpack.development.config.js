const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./webpack.util.js');

module.exports = {
    entry: {
        'app': [
            './src/app/app.ts'
        ],
        'spec': [
            './src/spec.ts'
        ]
    },

    output: {
        path: './dist',
        filename: '[name].' + process.env.NODE_ENV + '.[hash].js'
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

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            ejs: {
                environment: process.env.NODE_ENV
            },
            template: './src/index.ejs',
            excludeChunks: ['spec']
        }),

        function ReactOnWebpackRunEventPlugin() {
            this.plugin('run', function (watching, callback) {
                util.logCurrentDateFormatted();
                util.npmRun('clean:dist', 'Clean');
                util.npmRun('lint -- --force', 'Lint');

                callback();
            });
        },

        function ReactOnWebpackWatchRunEventPlugin() {
            this.plugin('watch-run', function (watching, callback) {
                util.logCurrentDateFormatted();
                util.npmRun('clean:dist', 'Clean');
                util.npmRun('lint -- --force', 'Lint');

                callback();
            });
        }
    ]
};
