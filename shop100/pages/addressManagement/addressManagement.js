
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressArr: [
      { id: 0, name: 'jack', isDefault: true, phoneNum: '18090909090', address: '安徽省-合肥市-庐阳区 某某某街道阜阳北路与北城大道交口创智天地' },
      { id: 1, name: 'jack', isDefault: false, phoneNum: '18090909090', address: '安徽省-合肥市-庐阳区 某某某街道阜阳北路与北城大道交口创智天地' },
      { id: 2, name: 'jack', isDefault: false, phoneNum: '18090909090', address: '安徽省-合肥市-庐阳区 某某某街道阜阳北路与北城大道交口创智天地' },
    ]
  },

  radioChange(e){
    let addressArr = this.data.addressArr;
    for(let i = 0; i<addressArr.length;i++){
      if(addressArr[i].id == e.detail.value){
        addressArr[e.detail.value].isDefault =  true;
      }else{
        addressArr[i].isDefault =  false;
      }
    }
    
    this.setData({
      addressArr
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