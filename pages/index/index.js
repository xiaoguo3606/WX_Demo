//index.js
//获取应用实例
var app = getApp()
var controlShowModal=0;

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
  },
  controlObjectEvent:function(){
    
    if(controlShowModal==0){
      wx.showModal({
        title: '说明',
        content: '请选择技术上最重要的控制对象；若指标之间有因果关系，则宁可取作为因的指标为统计量；控制对象要明确，并为大家理解与同意；控制对象要能以数字来表示；控制对象要选择容易测定并对过程容易采取措施者。',
        showCancel: false,
        confirmText: '我知道了',
        complete: function () {
          controlShowModal++;
        }
      })
    }
    
  }
})


