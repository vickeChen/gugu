// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  okTask: function(){
    wx.navigateBack({
      url: '/pages/index/index',
      success:function(res){
          
    }  
    })
    
  }
})