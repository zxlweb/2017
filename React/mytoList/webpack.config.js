'use strict';
var webpack=require('webpack');
var path = require('path');
var config={
	entry:path.resolve(__dirname, './src/entry.js'),
	output: {
		path: path.resolve(__dirname, './out'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	externals:{
		'react':'React'
	},
	module:{
		loaders:[
			{ test: /\.js$/, loader: "jsx!babel", include: /src/},
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.scss$/, loader: "style!css!sass"},
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
		]
	}

}
module.exports= config;

