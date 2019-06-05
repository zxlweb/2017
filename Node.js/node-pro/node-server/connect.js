let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'registerService'
});
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    // 查询语句
    let sql = `select * from newStudent`;
    connection.query(sql, function(err, results, fields) {
        if (err) {
            console.log(err)
        }
        console.log(results)
    })

    //connection.destroy();
    connection.end(function(err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
});