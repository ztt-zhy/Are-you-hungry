let request = function (url, data = [], method = "GET") {
  wx.showLoading({
    title: '加载中',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method, //请求方式
      success: (res) => {
        resolve(res)},
      fail(res) {
        reject(res)},
      complete() {
        wx.hideLoading()
      }
    })
  })
}
module.exports={request}  //导出