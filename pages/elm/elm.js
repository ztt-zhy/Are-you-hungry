let {
  request
} = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotCity: [],
    allCity: []
  },

  // 点击跳转事件
  jump(id) {
    let ids = id.currentTarget.dataset.id
    wx.navigateTo({
      url: `../dateil/dateil?id=${ids}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let {
      data
    } = await request("http://elm.cangdu.org/v1/cities?type=hot")
    // console.log(data)
    this.data.hotCity = data
    // q全部城市
    let {
      data: res
    } = await request("http://elm.cangdu.org/v1/cities?type=group")
    this.data.allCity = res
    //获取字母并排序
    let ss = Object.keys(res).sort()
    console.log(res)
    // 视图更新
    this.setData({
      hotCity: this.data.hotCity,
      allCity: this.data.allCity,
      ss: ss
    })
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