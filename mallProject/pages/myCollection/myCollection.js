
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopArr: [
      { imgSrc: '../../images/mine/icon-collect.png', shopName: 'adidas官方旗舰店' },
      { imgSrc: '../../images/mine/icon-collect.png', shopName: 'adidas官方旗舰店' },
      { imgSrc: '../../images/mine/icon-collect.png', shopName: 'adidas官方旗舰店' },
      { imgSrc: '../../images/mine/icon-collect.png', shopName: 'adidas官方旗舰店' },
    ],
    goodsArr: [
      { goodsPic: '../../images/mine/icon-collect.png', goodsName: '西博橄榄护理油西博橄榄护理油西博橄榄护理油西博橄榄护理油西博橄榄护理油西博橄榄护理油', grouponNum: 2, pirce: 9.9 },
      { goodsPic: '../../images/mine/icon-collect.png', goodsName: '西博橄榄护理油', grouponNum: 2, pirce: 9.9 },
      { goodsPic: '../../images/mine/icon-collect.png', goodsName: '西博橄榄护理油', grouponNum: 2, pirce: 9.9 },
      { goodsPic: '../../images/mine/icon-collect.png', goodsName: '西博橄榄护理油', grouponNum: 2, pirce: 9.9 },
    ],
    bHiddenShop: false
  },

  onShopCollectTabed: function(){
    this.setData({
      bHiddenShop: false
    });
    wx.setNavigationBarTitle({
      title: '我的收藏'
    })
  },

  onGoodsCollectTabed: function(){
    this.setData({
      bHiddenShop: true
    });
    wx.setNavigationBarTitle({
      title: '商品收藏'
    })
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

  }
})