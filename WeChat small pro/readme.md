# 注意事项
## 配置域名
* （1）域名支持吃https，wss协议；
* （2）域名不能使用IP地址或localhost，切不能带端口号；
* （3）域名必须经过ICP备案；
* （4）出于安全考虑，api.weixin.com不可以作为服务器域名，相关API也不能在小程序中调用；开发者需要通过后台服务将appsecrect换取AccessToken，并且调用相关API；
1、https 配置：开发环境可以跳过域名校验；
2、网络请求
*url不能带端口号；*
**最终发送给服务器的数据类型是string，如果传入的不是string，会转换为string；**
***
## MVC 模式


## WXML
### 数据绑定：动态数据均来自对应 Page 的 data
>简单绑定
```
<view>{{message}}</view> 
Page({
    data:{
        message:'hellow world'
    }
})
```
> 组件属性
> 控制属性
> 关键词
>运算:可以在{{}}内进行简单的计算
```
三元运算符：
 <view hidden="{{flag ? true : false}}"> Hidden </view> 
算数计算：
 <view> {{a + b}} + {{c}} + d </view>
逻辑判断：
 <view wx:if="{{length>5}}"></view>
字符串运算：
 <view>{{"hello"+name}}</view>
 Page({
  data:{
    name: 'MINA'
  }
 })
```

### 列表渲染
wx:for 控制属性，数组当前项默认是item，下标默认为index；
```
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view> 

Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  }
})

```
***
>使用：wx:for-item:指定数组当前元素  
>wx:for-index：指定数组当前的下标名  
```
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```
***


```
用来渲染具有多个节点的代码块

<block wx:for='{{[1,2,3]}}'>
  <view wx:for-index="idx"> {{idx}}: </view>
  <view wx:for-item="blockItem"> {{blockItem}} </view>
</block>
``` 
***

> wx:key
如果列表项目中位置会动态改变或者有新的项目添加到列表中，并且希望列表中项目保持自己的特征和状态，需要使用wx:key
wx:key 的值以两种形式存在<br/>
* 字符串:item 的某个属性
* *this：要求Item本身是一个字符串或者数字

### 条件渲染
在框架中，使用 `wx:if="{{condition}}"` 来判断是否需要渲染改代码块；
* wx:if
* wx:elif
* wx:else <br>

```
<block wx:if="{{true}}">
  <view>view1</view>
  <view>view2</view>
</block>
```
* wx:if vs hidden
### 模板
* 定义模板
```
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>

```
* 使用模板
* 模板的作用域
### 事件

### 生命周期函数


## WXSS


## 配置
> app.json
* pages 数组： 数组的第一项代表小程序的入口页面，小程序增加和减少页面都需要对pages数组做配置，pages中不需要写后缀名


