//page1.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 新增数据相应绑定
  clickToPageD: function () {
    console.log('redirectTo D页面');
    wx.redirectTo({
      url: '../page2/page2'
    })
  },
  // 返回A
  clickBackToA:function(){
    console.log('switchTab A页面');
    wx.switchTab({
      url:'../index/index'
    });
  },
  // 进入B
  clickBackToB: function () {
    console.log('switchTab B页面');
    wx.switchTab({
      url: '../logs/logs'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面C触发onLoad', options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面C触发onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面C触发onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面C触发onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面C触发onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('页面C触发onPullDownRefresh')
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