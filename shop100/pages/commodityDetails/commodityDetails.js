// pages/commodityDetails/commodityDetails.js
import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 10000,
    duration: 1000,
    colorActive: '#FB556F',
    color: '#dddddd',
    data: {},
    region: ['请选择城市', '', ''],
    imageHost: 'http://123.207.136.56:8080/ejsimage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.getData(id)
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
  getData: async function (id) {
    let data = await request('/product/'+ id + '.html', {}, true, 'GET')
    this.setData({
      data: data.data
    })
  },
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  nowBuy() {
    wx.navigateTo({
      url: '/pages/acknowledgementOfOrder/acknowledgementOfOrder'
    })
  }
})