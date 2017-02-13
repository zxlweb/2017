/**
 * Created by server on 2016/11/16.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel',
                query : {
                    presets : ['es2015','react']
                }
            }
        ]
    }
};