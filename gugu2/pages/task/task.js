const date = new Date()
const years = []
const months = []
const days = []

var timestamp = Date.parse(new Date());
var adate = new Date(timestamp);
//年  
var Y = adate.getFullYear();

//月  
var M = (adate.getMonth() + 1 < 10 ? '0' + (adate.getMonth() + 1) : adate.getMonth() + 1) ;
M = parseInt(M) - 1;
console.log(M);
//日  
var D = adate.getDate() < 10 ? '0' + adate.getDate() : adate.getDate() - 1;  
for (let i = 2010; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: M,
    days: days,
    day: D,
    value: [9999, M, D],
  
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
    
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
    console.log(val)
  }
})