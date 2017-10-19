//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    time:'05:00'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  begin:function(event){
    
    wx.showModal({
      title: '请确认',
      content: '准备好了么？',
      cancelText:'没有',
      confirmText:'准备好了',
      success:function(res){
        console.log('success');
        if(res.confirm){
          console.log(data.time)
        }
      },
      fail:function(){
        console.log('fail')
      },
      complete:function(){
        console.log('complete')
      }
    })
  }
})


