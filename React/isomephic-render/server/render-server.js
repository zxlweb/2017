var React = require('react');

// 与客户端require('react-dom')略有不同
var React = require('react');

// 与客户端require('react-dom')略有不同
var ReactDOMServer = require('react-dom/server');

// table类
var Table = require('../client/table.tsx');



var datas = require('../client/datas')
module.exports = function () {
    return ReactDOMServer.renderToString(<Table datas={datas}/>);
};