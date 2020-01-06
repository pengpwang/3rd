// pages/integralMall/integralMall.js
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
    colorActive: '#FB556F',
    color: '#dddddd',
    userInfo: {},
    imageHost: 'http://123.207.136.56:8080/ejsimage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
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
  getData: async function (sort = 0) {
    let postData = {
      sort: sort
    }
    let data = await request('score', postData, true, 'GET')
    switch (data.data.member.grade) {
      case 1: data.data.member.gradeValue = '普通会员'; break;
      case 2: data.data.member.gradeValue = '铜牌会员'; break;
      case 3: data.data.member.gradeValue = '银牌会员'; break;
      case 4: data.data.member.gradeValue = '金牌会员'; break;
      case 5: data.data.member.gradeValue = '钻石会员'; break;
      default: data.data.member.gradeValue = '普通会员';
    }
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
  async sign() {
    let data = await request('sign', {}, true, 'POST')
    wx.showToast({ title: '领取成功，明天记得来签到哟！', icon: 'none' })
    this.setData({
      'data.isSign': 1
    })
  },
  toScoreDetail: function (e) {
    let id = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/scoreDetail/scoreDetail?id=' + id,
    })
  },
  filterSort(e) {
    let sort = e.currentTarget.dataset.sort
    this.getData(sort) 
  },
})