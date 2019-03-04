// pages/personalCenter/personalCenter.js
import { request, regeneratorRuntime } from '../../utils/request.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log('app.globalData.userInfo', app.globalData.userInfo)
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
    this.getData()
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
    let data = await request('member', {}, true, 'GET')
    switch (data.data.member.grade) {
      case 1: data.data.member.gradeValue = '普通会员';break;
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
})