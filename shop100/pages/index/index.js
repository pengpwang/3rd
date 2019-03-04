// pages/index/index.js
import { request, regeneratorRuntime } from '../../utils/request.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 1000,
    colorActive:'#FB556F',
    color:'#dddddd',
    imageHost: 'http://123.207.136.56:8080/ejsimage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.globalData.userInfo) {
      this.getUserInfo()
    }
    this.getData()
    this.login()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    
  },
  getData: async function () {
    let data = await request('index', {}, true, 'GET')
    this.setData({
      data: data.data
    })
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
  toDetail: function (e) {
    let id = e.currentTarget.dataset.i
    let linkUrl = e.currentTarget.dataset.link
    if (!id && linkUrl) {
      id = linkUrl.split('/')[2]
      id = id.split('.')[0]
    }
    console.log('id',id)
    wx.navigateTo({
      url: '/pages/commodityDetails/commodityDetails?id=' + id
    })
  },
  toCateList: function () {
    wx.switchTab({
      url: '/pages/commodityClassification/commodityClassification'
    })
  },
  toBuyList: function () {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart'
    })
  },
  toMember: function () {
    wx.switchTab({
      url: '/pages/personalCenter/personalCenter'
    })
  },
  toBuy: function () {
    // wx.navigateTo({
    //   url: ''
    // })
  },
  toCouponList: function () {
    wx.navigateTo({
      url: '/pages/couponList/couponList'
    })
  },
  toPing: function () {
    wx.navigateTo({
      url: '/pages/muchMore/muchMore'
    })
  },
  toScore: function () {
    wx.navigateTo({
      url: '/pages/integralMall/integralMall'
    })
  },
  toTuan: function () {
    wx.navigateTo({
      url: '/pages/groupBuying/groupBuying'
    })
  },
  login: function () {
    if (app.globalData.openId) {
      return true
    }
    return new Promise((resolve) => {
      // 登录
      wx.login({
        success: async res => {
          if (res.code) {
            let data = await request('getToken', {
              code: res.code
            })
            app.globalData.openId = data.data.openId
            console.log('openId', app.globalData.openId)
            app.globalData.sessionKey = data.data.sessionKey
            if (data.data.phoneNumber) {
              app.globalData.phone = data.data.phoneNumber
            }
            return resolve()
          }
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    })
  },
  getUserInfo: function () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
            }
          })
        } else {
          wx.redirectTo({
            url: '/pages/userInfo/userInfo',
          })
        }
      }
    })
  },
  getUserPhone: function () {
    if (app.globalData.phone) {
      return true
    }
    wx.redirectTo({ url: "/pages/phone/phone" });
  },
})