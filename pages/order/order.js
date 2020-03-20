// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    tabTitle: ['全部订单', '已购订单','兑换课程'],
    swiperH:'',
    orderList: [
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
      { ordernum: '订单号：1312548550255714', buy: '兑换成功', url: '/img/index/img@2x.png', title: '脐橙修剪的4个误区，你必须要纠正！', url2: '/img/order/icon_renminbi@2x(2).png', desc: '688.00' },
    ],
  },


  getScollH(){
    let height=wx.getSystemInfoSync().windowHeight;
    let width=wx.getSystemInfoSync().windowWidth;
    let r=750/width;
    let h = height*r-102;
    // console.log(h)
    this.setData({
      clinetH:h,
      clinetHStr:`height:${h}rpx;`
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScollH()
  },
  handleItemClick(event){
    const index = event.currentTarget.dataset.index;
    this.setData({
      currentIndex : index
    })
  },
  //滑动切换
  swiperTab: function (e) {
    this.setData({
      currentIndex: e.detail.current
    });
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