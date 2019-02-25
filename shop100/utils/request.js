import regeneratorRuntime from './runtime.js'
const baseHost = "http://123.207.136.56/miniProgram"
const baseUrl = {
  // getToken: baseHost + "/wechat/getToken", // 获取接口token
  // getPhone: baseHost + "/wechat/getRegisterPhone", // 解密手机号
  index: baseHost + "/index.html", // 首页数据
  
}
function request(url, postData = {}, toast = true, method = 'POST') {
  const app = getApp()
  return new Promise( (resolve, reject) => {
    let paras = {
      url: baseUrl[url] + '?t=' + new Date().getTime(),
      data: postData,
      header: {
        // token: app ? app.globalData.token : '', // 登录token
        // addressId: app ? app.globalData.addressId : '', // 门店id
        // businessId: 1, // 商家id
        "content-type": "application/x-www-form-urlencoded"
      },
      method,
      success: data => {
        if (toast) {
          wx.hideLoading()
        }
        console.log(url+'返回成功：', data.data)
        if (data.data.success == true) {
          resolve(data.data)
        } else {
          // reject(data.data.msg)
          if (toast && data.data.message) {
            wx.showModal({
              title: '提示',
              content: data.data.message,
              showCancel: false
            })
          } else if (toast) {
            wx.showModal({
              title: '提示',
              content: '请求失败，请重试',
              showCancel: false
            })
          }
          resolve(data.data)
        } 
      },
      fail: (err) => {
        if (toast) {
          wx.hideLoading()
        } 
        wx.showToast({title: '请求失败，网络错误！', icon: 'none' })
        console.error(url +'返回失败：', err)
        reject(err)
      }
    }
    console.log('请求url：', url)
    console.log('请求参数：', postData)
    if (toast) {
      wx.showLoading({ title: '加载中...', mask: true})
    }
    wx.request(paras)
  })
}
module.exports = {
  request,
  regeneratorRuntime,
  baseHost
}
