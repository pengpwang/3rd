
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    queryResultArr: [
      { name: 'eis001', isPerson: true, time: '2018.10.01 15:35:04' },
      { name: 'yx0008', isPerson: false, time: '2018.10.01 15:35:04' },
      { name: 'eis001', isPerson: true, time: '2018.10.01 15:35:04' },
      { name: 'yx0008', isPerson: false, time: '2018.10.01 15:35:04' },
      { name: 'eis001', isPerson: true, time: '2018.10.01 15:35:04' },
      { name: 'yx0008', isPerson: false, time: '2018.10.01 15:35:04' },
    ]
  },

  onQuery () {

  },

  onReset() {
    this.setData({
      inputVal: ''
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