let eventproxy = require('eventproxy');
let superagent = require('superagent');
let cheerio = require('cheerio');
let express = require('express');
let app = express();

let async = require('async');
//随机构造fetchurl
var urls = ['http://www.baidu.com'];
// for (var i = 0; i < 30; i++) {
//     urls.push('http://data_source_' + i)
// }

var concurrentCount = 0;
var fetchUrl = function(url, callback) {
    //delay是2000以内的随机数，模拟异步请求
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrentCount++;
    console.log('现在的并发数：' + concurrentCount, '正在抓取：' + url, '耗时：' + delay + '毫秒');
    // setTimeout(function() {
    //     concurrentCount--;
    //     callback(null, url + 'html content')
    // }, delay);
    superagent.get(url).end((err, res) => {
        // 常规的错误处理
        if (err) {
            return next(err);
        }
        callback(null, res.text)

    })
}

async.mapLimit(urls, 5, (url, callback) => {
    fetchUrl(url, function(a, b) {
        console.log(b, 'url html content')
    })
}, (err, result) => {
    console.log('final:');
    console.log(result)
})


app.listen(3000, () => {
    console.log('app is running at port 3000');
})