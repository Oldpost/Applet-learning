const app = getApp();
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
    console.log('页面D触发onLoad', options)
  },
  // 重定向C
  redirectToC:function(){
    wx.redirectTo({
      url: '../page1/page1',
    })
  },
  // 打开C
  navigateToC:function(){
    wx.navigateTo({
      url: '../page1/page1',
    })
  },
  // 返回
  navigateBackToC:function(){
    wx.navigateBack({
      url:'../page1/page1'
    })
  },
  // 返回A
  clickBackToA: function () {
    wx.switchTab({
      url: '../index/index'
    });
  },
  // 进入B
  clickBackToB: function () {
    wx.switchTab({
      url: '../logs/logs'
    });
  },
  // 重载A
  reLaunchA:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面D触发onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面D触发onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面D触发onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面D触发onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('页面D触发onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})