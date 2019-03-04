import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      memberName: '',
      mobile: '',
      addressInfo: '',
      addAll: '',
      id: ''
    },
    data: {},
    imageHost: 'http://123.207.136.56:8080/ejsimage',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let productId = options.productId
    let goodsId = options.goodsId
    let sellerId = options.sellerId
    let tuanId = options.tuanId
    let buyNum = options.buyNum
    this.getData({ productId, goodsId, sellerId, tuanId, buyNum})
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
  async getData(para) {
    let url = '/order/tuan-' + para.productId + '-' + para.goodsId + '-' + para.sellerId + '-' + para.tuanId + '-' + para.buyNum + '.html'
    let data = await request(url, {}, true, 'GET')
    this.setData({
      data: data.data,
      address: data.data.address
    })
  },
  updateAddress() {
    wx.navigateTo({
      url: '/pages/addressManagement/addressManagement'
    })
  },
  async toPay() {
    if (!this.data.address.id) {
      wx.showToast({ title: '请添加或选择收货地址', icon: 'none' })
      return
    }
    let postData = {
      productId: this.data.data.product.id,
      productGoodsId: this.data.data.productGoods.id,
      sellerId: this.data.data.seller.id,
      actGroupId: this.data.data.actGroup.id,
      number: this.data.data.number,
      paymentCode: 'ONLINE',
      paymentName: '在线支付',
      addressId: this.data.address.id,
    }
    let data = await request('ordercommitforgroup', postData, true, 'POST')
    let orderSn = data.data.mainOrder.orderSn
    if (data.data.goJumpPayfor) {
      wx.navigateTo({
        url: '/pages/payselect/payselect?orderSn=' + orderSn,
      })
    } else {
      // wx.navigateTo({
      //   url: '/pages/paysuccess/paysuccess?orderSn=' + orderSn,
      // })
    }

  }
})