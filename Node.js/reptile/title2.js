/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 09:38:37
 * @LastEditTime: 2019-09-12 11:43:09
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
let urls = require('./urls')
urls = urls.slice(0)

app.get('/', function(req, res, next) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get(cnodeUrl)

    .end(function(err, res) {

        // 常规的错误处理
        if (err) {
            return next(err);
        }
        total_msg_arr = []

        urls.forEach(function(gradeUrl) {

            superagent.get(gradeUrl)
                .end(function(err, res) {
                    console.log('fetch ' + gradeUrl + ' successful');
                    var $ = cheerio.load(res.text);
                    var pageStr = $('.total-summary').text()

                    var total_msg = {}
                    var content = []



                    pageNumber = $('.page .btn').last().prev().text();
                    total_msg.pageNumber = pageNumber;
                    numberFlag = 2;

                    total_msg.name = gradeUrl.gradeName;
                    $('.infolist_cont .info_list').each((i, v) => {
                        title = $(v).find('.schooltitle').text();
                        href = $(v).find('.schooltitle').attr('href');

                        content.push({

                            title,
                            href,
                            pageNumber
                        })
                    })
                    while (numberFlag <= Number(pageNumber)) {
                        superagent.get(gradeUrl.href + '&page=' + numberFlag).end(function(err, res) {
                            var $ = cheerio.load(res.text);

                            $('.infolist_cont .info_list').each((i, v) => {
                                title = $(v).find('.schooltitle').text();
                                href = $(v).find('.schooltitle').attr('href');

                                content.push({

                                    title,
                                    href,
                                    pageNumber
                                })
                            })
                        })
                        numberFlag++;

                    }

                    total_msg.content = content
                    total_msg_arr.push(total_msg)
                });
        })
    });

    res.send(total_msg_arr)
});

app.listen(3379, () => {
    console.log('app is running at port 3379');
})