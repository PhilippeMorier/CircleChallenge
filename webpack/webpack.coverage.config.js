const webpack = require('webpack');
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
        filename: '[name].[hash].js'
    },

    resolve: {
        extensions: ['.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader?configFileName=tsconfig.coverage.json'
            },
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /spec.ts/,
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ],
                enforce: 'post'
            }
        ]
    },

    devtool: 'inline-source-map',

    plugins: [
        function ReactOnWebpackRunEventPlugin() {
            this.plugin('run', function (watching, callback) {
                util.logCurrentDateFormatted();
                util.npmRun('clean', 'Clean');

                callback();
            });
        }
    ]
};
