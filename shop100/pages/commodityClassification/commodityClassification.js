// pages/commodityClassification/commodityClassification.js
import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    cateIndex: 0,
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
  getData: async function () {
    let data = await request('catelist', {}, true, 'GET')
    for (let item of data.data.cateList) {
      if (item.name.length > 4) {
        item.name = item.name.replace('、', '').substring(0, 4)
      }
    }
    this.setData({
      data: data.data
    })
  },
  changeTab(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      cateIndex: index
    })
  },
  toList(e) {
    let id= e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/productList/productList?id=' + id,
    })
  }
})