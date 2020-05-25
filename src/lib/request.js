import wepy from 'wepy'
import config from '../config/index'
import { getToken } from '../lib/wx-system'


const env = __NODE_ENV__

const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 301,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

const CHECK_RESPONSE_ASYNC = (response, url, param) => {
  switch (env) {
    case 'dev':
      DEV_CHECK(response, url, param)
      break;
    case 'test':
      TEST_CHECK(response, url, param)
      break;
    default:
  }
}

/**
 * @author Kip song
 * @param {*} response
 */
const DEV_CHECK = (response, url, param) => {
  if (response.statusCode !== 200) {
    console.error(`错误信息：\n${env}环境：接口失败 \n状态码：${response.statusCode}\n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()}`)
  } else {
    let _data = response.data
    console.log(`${env}环境：请求成功`, _data)
    if (!_data.state) {
      console.error(`错误信息：\n${env}环境：接口数据错误 \n状态码：空`)
    } else if (_data.state == 1) {
      return
    } else if (_data.state == 2) {
      console.error(`错误信息：\n${env}环境：接口数据错误 \n状态码：${_data.state} \n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()} \n接口返回：${JSON.stringify(_data)}`)
    } else if (_data.state == 3) {
      console.error(`错误信息：\n${env}环境：登录失效 \n状态码：${_data.state} \n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()} \n接口返回：${JSON.stringify(_data)}`)
    }
  }
}

const TEST_CHECK = (response, url, param) => {
  if (response.statusCode !== 200) {
    console.error(`错误信息：\n${env}环境：接口失败 \n状态码：${response.statusCode}\n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()}`)
  } else {
    let _data = response.data
    console.log(`${env}环境：请求成功`, _data)
    if (!_data.state) {
      console.error(`错误信息：\n${env}环境：接口数据错误 \n状态码：空`)
    } else if (_data.state == 1) {
      return
    } else if (_data.state == 2) {
      console.error(`错误信息：\n${env}环境：接口数据错误 \n状态码：${_data.state} \n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()} \n接口返回：${JSON.stringify(_data)}`)
    } else if (_data.state == 3) {
      console.error(`错误信息：\n${env}环境：登录失效 \n状态码：${_data.state} \n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()} \n接口返回：${JSON.stringify(_data)}`)
    }
  }
}

const CHECK_NETWORK_OUT = (response, url, param) => {
  console.error(`错误信息：\n${env}环境：请求超时 \n请求地址：${url}\n请求参数：${JSON.stringify(param)} \nToken：${getToken()}`)
}

const HANDLE_RESPONSE_SUCCESS = (data) => {

}

export default {
  /**
   * @author Kip song
   * @param {*} params
   * @param {*} method
   */
  baseOptions(params, method = "GET") {
    return new Promise(function (resolve, reject) {
      let { url, data } = params
      let contentType = "application/json"
      contentType = params.contentType || contentType
      const option = {
        url: url.indexOf("http") !== -1 ? url : config.url + url,
        data: data,
        method: method,
        header: { 'content-type': contentType, 'access-token': getToken() },
        success(res) {
          CHECK_RESPONSE_ASYNC(res, option.url, data)
          if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            wx.hideLoading()
            wepy.showToast({
              title: '服务器找不到您所请求的文件或脚本！',
              icon: 'none',
              duration: 1500
            })
          } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            wx.hideLoading()
            wepy.showToast({
              title: '服务端异常，请稍后尝试！',
              icon: 'none',
              duration: 1500
            })
          } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            wx.hideLoading()
            wepy.showToast({
              title: '没有权限访问！',
              icon: 'none',
              duration: 1500
            })
          } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
            let _data = res.data
            if (_data.state == 1 && _data.data) {
              resolve(_data.data)
            } else if (_data.state == 2) {
              if (data && data.RETURN) {
                console.warn('过滤拦截，不做处理')
              }
              else if (_data.code == 100018) {
                wx.navigateTo({
                  url: "../pages/login"
                })
              } else {
                wepy.showToast({
                  title: _data.msg || _data.message || `错误状态${_data.code}`,
                  icon: 'none',
                  duration: 1500
                })
              }
            } else if (_data.state == 3) {
              wepy.showToast({
                title: "未登录，请重新登录！",
                icon: 'none',
                duration: 1500
              })
            }
          } else {
            wx.hideLoading()
            wepy.showToast({
              title: '网络出现故障，请重新尝试！',
              icon: 'none',
              duration: 1500
            })
          }
        },
        fail(e) {
          CHECK_NETWORK_OUT()
          wepy.showToast({
            title: '网络超时，请重新操作！',
            icon: 'none',
            duration: 1500
          })
        }
      }
      wx.request(option)
    })
  },
  /**
     * GET请求
     * @param url 请求路径
     * @param data 参数
     */
  get(url, data) {
    let option = { url, data }
    return this.baseOptions(option, "GET")
  },
  /**
   * POST请求
   * @param url 请求路径
   * @param data 参数
   */
  post(url, data) {
    let option = { url, data }
    return this.baseOptions(option, "POST")
  },
  /**
   * PUT请求
   * @param url 请求路径
   * @param data 参数
   */
  put(url, data) {
    let option = { url, data }
    return this.baseOptions(option, "PUT")
  },
  /**
   * DELETE请求
   * @param url 请求路径
   * @param data 参数
   */
  delete(url, data) {
    let option = { url, data }
    return this.baseOptions(option, "DELETE")
  }
}
