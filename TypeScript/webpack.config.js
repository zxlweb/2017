'use strict';

const path = require('path');

module.exports = {
    entry: {
        'car': './src/car.ts'
    },

    output: {
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/dist/js/page/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },

    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.ts', '.js']
    },

    devtool: false
};