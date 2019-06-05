var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var path = require('path');
var fs = require('fs');
let mysql = require('mysql');
let request = require('request');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'registerService'
});

router.post('/register', function(req, res) {
    var user = req.body;
    console.log(req.body, 'req.body');
    request('https://web.umeng.com/main.php?c=cont&a=page&ajax=module=summarysource|module=safeinfo|module=statistics_orderBy=pv_orderType=-1_dataType=source_currentPage=1_pageType=30&siteid=1266419198&st=2018-07-04&et=2018-07-04&sourcetype=&condtype=&condname=&condvalue=', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body, 'body')
            console.log(response, 'response')
        }
        console.log(error, 'errorBug')
    })
    let sql = `select * from newStudent where stu_name='${user.stu_name}'`;
    connection.query(sql, function(err, results, fields) {
        if (err) {
            res.send({ code: 1, message: '注册失败' });
        }
        console.log(results, 'results')
        if (results.length == 0) {
            //插入数据
            sql = `insert into newStudent(stu_name,tel_number)values(?,?)`;
            let params = [user.stu_name, user.tel_number];
            connection.query(sql, params, function(err, results, fields) {
                console.log(err, 'err')
                console.log(results, 'results');

                res.send({ code: 0, content: '插入成功' });
            })


        }
    })


})

module.exports = router;