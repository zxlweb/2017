//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function(obj) {
        wx.showModal({
            content: obj.shareTicket
        })

        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow: function(obj) {
        console.log(obj)
            // console.log('进入小程序啦')
    },
    onHide: function() {
        // Do something when hide.
        // console.log('进入后台啦')
    },
})