// pages/zixun/zixun.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vertical:[]
    },
    getvertical(){
       wx.request({
         url: 'http://localhost:8089/app/getvertical',
         method:'GET',
         success:(res)=>{
             console.log(res.data.data)
             this.setData({
                 vertical:res.data.data
             })
         }
       })
    },
    gocontent(id){
        wx.navigateTo({
          url: '/pages/content/content?ids='+id.currentTarget.dataset.info+''
        })
    },
    /**
     * 生命周期函数--监听页面加载a
     */
    onLoad: function (options) {
        this.getvertical()
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