bDnner轮播-swiper组件


组件的最基本模板

<swiper>
    <swiper-item>
        <text>A</text>    
    </swiper-item>
        <swiper-item>
        <text>B</text>    
    </swiper-item>
        <swiper-item>
        <text>C</text>    
    </swiper-item>
        <swiper-item>
        <text>D</text>    
    </swiper-item>
</swiper>

四个分页的banner的基本模板如上

一般情况下，我们的banner组件需要更具实际请况使用，根据后端返回的数据来显示他

模拟一个数据
bannerList: [
      { url: '/image/index/img@2x.png' },
      { url: '/image/index/img@2x.png' },
      { url: '/image/index/img@2x.png' },
      { url: '/image/index/img@2x.png' },
      { url: '/image/index/img@2x.png' },
]

根据上面的这个数据来渲染我们的banner组件

我们使用block来写swiper-item的循环(wx:for)

知识点讲解
let arr=[
      { url: '/image/index/img@2x.png',list:[1,2,3,4] },
      { url: '/image/index/img@2x.png',list:[1,2,3,4] },
      { url: '/image/index/img@2x.png',list:[1,2,3,4] },
      { url: '/image/index/img@2x.png',list:[1,2,3,4] },
      { url: '/image/index/img@2x.png' ,list:[1,2,3,4]},
]
//在es6的语法中，我们使用forEach循环来遍历整个数组
arr.forEach((item,index)=>{
    console.log(item)
    console.log(index)
})

<!-- 错误示范 -->
<swiper>
    <block wx:for='{{bannerList}}' wx:key='item.url' >
        <!-- item:  { url: '/image/index/img@2x.png',list:[1,2,3,4] }-->
        <swiper-item>
            <block wx:for='{{item.list}}'>
                <!-- item:[1,2,3,4]     -->
                <image src='{{item.url}}'></image>      <!--会报错 当前的item指的是list,list下面没有url这个对象 -->
                <text>{{item}}</text>    
            </block>
        </swiper-item>
    </block>
</swiper>


<!-- 正确 -->
<swiper>
    <block wx:for='{{bannerList}}' wx:key='item.url' wx:for-item='f_item' wx:for-index='f_index'>
        <!-- f_item:  { url: '/image/index/img@2x.png',list:[1,2,3,4] } -->
        <swiper-item>
            <block wx:for='{{f_item.list}}' wx:for-item='c_item' wx:for-index='c_index' wx:key='c_item'>
                <!-- f_item:{ url: '/image/index/img@2x.png',list:[1,2,3,4] }-->
                <!-- c_index:list:[1,2,3,4]-->
                <image src='{{f_item.url}}'></image>     
                <text>{{c_item}}</text>    
            </block>
        </swiper-item>
    </block>
</swiper>



wx:for =>  后面跟随的是需要被循环的数据
wx:key =>  这个的作用呢,是用来做一个标记的，一般来说需要你们用一个唯一值来给他做标记，当然不要是用下标，你不写的化不会报致命错误，会有警告就是了
wx:for-item     =>给当前这一层循环的item起一个别名(默认是item)
wx:for-index    =>给当前这一层循环的index起一个别名(默认是index)







