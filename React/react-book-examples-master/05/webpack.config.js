var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
   devtool: 'inline-source-map',
   entry : [
      'webpack-hot-middleware/client',
      './src/app.js'
    ],
   output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/build/'
   },
   module: {
      loaders: [
      { test: /\.js$/, loader: 'babel',exclude: /node_modules/,query: {presets:['es2015', 'react', 'stage-0']}},
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]},
   plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ]
};


// if (process.env.NODE_ENV === 'production') {

//   webpackConfig = merge(webpackConfig,{
//      devtool: 'sourcemap',
//      entry : [
//        './src/app.js'
//      ],
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         include: __dirname
//       },
//       { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
//       { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') }
//     ]},
//     plugins : [
//       new webpack.DefinePlugin({
//         'process.env': {
//           NODE_ENV: JSON.stringify('production')
//         }
//       }),
//       new ExtractTextPlugin("app.css"),
//       new webpack.optimize.UglifyJsPlugin({minimize: true})
//     ]  
//   });

// }else{

//   webpackConfig = merge(webpackConfig,{
//     devtool: 'inline-source-map',
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         query: {presets:['es2015', 'react', 'stage-0']}
//       }
//         ,
//       { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
//       { test: /\.css$/, loader: 'style-loader!css-loader' }
//     ]},
//     entry : [
//       'webpack-hot-middleware/client',
//       './src/app.js'
//     ],
//     plugins : [
//       new webpack.HotModuleReplacementPlugin()
//     ]  
//   });
  
// }

module.exports = webpackConfig;
