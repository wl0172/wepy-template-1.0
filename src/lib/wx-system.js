import wepy from 'wepy'

/**
 * @description 获取当前（可用）屏幕高度
 * @author Songjp
 */
function getSysHeight() {
  return wepy.getSystemInfoSync().windowHeight
}

/**
 * @description 获取当前（可用）屏幕宽度
 * @author Songjp
 */
function getSysWidth() {
  return wepy.getSystemInfoSync().windowWidth
}

/**
 * @description 获取Token
 * @author Songjp
 */
function getToken() {
  let token = wepy.getStorageSync('token') || ''
  return token
}

/**
 * @description 设置Token
 * @author Songjp
 */
function setToken(data) {
  wepy.setStorageSync('token', data)
}

/**
 * @description (登录凭证+用户基本信息)
 * @param restUrl 接口地址
 * @param _restParams 接口参数
 * @returns Promise
 * @author Songjp
 */
function getUserInfo() {
  return new Promise((resolve, reject) => {
    wepy.login().then((res) => {
      let wxCode = res.code
      wepy.getUserInfo({ withCredentials: true }).then((res) => {
        let info = {}
        let _userInfo = res.userInfo
        info.userinfo = _userInfo
        info.code = wxCode
        info.encryptedData = res.encryptedData
        info.iv = res.iv
        console.log(`微信授权登录/更新信息`)
        resolve(info)
      }).catch(reject)
    }).catch(reject)
  })
};

/**
 * @description 获取小程序设备 手机型号
 * @returns String
 * @author Songjp
 */
function getClientType() {
  let model = wepy.getSystemInfoSync().model
  return model
}

/**
 * @description px转化rpx
 * @returns String
 * @author Songjp
 */
function changePXToRPX(px) {
  let rpx = px * (750 / getSysWidth())
  return rpx
}

/**
 * @description rpx转化px
 * @returns String
 * @author Songjp
 */
function changeRPXToPX(rpx) {
  let px = rpx * (getSysWidth() / 750)
  return px
}

export {
  getSysHeight,
  getSysWidth,
  getToken,
  setToken,
  getUserInfo,
  getClientType,
  changePXToRPX,
  changeRPXToPX
}
