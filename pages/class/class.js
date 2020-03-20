// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      id: 1,
      title: '商品的名字',
      imgUrl: '/img/index/img@2x.png',
      desc: '简介',
      price: '60.00',
      num: 20,
      status: 1,
    },
    {
      id: 2,
      title: '商品的名字',
      imgUrl: '/img/index/img@2x.png',
      desc: '简介',
      price: '60.00',
      num: 20,
      status: 1,
    },
    {
      id: 3,
      title: '商品的名字',
      imgUrl: '/img/index/img@2x.png',
      desc: '简介',
      price: '60.00',
      num: 20,
      status: 1,
    },
    ]
  },

  select(e) {
    // console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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