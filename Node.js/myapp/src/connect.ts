let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'todoapp'
});
connection.connect(function (err: any) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    // let createTodos = `create table if not exists todos(
    //     id int primary key auto_increment ,
    //     title varchar(255) not null,
    //     completed tinyint(1) not null default 0
    // )`

    // 使用 ？作为字段的占位符
    // let sql = `insert into todos(title,completed) values(?,?)`
    // let todos = ['insert a new data with placeholder', false]


    // 查询语句
    let sql = `select * from todos`;
    connection.query(sql, function (err: any, results: any, fields: any) {
        if (err) {
            console.log(err)
        }
        console.log(results)
    })

    //connection.destroy();
    connection.end(function (err: any) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
});