// components/goods/goods.js
Component({
  /**
   */
  properties: {
    goodInfo: {
      type: Object,
      value: null
    },
    goodtype: {
      type: String,
      value: 'collect' // 默认list类型，对应首页的那种样式，collect对应收藏，order对应订单
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isshow: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickOn(e) {
      // console.log(e)
      // console.log(this.data.goodtype)
      var myEventDetail = this.data.goodtype;
      var myEventOption = {};
      this.triggerEvent('click', myEventDetail, myEventOption)
    },
    onshow() {
      let isshow = this.data.isshow
      isshow = !isshow
      this.setData({
        isshow 
      })
    }
  }
})