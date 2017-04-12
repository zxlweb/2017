// import express from 'express';

// import webpack from 'webpack';
// import webpackConfig from '../webpack.config';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';


import React from 'react';
import {renderToString} from 'react-dom/server';
import {RoutingContext,match} from 'react-router';
import {Provider} from 'react-redux';
import routes from '../src/routes/index';
import configureStore from '../src/redux/configureStore';

const express=require('express');
const app=express();
const port = 3000;
// const compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
// app.use(webpackHotMiddleware(compiler));

var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

// webpackDevMiddleware uses webpack to compile assets in-memory and serve them
var webpackDevMiddleware=require('webpack-dev-middleware');
var webpackHotMiddleware=require('webpack-hot-middleware');

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
function renderFullPage(html){
 return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>redux blog</title>
        </head>
        <body>
        <div id="root">
          <div>
            ${html}
          </div>
        </div>
        // 将store的状态写入全局变量，这样客户端初始化render的时候，会校验服务器生成的HTML结构，并且同步到初始化状态，然后整个页面被客户端接管
        <script type="text/javascript" src="build/app.bundle.js"></script>
        </body>
        </html>
 `

 
}
app.get('*',(req,res)=>{

    match({routes:routes,location:req.url},(err,redirectLocation,renderProps)=>{
        if(err){
            res.status(500).end(`Internal Server Error ${err}`);
        }else if(redirectLocation){
            res.redirect(redirectLocation.pathname+redirectLocation.search);
        }else if(renderProps){
            const store=configureStore();
            const state=store.getState();
            console.log('服务器端渲染');
            Promise.all([
                store.dispatch(fetchList()),
                store.dispatch(fecthItem(renderProps.params.id))
            ])
            .then(()=>{
        
                const html=renderToString(<Provider store={store}><RoutingContext {...renderProps}/></Provider>);
                res.end(renderFullPage(html))
            })
        }else{
            res.status(400).end('Not found');
        }
    });
})


app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})