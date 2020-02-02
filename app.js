//注册一个小程序
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log("小程序初始化完成了")
    console.log(options)
  
  // wx.request({
  //   url: '',
  // })
  
  wx.getUserInfo({
    //这个是数据拿到之后再进行回调的 
    success: function(res) {
      console.log(res)
    }
  })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
      break;
      case  1005:
      break
    }

    // 2 获取用户信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  // 在这儿定义的全局数据是可以在其它地方共享的
  globalData:{
    name:'coderwhy',
    age:18
  }
})
