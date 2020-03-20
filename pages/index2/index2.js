// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [{
        url: '/img/index/img@2x.png'
      },
      {
        url: '/img/index/img@2x.png'
      },
      {
        url: '/img/index/img@2x.png'
      },
      {
        url: '/img/index/img@2x.png'
      },
      {
        url: '/img/index/img@2x.png'
      },
    ],
    newClass: [{
        url: '/img/index/img@2x.png',
      title: '脐橙修剪的4个误区，你必须要纠正！'
      },
      {
        url: '/img/index/img@2x.png',
        title: '脐橙修剪的4个误区，你必须要纠正！'
      },
      {
        url: '/img/index/img@2x.png',
        title: '脐橙修剪的4个误区，你必须要纠正！'
      },
      {
        url: '/img/index/img@2x.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
      },
      {
        url: '/img/index/img@2x.png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
      },
    ],
    newClass2: [{
      url: '/img/index/img@2x.png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      desc: '脐橙修剪的4个误区，你必…',
    },
    {
      url: '/img/index/img(1).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      desc: '脐橙修剪的4个误区，你必…',
    },
    {
      url: '/img/index/img(2).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      desc: '脐橙修剪的4个误区，你必…',
    },
    ],
    newClass3: [{
      url: '/img/index/img@2x(3).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      title2: '脐橙修剪的4个误区,你…',
    },
    {
      url: '/img/index/img@2x(5).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      title2: '脐橙修剪的4个误区，你…',
    },
    {
      url: '/img/index/img@3x(4).png',
      title: '脐橙修剪的4个误区，你必须要纠正！',
      title2: '脐橙修剪的4个误区，你…',
    },
      {
        url: '/img/index/img@3x(2).png',
        title: '脐橙修剪的4个误区，你必须要纠正！',
        title2: '脐橙修剪的4个误区，你…',
      },
    ],
  },

  click_good(e){
    console.log(e.currentTarget.dataset.item)
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
  onShareAppMessage: function(res) {
    if(res.from === 'button') {
      console.log(res.target)
      console.log('click')
    } else{
      console.log('转发来自顶部')
    }
    return {
      title:'我自己定义的标题',
      path:'/pages/index2/index2?fromshare=true',
      imageUrl:'/img/index/img@2x.png'
    }
  }
})