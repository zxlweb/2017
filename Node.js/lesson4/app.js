let eventproxy = require('eventproxy');
let superagent = require('superagent');
let cheerio = require('cheerio');
let express = require('express');
let app = express();

var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';
var topicUrls = [];
var topicRes = [];
app.get('/', function(req, res, next) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get(cnodeUrl)

    .end(function(err, res) {

        // 常规的错误处理
        if (err) {
            return next(err);
        }

        // res.send(res.text)
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        var $ = cheerio.load(res.text);
        console.log(res.text)
        $('#topic_list .topic_title').each(function(idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href)
        });

        // 得到一个 eventproxy 的实例
        var ep = new eventproxy();
        // 命令 ep 重复监听 topicUrls.length 次（在这里也就是 40 次） `topic_html` 事件再行动
        ep.after('topic_html', topicUrls.length, function(topics) {
            // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair

            // 开始行动
            topicRes = topics.map(function(topicPair) {
                // 接下来都是 jquery 的用法了
                var topicUrl = topicPair[0];
                var topicHtml = topicPair[1];
                var $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content').eq(0).text().trim(),
                });
            });
        });

        topicUrls.forEach(function(topicUrl) {
            superagent.get(topicUrl)
                .end(function(err, res) {
                    console.log('fetch ' + topicUrl + ' successful');

                    ep.emit('topic_html', [topicUrl, res.text]);
                });
        });



    });
    res.send(topicRes)


});

app.listen(3000, () => {
    console.log('app is running at port 3000');
})