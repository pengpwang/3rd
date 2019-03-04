// pages/groupBuying/groupBuying.js
import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 1000,
    colorActive: '#FB556F',
    color: '#dddddd',
    data: {},
    type: '',
    imageHost: 'http://123.207.136.56:8080/ejsimage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  getData: async function (e) {
    let type = ''
    if (e) {
      type = e.currentTarget.dataset.type || ''
    }
    let postData = {}
    if (type) {
      postData.type = type
    }
    this.setData({
      type: type
    })
    let data = await request('tuan', postData, true, 'GET')
    this.setData({
      data: data.data
    })
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.i
    let linkUrl = e.currentTarget.dataset.link
    if (!id && linkUrl) {
      id = linkUrl.split('/')[2]
      id = id.split('.')[0]
    }
    wx.navigateTo({
      url: '/pages/commodityDetails/commodityDetails?id=' + id
    })
  },
  tuanDetail: function (e) {
    let id = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/tuanDetail/tuanDetail?id=' + id,
    })
  }
})