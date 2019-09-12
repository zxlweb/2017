/*
 * @Description: 获取学校名称
 * @Author: zxl
 * @Date: 2019-09-12 10:00:21
 * @LastEditTime: 2019-09-12 18:08:53
 * @LastEditors: Please set LastEditors
 */
const cheerio = require('cheerio')
    // const mysql = require('mysql')
const express = require('express')
const app = express()
const superagent = require('superagent')
require('superagent-charset')(superagent)
const async = require('async');
let urls = require('./urls')
urls = urls.slice(0)

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'book2',
//     port: 3306
// })

let id = 0 //计数器



//将Unicode转汉字
function reconvert(str) {
    str = str.replace(/(&#x)(\w{1,4});/gi, function($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    return str;
}

let content = [];
let obj;

/**
 * 
 * @param {*} url 爬取网页的第一页
 * @param {*} callback 
 * @param {*} id 
 * @param {*} curNumber 
 */
function handlePage(_url) {

    superagent.get(_url).end(function(err, res) {


        const $ = cheerio.load(res.text);
        let pageNumber = $('.page .btn').last().prev().text();
        let urlwithouthtml = _url.replace(/.html$/gi, "")
        console.log(pageNumber, 'handle')
        while (Number(pageNumber) > 1) {
            pageNumber--;
            urls.push(urlwithouthtml + '-p' + pageNumber + '.html')
        }
    })



}

function fetList(url, callback, id) {

    superagent.get(url)
        .charset('gbk')
        .end(function(err, res) {
            const $ = cheerio.load(res.text);
            content = []
            let title, href, pageNumber;

            // pageNumber = $('.page .btn').last().prev().text() - 1
            // let urlwithouthtml = url.replace(/.html$/gi, "")
            $('.infolist_cont .info_list').each((i, v) => {
                title = $(v).find('.schooltitle').text();
                href = $(v).find('.schooltitle').attr('href');
                content.push({
                    id: id + '' + i,
                    title,
                    href,
                    pageNumber
                })
            })

            // while (curNumber <= Number(pageNumber)) {

            //     superagent.get(urlwithouthtml + '-p' + curNumber + '.html').end(function(err, res) {
            //         console.log(curNumber)
            //         console.log('内部执行', urlwithouthtml + '-p' + curNumber + '.html')
            //         const $ = cheerio.load(res.text);
            //         // console.log(res.text, 'res.text')
            //         $('.infolist_cont .info_list').each((_i, _v) => {
            //             let title = $(_v).find('.schooltitle').text();
            //             let href = $(_v).find('.schooltitle').attr('href');

            //             content.push({
            //                 id: id + '' + _i,
            //                 title,
            //                 href,
            //                 pageNumber
            //             })
            //         })


            //     })
            //     curNumber++;

            // }
            callback(null, content)
        })
}

function saveToMysql(results) {
    results.forEach(function(result) {
        pool.query('insert into booktitles set ?', result, function(err, result1) {
            if (err) throw err
            console.log(`insert ${result.id} success`)
        })
    })
}

app.get('/', function(req, response) {



    async.mapLimit(urls, 20, function(url, callback) {
        id++
        handlePage(url)
        console.log(urls, 'urls')
        fetList(url, callback, id)
    }, function(err, results) {
        response.send(results)
            // saveToMysql(results)
    })
})

app.listen('3379', function() {
    console.log('server listening on 3379')
})