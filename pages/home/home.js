//pages/home/home.js
//getApp()获取App产生的示例对象 而这个示例对象有保存着 全局共享数据里面保存的那些东西 包括那些生命周期
const app =getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
const name = app.globalData.name;
const age = app.globalData.age

//注册一个页面      页面也有自己的生命周期函数
Page
({
//2 初始化数据
  data:{
    message:"哈哈哈",
    list:[]

  },
handleGetUserInfo(event){
  console.log(event)
},
//---------------
//  1.监听页面的生命周期函数
//页面被你加载出来时
onLoad() {
  console.log('onLoad')
  wx.request({
    url: 'http://123.207.32.32:8000/recommend',
    //箭头函数中的this一层层往上找
    success: (res) => {
      console.log(res)
      const data = res.data.data.list;
      this.setData({
        list:data
      })
    }
  })
},
//换一种写法 这里面的this如果在前端开发中指向的就是window 而不是上面那个page对象 在此处打印出来就是undefined 相当于
//     success: function(res) {
//       console.log(res)
//       const data = res.data.data.list;
//       // this.setData({
//      undefined.setData({
//         list: data
//       })
// }

// // 如果不写成箭头函数的话就这样写就没问题
//     nLoad() {
//       console.log('onLoad')
//       const _this = this;
    
//       wx.request({
//         url: 'http://123.207.32.32:8000/recommend',
//         //箭头函数中的this一层层往上找
//         success: (res) => {
//           console.log(res)
//           const data = res.data.data.list;
//           _this.setData({
//             list: data
//           })
//         }
//       })
//     },

//页面初次渲染完成时
onReady() {
  console.log('onReady')
},
//页面显示出来时
onShow() {
  console.log('onShow')
},
//当页面隐藏起来时
onHide() {
  console.log('onHide')
},
onUnload(){
  console.log('onUnload')
},

//--------------3.监听wxml中相关的一些事件如-------
    handleGetUserInfo(event) {
      console.log(event)
    },

    handleViewClick(){
      console.log('哈哈哈被点击了')
    },
  
  // -------4.监听其它事件------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
  })
// 编程范式：
// 1命令式编程：原生操作DOM
// 2声明式编程：vue/react/angular