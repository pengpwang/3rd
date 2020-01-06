import { request, regeneratorRuntime } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    data0: {},
    data1: {},
    data2: {},
    list: [{ title: '测试', exemption: 100, threshold: 50, startTime: '2019-10-10', endTime: '2019-10-10' }, { title: '测试', exemption: 100, threshold: 50, startTime: '2019-10-10', endTime: '2019-10-10' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    this.getData()
    this.getData(1)
    this.getData(2)
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
  bindChange: function (e) {
    // console.log(e.detail.current);
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function (e) {
    if (this.data.currentTab === e.currentTarget.dataset.currents) {
      return false;
    } else {
      this.setData({
        currentTab: e.currentTarget.dataset.currents
      })
    }
  },
  getData: async function (type) {
    let postData = {}
    if(type) {
      postData.s = type
    }
    let data = await request('couponList', postData, true, 'GET')
    for (let item of data.data.couponList) {
      item.useStartTime = item.useStartTime.split(' ')[0]
      item.useEndTime = item.useEndTime.split(' ')[0]
    }
    if (!type) {
      this.setData({
        data0: data.data
      })
    } else if (type == 1) {
      this.setData({
        data1: data.data
      })
    } else if (type == 2) {
      this.setData({
        data2: data.data
      })
    }
  },
  toShopHome(e) {
    let id = e.currentTarget.dataset.sellerid
    wx.navigateTo({
      url: '/pages/shopHome/shopHome?id=' + id,
    })
  },
  async receiveCoupon(e) {
    let couponId = e.currentTarget.dataset.couponid
    let type = e.currentTarget.dataset.type
    let postData = {
      couponId: couponId
    }
    let data = await request('reveivecoupon', postData, true, 'POST')
    this.getData(type)
    wx.showModal({
      title: '提示',
      content: '领取成功，您可在用户中心查看您的优惠券！',
      showCancel: false
    })
  }
})