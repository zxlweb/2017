const http = require('http');
/**
 * 客户端
 */
let options = {
    hostname: 'localhost',
    port: '8124',
    path: 'upload',
    method: 'GET'
};
let requset = http.request(options, function (response) {


})
request.write('Hello world');
request.end();