# 注意事项
> 1、服务器配置
配置域名
（1）域名支持吃https，wss协议；
（2）域名不能使用IP地址或localhost，切不能带端口号；
（3）域名必须经过ICP备案；
（4）出于安全考虑，api.weixin.com不可以作为服务器域名，相关API也不能在小程序中调用；开发者需要通过后台服务将appsecrect换取AccessToken，并且调用相关API；
1、https 配置：开发环境可以跳过域名校验；
>2、网络请求
url不能带端口号；
最终发送给服务器的数据类型是string，如果传入的不是string，会转换为string；

## MVC 模式