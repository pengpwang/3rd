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
    imageHost: 'http://123.207.136.56:8080/ejsimage',
    normAttr0: '',
    normAttrId0: '',
    normAttr1: '',
    normAttrId1: '',
    amount: 1,
    money: '',
    productGoodsId: '',
    productStock: 0,
    btnDisable: false,
    save: true, // 是否关注
    saveShop: false, // 收藏店铺
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let goodId = options.goodId || ''
    this.getData(id, goodId)
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
  getData: async function (id, goodId) {
    let postData = {}
    if (goodId) {
      postData.goodId = goodId
    }
    let data = await request('/product/' + id + '.html', postData, true, 'GET')
    this.setData({
      data: data.data,
    })
    let norms = data.data.norms
    if (norms[0]) {
      this.setData({
        normAttr0: norms[0].attrList[0].name,
        normAttrId0: norms[0].attrList[0].id
      })
    }
    if (norms[1]) {
      this.setData({
        normAttr1: norms[1].attrList[0].name,
        normAttrId1: norms[1].attrList[0].id
      })
    }
    let normAttrId = data.data.goods.normAttrId.split(',')
    let normAttrName = data.data.goods.normName.split(';')
    if (normAttrId.length > 0) {
      if (normAttrId[0]) {
        this.setData({
          normAttr0: normAttrName[0].split(',')[1],
          normAttrId0: normAttrId[0]
        })
      }
      if (normAttrId[1]) {
        this.setData({
          normAttr1: normAttrName[1].split(',')[1],
          normAttrId1: normAttrId[1]
        })
      }
    }
    this.setData({
      money: data.data.goods.mallMobilePrice,
      productStock: data.data.goods.productStock,
      save: data.data.statisticsVO.collectedProduct,
      saveShop: data.data.statisticsVO.collectedShop
    })
    this.getGoodInfo()
  },
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  chooseAttr(e) {
    let id = e.currentTarget.dataset.i
    let name = e.currentTarget.dataset.name
    let index = e.currentTarget.dataset.index
    let attrName = 'normAttr' + index
    let attrId = 'normAttrId' + index
    this.setData({
      [attrName]: name,
      [attrId]: id
    })
    this.getGoodInfo()
  },
  async getGoodInfo() {
    let normAttrId = ''
    if (this.data.normAttrId0) {
      normAttrId = this.data.normAttrId0
    }
    if (this.data.normAttrId1) {
      normAttrId += ',' + this.data.normAttrId1
    }
    let postData = {
      productId: this.data.data.productId,
      normAttrId: normAttrId
    }
    let data = await request("getGoodsInfo", postData, false, 'POST')
    if (data.data.id) {
      this.setData({
        money: data.data.mallMobilePrice,
        productStock: data.data.productStock,
        productGoodsId: data.data.id,
        btnDisable: false
      })
    } else {
      //无货品信息 则不能添加购物车和购买
      // alert("货品信息为空，请与管理员联系");
      wx.showToast({ title: '货品信息为空，请与管理员联系', icon: 'none' })
      this.setData({
        btnDisable: true
      })
    }
  },
  removeNum() {
    if (this.data.amount > 1) {
      this.setData({
        amount: this.data.amount - 1
      })
    }
  },
  addNum() {
    if (this.data.amount < this.data.data.goods.productStock) {
      this.setData({
        amount: this.data.amount + 1
      })
    }
  },
  async buyNow(e) {
    let type = e.currentTarget.dataset.type
    let postData = {
      productId: this.data.data.productId,
      productGoodId: this.data.productGoodsId,
      number: this.data.amount,
    }
    await request('buyNow', postData, true, 'POST')
    if (type == 1) { // 购买
      wx.navigateTo({
        url: '/pages/acknowledgementOfOrder/acknowledgementOfOrder'
      })
    } else { // 添加购物车
      wx.showToast({ title: '添加成功', icon: 'none' })
      let num = this.data.data.cartNumber
      if (!num) {
        num = 0
      }
      this.setData({
        'data.cartNumber': num + parseInt(this.data.amount)
      })
    }
  },
  async collect() { //关注
    let postData = {
      productId: this.data.data.productId
    }
    await request('docollectproduct', postData, false, 'GET')
    this.setData({
      save: true
    })
  },
  async delcollect() { //取消关注
    let postData = {
      productId: this.data.data.productId
    }
    await request('cancelcollectproduct', postData, false, 'GET')
    this.setData({
      save: false
    })
  },
  toBuyList: function () {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart'
    })
  },
  async shoucang() {
    let postData = {
      sellerId: this.data.data.seller.id
    }
    await request('docollectshop', postData, false, 'GET')
    this.setData({
      saveShop: true
    })
  },
  async delshoucang() {
    let postData = {
      sellerId: this.data.data.seller.id
    }
    await request('cancelcollectshop', postData, false, 'GET')
    this.setData({
      saveShop: false
    })
  }
})