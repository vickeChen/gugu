//index.js
//获取应用实例
const app = getApp()
var arraylist = []    //任务视图的数组，初始化为空，点击按钮后向其中添加对象
Page({
  data: {
    addPic: '/pic/add.png',  //添加按钮的未点击状态
    array: '',
    scrollTop: 100,
  


  },

  touchAdd: function (e) {  //点击按钮的时候 页面跳转到设置任务界面 希望在设置任务
    var item = {            //界面的参数能够回传以此生成每一个任务的小视图
      top: 'section',
      down: 'block'
    }
    wx.navigateTo({
      url: '/pages/task/task'
    })
    arraylist.push(item)
    this.setData({
      addPic: '/pic/addHl.png',
      array: arraylist
    })
  },

  cancelAdd: function (e) {  //取消点击
    this.setData({
      addPic: '/pic/add.png'
    })
  },
  upper: function (e) {  //滑动时候的参数显示
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }

})
