//logs.js
const util = require('../../utils/util.js')
Page({
/**
* 页面的初始数据
*/
data: {
logs: [],
text: 




},
/**
* 生命周期函数--监听页面加载
*/
onLoad: function (options) {
  wx.getLocation({
    type: 'wgs84',
    altitude: true,
    success: function (res) {
      var latitude = res.latitude
      var longitude = res.longitude

   

   


    fail: function (res) { },
    complete: function (res) { },
  })

 this.setData({

 },

)


 
}})