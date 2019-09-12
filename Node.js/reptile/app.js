/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 09:38:37
 * @LastEditTime: 2019-09-12 15:59:39
 * @LastEditors: Please set LastEditors
 */
let eventproxy = require('eventproxy');
let superagent = require('superagent');
let cheerio = require('cheerio');
let express = require('express');
let app = express();

var url = require('url');
var cnodeUrl = 'http://souke.xdf.cn/Search.aspx?cid=7&ccc=40&gc=0';
var gradeUrls = [];
var _gradeUrls = [];
var gradeRes = [];
var total_msg_arr = []
var pageNumber;
var _grade = []

app.get('/', function(req, res, next) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get(cnodeUrl)

    .end(function(err, res) {

        // 常规的错误处理
        if (err) {
            return next(err);
        }

        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        var $ = cheerio.load(res.text);

        gradeUrls = []
        $('#divPropertyFilter .m-filter-item').eq(0).find('a').each(function(idx, element) {
            var $element = $(element);

            if (idx != 0) {

                var href = url.resolve(cnodeUrl, $element.attr('href'));
                var gradeName = $element.text();
                //当前第1页，共2页（12条记录）
                var pageStr = $('.total-summary').text()
                var reg = /共\s*(\d+)\s*页/g.exec(pageStr)[1];
                gradeUrls.push({
                    gradeName,
                    href

                })
            }
        });
        // 得到一个 eventproxy 的实例
        var ep = new eventproxy();
        ep.after('jt', 20, function(grade) {
            _grade = grade

            console.log(grade, 'grade')
                // superagent.get()

            // _gradeUrls = grade.map(function(gradePair) {
            //     // 接下来都是 jquery 的用法了
            //     var topicUrl = gradePair[0];
            //     var topicHtml = gradePair[1];
            //     var $ = cheerio.load(topicHtml);
            //     return ({
            //         title: $('.m-courselist-l h2 a').text().trim(),
            //         href: topicUrl

            //     });
            // })
        })

        // gradeUrls.forEach(function(gradeUrl) {
        //     superagent.get(gradeUrl)
        //         .end(function(err, res) {
        //             console.log('fetch ' + gradeUrl + ' successful');

        //             ep.emit('jt', [gradeUrl, res.text]);
        //         });
        // })
        total_msg_arr = []

        gradeUrls.forEach(function(gradeUrl) {

            superagent.get(gradeUrl.href)
                .end(function(err, res) {
                    console.log('fetch ' + gradeUrl.href + ' successful');
                    var $ = cheerio.load(res.text);
                    var pageStr = $('.total-summary').text()
                    var reg = /共\s*(\d+)\s*页/g.exec(pageStr)[1];
                    var total_msg = {}
                    var _gradeUrls = []


                    total_msg.pageNumber = reg;
                    pageNumber = reg;
                    numberFlag = 2;

                    total_msg.name = gradeUrl.gradeName;
                    $('.m-courselist-l h2 a').each(function(idx, element) {

                        var $element = $(element);
                        var href = url.resolve(cnodeUrl, $element.attr('href'));
                        var title = $element.text()
                        _gradeUrls.push({

                            title,
                            href,

                        })
                    });

                    while (numberFlag <= Number(pageNumber)) {
                        superagent.get(gradeUrl.href + '&page=' + numberFlag).end(function(err, res) {
                            var $ = cheerio.load(res.text);
                            $('.m-courselist-l h2 a').each(function(idx, element) {

                                var $element = $(element);
                                var href = url.resolve(cnodeUrl, $element.attr('href'));
                                var title = $element.text()
                                _gradeUrls.push({

                                    title,
                                    href,

                                })
                            });

                        })
                        numberFlag++;

                    }

                    total_msg._gradeUrls = _gradeUrls
                    total_msg_arr.push(total_msg)
                });
        })
    });

    res.send(total_msg_arr)
});



app.listen(4000, () => {
    console.log('app is running at port 4000');
})