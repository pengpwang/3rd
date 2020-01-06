// pages/productList/productList.js
import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    imageHost: 'http://123.207.136.56:8080/ejsimage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let url = '/0-' + id + '-0-0-0-0-0-0-0-0.html'
    this.getData(url)
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
  getData: async function (url) {
    let data = await request(url, {}, true, 'GET')
    this.setData({
      data: data.data
    })
  },
  filterSort(e) {
    let sort = e.currentTarget.dataset.sort
    let urlPath = this.data.data.urlPath
    let urlPaths = urlPath.split("-")
    let url = ""
    for (let i = 0; i < urlPaths.length; i++) {
      if (i == 3) {
        url += sort
      } else {
        url += urlPaths[i]
      }
      if ((i + 1) != urlPaths.length) {
        url += "-"
      }
    }
    this.getData('/' + url + '.html')
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
})