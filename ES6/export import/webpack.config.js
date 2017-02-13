/**
 * Created by think on 2016/11/23.
 */
/*
 module.exports = {
 entry: './src/app.js',
 output: {
 path: './bin',
 filename: 'bundle.js'
 },
 module :{
 loaders:[{
 test:/\.js$/,
 exclude: /node_modules/,
 loader:'babel-loader',
 query: {
 presets: ['es2015']
 }
 }]
 }
 };
 */
var path = require('path');
module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/assets",
        filename: 'bundle.js'
    }
}