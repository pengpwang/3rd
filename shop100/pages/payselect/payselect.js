// pages/payselect/payselect.js
import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    orderSn: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let orderSn = options.orderSn
    this.setData({
      orderSn: orderSn
    })
    this.getData()
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

  },
  async getData() {
    let postData = {
      orderSn: this.data.orderSn,
      rid: Math.random()
    }
    let data = await request('payselect', postData, true, 'GET')
    this.setData({
      data: data.data
    })
  },
  async pay() {
    let postData = {
      optionsRadios: 'wxpay',
      orderSn: this.data.data.orderSn,
    }
    let data = await request('pay', postData, true, 'GET')
    let opts = {
      'nonceStr': data.data.apiNoncestr,
      'package': data.data.apiPackage,
      'paySign': data.data.apiPaysign,
      'signType': "MD5",
      'timeStamp': data.data.apiTimestamp,
      'success': () => {
        wx.redirectTo({ url: "/pages/paysuccess/paysuccess?pay=1&orderSn=" + data.data.orderSn });
      },
      'fail': (res) => {
        console.log('res', res)
        wx.showToast({ title: '支付失败：' + res.errMsg, icon: 'none' })
      }
    }
    wx.requestPayment(opts)
  }
})