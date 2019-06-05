/**
 * @fileOverview 服务器入口
 * @author Zxl
 **/
const express = require('express');
const app = express();

// routing 指的是如何响应客户端发来url或者http请求，每个路由的处理函数可以有多个
// app.get('/', (req, res) => res.send('Hello World!'));

//express.static(root,[options])
//specifies the root directory from which to serve static assets
app.use('/', express.static('dist'));


app.listen(8080, () => console.log('Example app listening on port 8080'));