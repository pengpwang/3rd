import { request, regeneratorRuntime } from '../../utils/request.js'
let timer = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    imageHost: 'http://123.207.136.56:8080/ejsimage',
    timeStr: '',
    normAttr0: '',
    normAttrId0: '',
    normAttr1: '',
    normAttrId1: '',
    amount: 1,
    productGoodsId: '',
    productStock: 1,
    btnDisable: false,

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
    if (timer) {
      clearInterval(timer)
      timer = null
    }
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
    let url = '/tuan/' + id + '.html'
    let data = await request(url, {}, true, 'GET')
    this.setData({
      data: data.data,
      productStock: data.data.actGroup.stock
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
    this.getGoodInfo()
    this.startTimer()
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/commodityDetails/commodityDetails?id=' + id
    })
  },
  startTimer: function () {
    let timerFun = () => {
      let intDiff = this.data.data.countTime || 0
      let day = 0,
        hour = 0,
        minute = 0,
        second = 0;//时间默认值       
      if (intDiff > 0) {
        day = Math.floor(intDiff / (60 * 60 * 24))
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24)
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60)
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
      }
      let timeStr = ''
      if (day == 0) {
        timeStr = hour + '时 ' + minute + '分 ' + second + '秒'
      } else {
        timeStr = day + '天'
      }
      this.setData({
        timeStr: timeStr
      })
    }
    timerFun()
    timer = setInterval(() => {
      timerFun()
    }, 1000) 
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
      productId: this.data.data.product.id,
      normAttrId: normAttrId
    }
    let data = await request("getGoodsInfo", postData, false, 'POST')
    if (data.data.id) {
      this.setData({
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
    let limitNum = this.data.data.actGroup.purchase
    if (this.data.amount < this.data.data.goods.productStock && this.data.amount < limitNum) {
      this.setData({
        amount: this.data.amount + 1
      })
    }
  },
  async buyNow() {
    let stock = this.data.data.actGroup.stock
    let limitNum = this.data.data.actGroup.purchase
    let buyNum = this.data.amount
    if(parseInt(stock) < 1) {
      wx.showToast({ title: '已经被抢光了，下次要赶早哦！', icon: 'none' })
      return false
    }
    if (buyNum > limitNum || buyNum > stock) {
      wx.showToast({ title: '请输入小于限购数量及库存量的正整数', icon: 'none' })
      return false
    }
    wx.navigateTo({
      url: '/pages/orderGroup/orderGroup?productId=' + this.data.data.product.id + '&goodsId=' + this.data.productGoodsId + '&sellerId=' + this.data.data.seller.id + '&tuanId=' + this.data.data.actGroup.id + '&buyNum=' + buyNum
    })
  },
})