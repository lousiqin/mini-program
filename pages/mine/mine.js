// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        url: '/img/mine/My／icon24x24_feedback.png',
        title: '我的收藏1',
        desc: ''
      },
      {
        url: '/img/mine/My／icon24x24_feedback@2x(1).png',
        title: '我的订单2',
        desc: ''
      },
      {
        url: '/img/mine/My／icon24x24_feedback@2x(2).png',
        title: '我的积分3',
        desc: ''
      },
      {
        url: '/img/mine/My／icon24x24_feedback@2x(3).png',
        title: '课程兑换4',
        desc: '专家服务1'
      },
      {
        url: '/img/mine/My／icon24x24_feedback.png',
        title: '我的收藏5',
        desc: ''
      }
    ],
    username: '',
    showModel:false,
  },
  show(){
    this.setData({
      showModel:true
    })
  },
  myclick(e){
    if (e.detail.status){
    console.log('点击确定')
    }else{
      console.log('点击取消')
      this.setData({
        showModel:false
      })
    }
  },
  userInput(e) {
    this.data.username = e.detail.value
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