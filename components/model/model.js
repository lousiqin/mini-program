// components/model/model.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    title:{
      type: String,
      value:''
    },
    cancelText:{
      type: String,
      value: '取消'
    },
    cancelColor: {
      type: String,
      value: '#000000'
    },
    canfirmText: {
      type: String,
      value: '兑换'
    },
    canfirmColor: {
      type: String,
      value: '#ffffff'
    },
    inputOption:{
      type:Object,
      vlaue:[]
    }
  },

  observers:{ //监听
    'inputOtion':function(e){
      console.log(e)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      key1:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e){
      var myEventDetail = {
        status:e.currentTarget.dataset.type
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('click', myEventDetail, myEventOption) //注册一个名字为click的事件
    }
  },
  options: {
    multipleSlots: true // 允许组件中使用多个slot
  }
})
