// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: -1,
    collectList: [{
        url: '/img/collect/img.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误必须要…'
      },
      {
        url: '/img/collect/img(1).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误必须要…'
      },
      {
        url: '/img/collect/img(2).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        desc: '脐橙修剪的4个误必须要…'
      },
    ],
  },
  handleHeartClick(event) {
    const index = event.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
      collected: !this.data.collected
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})