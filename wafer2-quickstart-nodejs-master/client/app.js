//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function (obj) {
      console.log(obj)
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow:function(){
      // console.log('进入小程序啦')
    },
    onHide: function () {
      // Do something when hide.
      // console.log('进入后台啦')
    },
})