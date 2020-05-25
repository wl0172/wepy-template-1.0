import 'wepy-async-function'
import request from '../lib/request'
import config from '../config/index'

/**
 * 登录
 * @param {*} param
 */
function login(param) {
  return request.post('/insurance-api/client/login', param)
}

export {
  login
}
