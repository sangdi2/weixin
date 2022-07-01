// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       swiper:[
           {id:1,url:'/images/one.png'},
           {id:2,url:'/images/two.png'},
           {id:3,url:'/images/three.png'},
           {id:4,url:'/images/four.png'},
           {id:5,url:'/images/five.png'}
    ],
       nav:[
           {id:1,url:'/images/course.png',text:'课程'},
           {id:2,url:'/images/zixun.png',text:'资讯'},
           {id:3,url:'/images/shoucang.png',text:'收藏'}
       ],
       courseinformation:[],
       text:[]
    },
    getinformation(){
        wx.request({
          url: 'http://localhost:8089/api/getcourse',
          method:'GET',
          header: {
            'content-type': 'application/json'
          },
          success:(res)=>{
             console.log(res.data.data)
             
              this.setData({
                  courseinformation:res.data.data
              })
              
          }
        })
    },
    navgitor(text){
       console.log(text.currentTarget.dataset.info)
       if(text.currentTarget.dataset.info==='课程')
       {
           wx.navigateTo({
             url: '/pages/course/course',
           })
       }
       else if(text.currentTarget.dataset.info==='资讯')
       {
           wx.switchTab({
             url: '/pages/zixun/zixun',
           })
       }else{
        wx.navigateTo({
          url: '/pages/like/like',
        })
       }
    },
    btn(id){
        console.log(id.currentTarget.dataset.info)
        wx.navigateTo({
          url: '/pages/video/video?ids='+id.currentTarget.dataset.info+''
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       this.getinformation()
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