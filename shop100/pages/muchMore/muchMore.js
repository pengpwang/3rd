// pages/muchMore/muchMore.js
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
    type: 2,
    typeId: '',
    showMore: false,
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
    let postData = {}
    let typeId = ''
    if (e && e.currentTarget.dataset.i) {
      typeId = e.currentTarget.dataset.i
      postData.type = typeId
    }
    this.setData({
      typeId: typeId
    })
    let type = this.data.type
    let url = ''
    if (type==1) {
      url = 'biddingEnd'
    } else if (type == 2) {
      url = 'bidding'
    } else if (type == 3) {
      url = 'biddingStart'
    }
    let data = await request(url, postData, true, 'GET')
    this.setData({
      data: data.data,
      showMore: false
    })
  },
  changeType(e) {
    this.setData({
      type: e.currentTarget.dataset.type,
      showMore: false
    })
    this.getData()
  },
  setShowMore() {
    this.setData({
      showMore: !this.data.showMore
    })
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.i
    let linkUrl = e.currentTarget.dataset.link
    if (!id && linkUrl) {
      id = linkUrl.split('/')[2]
      id = id.split('.')[0]
    }
    console.log('id', id)
    wx.navigateTo({
      url: '/pages/commodityDetails/commodityDetails?id=' + id
    })
  },
  toMoreDetail(e) {
    let id = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/muchMoreDetails/muchMoreDetails?id=' + id
    })
  }
})