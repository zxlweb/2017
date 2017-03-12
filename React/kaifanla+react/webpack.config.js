var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
     
            loaders:[
            {
                test: /\.js$/, //正则，匹配到的文件后缀名
                loader: 'babel',
                query : {
                    presets : ['es2015','react']
                }
            },
            //加载css代码
            {
                 test: /\.css$/,
                 loader: 'style!css'
             },
             { test: /\.scss$/, loader: "style!css!sass"},
            //配置信息的参数“?limit=8192”表示将所有小于8kb的图片都转为base64形式(其实应该说超过8kb的才使用url-loader 来映射到文件，否则转为data url形式)
            {
                  test: /\.(woff|woff2|ttf|svg|eot)$/,
                  loader: "url?limit=8192"
            },
            {
                   test: /\.(jpg|png)$/,
                   loader: "url?limit=8192"
            }
        ]
    }
};