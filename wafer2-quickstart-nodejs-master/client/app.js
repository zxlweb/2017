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
        wx.getShareInfo({
            shareTicket: obj.shareTicket,
            success: function(res) {
                // 对加密数据进行对称解密算法
                /**
                 *  对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充。
                    对称解密的目标密文为 Base64_Decode(encryptedData)。
                    对称解密秘钥 aeskey = Base64_Decode(session_key), aeskey 是16字节。
                    对称解密算法初始向量 为Base64_Decode(iv)，其中iv由数据接口返回。
                 */
                console.log(res)
            }
        })
        console.log(obj)
            // console.log('进入小程序啦')
    },
    onHide: function() {
        // Do something when hide.
        // console.log('进入后台啦')
    },
})