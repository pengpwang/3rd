import regeneratorRuntime from './runtime.js'
const baseHost = "http://test1.100smartdata.cn/miniProgram"
const baseUrl = {
  getToken: baseHost + "/wechat/getToken", // 获取接口token
  getPhone: baseHost + "/wechat/getRegisterPhone", // 解密手机号
  index: baseHost + "/index.html", // 首页数据
  order: baseHost + "/order/info.html?isBuyNow=YES", // 订单确认页面
  buyNow: baseHost + "/cart/addtocart.html",
  getGoodsInfo: baseHost + "/getGoodsInfo.html",
  ordercommit: baseHost + "/order/ordercommit.html",
  payselect: baseHost + "/order/pay.html",
  pay: baseHost + "/pay.html",

  docollectproduct: baseHost + "/member/docollectproduct.html", //关注
  cancelcollectproduct: baseHost + "/member/cancelcollectproduct.html", //取消关注
  docollectshop: baseHost + "/member/docollectshop.html", //收藏店铺
  cancelcollectshop: baseHost + "/member/cancelcollectshop.html", //取消收藏店铺
  cartDetail: baseHost + "/cart/detail.html", //购物车
  updateCartById: baseHost + "/cart/updateCartById.html", // 更新购物车数量
  cartchecked: baseHost + "/cart/cartchecked.html", // 购物车选中
  cartcheckedall: baseHost + "/cart/cartcheckedall.html", // 购物车全选
  deleteCartById: baseHost + "/cart/deleteCartById.html", //购物车删除
  catelist: baseHost + "/catelist.html", //分类查询
  cate: baseHost + "/cate.html", //分类查询列表
  member: baseHost + "/member/index.html", //分类查询列表
  
}
function request(url, postData = {}, toast = true, method = 'POST') {
  const app = getApp()
  postData.memberId = 1
  return new Promise( (resolve, reject) => {
    let realUrl = baseUrl[url]
    if (!realUrl) {
      realUrl = baseHost + url
    }
    let paras = {
      url: realUrl + '?t=' + new Date().getTime(),
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
          reject(data.data)
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
