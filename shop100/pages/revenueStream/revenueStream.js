
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderVal: '',
    personVal: '',
    index: 0,
    statusArr: [
      '全部',
      '全部1',
      '全部2',
    ],
    queryResultArr: [
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
      { name: 'eis001', orderNum: '18695435987695231181', goodsName: '都乐Dole菲律宾进口帝王蕉1把装单把重约600g新鲜水货', time: '2018.10.01 15:35:04', status: '提现中', price: '2.92' },
    ]
  },

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    });
  },

  onQuery () {

  },

  onReset() {
    this.setData({
      orderVal: '',
      personVal: '',
      index: 0
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