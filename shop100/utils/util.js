// yyyy - MM - dd HH: mm: ss
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatTime = (timestamp, format = 'yyyy.MM.dd') => {
  const date = new Date(parseInt(timestamp))
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  let dateArr = [year, month, day, hour, minute, second].map(formatNumber)
  format = format.replace('yyyy', dateArr[0])
  format = format.replace('MM', dateArr[1])
  format = format.replace('dd', dateArr[2])
  format = format.replace('HH', dateArr[3])
  format = format.replace('mm', dateArr[4])
  format = format.replace('ss', dateArr[5])
  return format
}

//获取url中的参数
const getUrlParam = (url, name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var arr = url.split('?')
  if (arr.length > 1) {
    var r = arr[1].match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
  }
  return null
}
module.exports = {
  formatTime,
  getUrlParam
}
