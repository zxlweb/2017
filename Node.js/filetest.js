var fs = require('fs');
// 异步读取文件

fs.readFile('./test/1.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        // console.log(data)
        // let str = data.toString('utf-8');
        console.log(data);
    }

});

// 同步读取文件


// let data = fs.readFileSync('./test/1.txt', 'utf-8');
// console.log(data);
//console.log('sync')