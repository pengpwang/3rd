
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iSelTab: 0,
    renderArr: [],
    // status : 1 已完成； 2 待付款
    totalOrdersArr: [
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '全部订单--2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
    ],
    paymentArr: [
      { orderNum: '1312983182382139', status: 2, imgSrc: '', productName: '待付款--2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },

    ],
    receiveArr: [
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '待收货---2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },

    ],
    finishArr: [
      { orderNum: '1312983182382139', status: 2, imgSrc: '', productName: '已完成--2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },

    ],
    evaluateArr: [
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '待评价--2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
      { orderNum: '1312983182382139', status: 1, imgSrc: '', productName: '2018早秋装ins古着新款韩版条纹衬衫情侣装chic…', price1: '9.9', price2: '999.9', mount: 2, price3: '18.9' },
    ]
  },

  toggleTab(e) {
    let iSelTab = Number(e.target.dataset.tabid);
    let renderArr = [];
    switch (iSelTab) {
      case 0:
        renderArr = this.data.totalOrdersArr;
        break;
      case 1:
        renderArr = this.data.paymentArr;
        break;
      case 2:
        renderArr = this.data.receiveArr; 
        break;
      case 3:
        renderArr = this.data.finishArr;
        break;
      case 4:
        renderArr = this.data.evaluateArr;
        break;
      default:
        break;
    }

    this.setData({
      iSelTab,
      renderArr
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      renderArr: this.data.totalOrdersArr
    })
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