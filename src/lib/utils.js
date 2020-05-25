// import wepy from 'wepy'

/**
 * 获取，字样金额
 * @param {*} n 数字
 */
function formatNumber(n) {
  var b = parseInt(n).toString()
  var len = b.length
  if (len <= 3) {
    return b
  }
  var r = len % 3
  return r > 0 ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') : b.slice(r, len).match(/\d{3}/g).join(',')
}

/**
 * 根据当前时间查询月份日期
 * @param {*} currentTime 当前时间
 * @param {*} months 获取几个月
 */
function getMonth(months = 1) {
  let monthsArray = []
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  for (let j = 0; j < months; j++) {
    let dateObj = {}
    let dateArray = []
    if (month > 12) {
      month -= 12
      year += 1
    }
    dateObj.year = year
    dateObj.month = month
    let count = new Date(year, month, 0).getDate()
    for (let i = 1; i <= count; i++) {
      let obj = {value:i}
      dateArray.push(obj)
    }
    month += 1
    dateObj.dateArray = dateArray
    monthsArray.push(dateObj)
  }
  console.log(monthsArray)
  return monthsArray
}

/**
 * 获取UUID
 * @param {*} len 长度
 * @param {*} radix 基数
 */
function uuid(len, radix) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  let uuid = []
  let i = 0
  radix = radix || chars.length

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    let r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

/**
 * 计算时间戳之间的差值
 * @param startTimeStamp 开始时间戳
 * @param endTimeStamp 结束时间戳
 */
function calculateDiffTime(startTimeStamp, endTimeStamp) {
  let startTime = 0
  let endTime = 0
  if (startTimeStamp < endTimeStamp) {
    startTime = startTimeStamp / 1000
    endTime = endTimeStamp / 1000
  } else {
    startTime = endTimeStamp / 1000
    endTime = startTimeStamp / 1000
  }
  var timeDiff = endTime - startTime
  // var year = Math.floor(timeDiff / 86400 / 365)
  // timeDiff = timeDiff % (86400 * 365)
  // var month = Math.floor(timeDiff / 86400 / 30)
  // timeDiff = timeDiff % (86400 * 30)
  // var day = Math.floor(timeDiff / 86400)
  // timeDiff = timeDiff % 86400
  var hour = Math.floor(timeDiff / 3600)
  timeDiff = timeDiff % 3600
  var minute = Math.floor(timeDiff / 60)
  timeDiff = timeDiff % 60
  var second = Math.floor(timeDiff)
  return [hour < 10 ? '0' + hour : hour, minute < 10 ? '0' + minute : minute, second < 10 ? '0' + second : second]
}

/**
 * 深拷贝
 * @param {*} obj1 
 * @param {*} obj2 
 */
function deepCopy(obj1, obj2) {
  let obj = obj2 || {}
  for (let item in obj1) {
    if (typeof obj1[item] === 'object') {
      obj[item] = obj1[item].constructor === Array ? [] : {}
      deepCopy(obj1[item], obj[item])
    } else {
      obj[item] = obj1[item]
    }
  }
  return obj
}

export {
  formatNumber,
  uuid,
  calculateDiffTime,
  deepCopy,
  getMonth
}
