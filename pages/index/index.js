//index.js
//获取应用实例
const app = getApp();
const common = require('../../js/common.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    a:1,
    b:2,
    c:3,
    flag:true,
    name:'Silvia'
  },
  // 隐藏/显示
  showFlag(event){
    console.log(event)
    this.setData({
      flag:!this.data.flag
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs?id=log'
    })
  },
  // 新增数据相应绑定
  clickToPageC:function(){
    console.log('redirectTo C页面');
    wx.redirectTo({
      url: '../page1/page1?id=1'
    })
  },
  navigateToC: function () {
    console.log('navigateTo C页面');
    wx.navigateTo({
      url: '../page1/page1?id=1',
    })
  },
  reLaunchToC:function(){
    wx.reLaunch({

    });
  },
  onLoad: function () {
    var a = 10, b = 20;
    console.log((a && b));
    console.log(common);
    common.sayHello('Silvia');
    common.sayGoodbye('Silvia');
    console.log('页面A触发onLoad')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 测试页面点击当前tab
  onTabItemTap(item) {
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
  },
  onShareAppMessage:function(res){
    // console.log(res);
    if(res.from === 'button'){
      // console.log(res.target)
    }
    return {
      title: '转发测试'
    }
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    console.log('页面A触发onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面A触发onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面A触发onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面A触发onUnload')
  },
})
