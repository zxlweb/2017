var makeTable = require('./render-server');

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var table = makeTable();
    var html = '<!doctype html>\n\
              <html>\
                <head>\
                    <title>react server render</title>\
                </head>\
                <body>' +
        table +
        '</body>\
              </html>';

    res.end(html);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');