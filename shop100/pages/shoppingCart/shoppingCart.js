// pages/shoppingCart/shoppingCart.js
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
  toHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  async checkboxChange(e) {
    let id = e.currentTarget.dataset.i
    let checked = e.detail.value.length
    let postData = {
      id,
      checked
    }
    await request('cartchecked', postData, false, 'GET')
    this.getData()
  },
  async checkboxChangeAll(e) {
    let checked = e.detail.value.length
    let postData = {
      checked
    }
    await request('cartcheckedall', postData, false, 'GET')
    this.getData()
  },
  getData: async function () {
    let data = await request('cartDetail', {}, true, 'GET')
    this.setData({
      data: data.data
    })
  },
  cartplus(e) {
    let index0 = e.currentTarget.dataset.index0
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.i
    let num = this.data.data.cartInfoVO.cartListVOs[index0].cartList[index].count
    const max = this.data.data.cartInfoVO.cartListVOs[index0].cartList[index].productGoods.productStock
    if (num < max) {
      const p = 'data.cartInfoVO.cartListVOs[' + index0 + '].cartList[' + index + '].count'
      this.setData({
        [p]: num + 1
      })
      this.updateSingle(id, num + 1)
    }
  },
  cartminus(e) {
    let index0 = e.currentTarget.dataset.index0
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.i
    let num = this.data.data.cartInfoVO.cartListVOs[index0].cartList[index].count
    if (num > 1) {
      const p = 'data.cartInfoVO.cartListVOs[' + index0 + '].cartList[' + index + '].count'
      this.setData({
        [p]: num - 1
      })
      this.updateSingle(id, num - 1)
    }
  },
  checkedChange() {
    let id = e.currentTarget.dataset.i
  },
  async deleteCart(e) {
    let id = e.currentTarget.dataset.i
    let postData = {
      id
    }
    await request('deleteCartById', postData, false, 'GET')
    this.getData()
  },
  async updateSingle(id, count) {
    let postData = {
      id,
      count
    }
    await request('updateCartById', postData, false, 'POST')
    this.getData()
  },
  toBuy() {
    wx.navigateTo({
      url: '/pages/acknowledgementOfOrder/acknowledgementOfOrder'
    })
  },
  toDeatil(e) {
    let id = e.currentTarget.dataset.i
    let goodId = e.currentTarget.dataset.goodid
    wx.navigateTo({
      url: '/pages/commodityDetails/commodityDetails?id=' + id + '&goodId=' + goodId
    })
  }
})