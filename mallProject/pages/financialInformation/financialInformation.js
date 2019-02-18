
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idcardIndex: 0,
    idcardArr: [
      '居民身份证',
      '港澳台证',
      '绿卡',
    ],
    indexBank: 0,
    bankArr: [
      '中国建设银行',
      '中国农业银行',
      '中国工商银行',
      '中国银行',
    ]
  },

  bindBankPickerChange(e) {
    this.setData({
      indexBank: e.detail.value
    });
  },

  bindIdCardPickerChange(e){
    this.setData({
      idcardIndex: e.detail.value
    });
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