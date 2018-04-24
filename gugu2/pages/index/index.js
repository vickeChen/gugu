//index.js
//获取应用实例
const app = getApp()
var listNum = 0;

var arraylist = []    //任务视图的数组，初始化为空，点击按钮后向其中添加对象
Page({
  data: {
    addPic: '/pic/add.png',  //添加按钮的未点击状态
    array: '',
    scrollTop: 100,
    toView: 'task',
    scrollleft: -200
  
  },

  touchAdd: function (e) {  //点击按钮的时候 页面跳转到设置任务界面 希望在设置任务
    var item = {            //界面的参数能够回传以此生成每一个任务的小视图
     listId: listNum
    }
    
    wx.navigateTo({
      url: '/pages/task/task',
      success: function(res){
        listNum++;          //task增加
        arraylist.push(item)  //加入list
        this.setData({
          addPic: '/pic/addHl.png',
          array: arraylist,
          listId: listNum,
        })
      }.bind(this)
    })
   
    //console.log(arraylist)
  },
  deleteTask: function(){
    
  },

  cancelAdd: function (e) {  //取消点击
    this.setData({
      addPic: '/pic/add.png'
    })
  },
  lower: function (e) {  //滑动时候的参数显示
   // console.log(e)
   setTimeout(function(){    //5秒后回滚
     this.setData({
       toView: 'task'
     })
    // console.log("run");
   }.bind(this),5000)

  },
  upper: function (e) {
   // console.log(e)
  },
  scroll: function (e) {
   // console.log(e)
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  deleteTask: function(e){
    var num = e.target.id     //获取当前view的id
    console.log(this.data.array);
    //delete arraylist[num];  //删除id
    var i = 0;
    for(; i < this.data.array.length; i++){
      if(this.data.array[i].listId == parseInt(num))  //找出当前view的index
      break;
    }
    arraylist.splice( i, 1);   //删除当前view
    this.setData({
      array: arraylist
    })
  }

})
