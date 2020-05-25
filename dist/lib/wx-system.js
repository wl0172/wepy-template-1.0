'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeRPXToPX = exports.changePXToRPX = exports.getClientType = exports.getUserInfo = exports.setToken = exports.getToken = exports.getSysWidth = exports.getSysHeight = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 获取当前（可用）屏幕高度
 * @author Songjp
 */
function getSysHeight() {
  return _wepy2.default.getSystemInfoSync().windowHeight;
}

/**
 * @description 获取当前（可用）屏幕宽度
 * @author Songjp
 */
function getSysWidth() {
  return _wepy2.default.getSystemInfoSync().windowWidth;
}

/**
 * @description 获取Token
 * @author Songjp
 */
function getToken() {
  var token = _wepy2.default.getStorageSync('token') || '';
  return token;
}

/**
 * @description 设置Token
 * @author Songjp
 */
function setToken(data) {
  _wepy2.default.setStorageSync('token', data);
}

/**
 * @description (登录凭证+用户基本信息)
 * @param restUrl 接口地址
 * @param _restParams 接口参数
 * @returns Promise
 * @author Songjp
 */
function getUserInfo() {
  return new Promise(function (resolve, reject) {
    _wepy2.default.login().then(function (res) {
      var wxCode = res.code;
      _wepy2.default.getUserInfo({ withCredentials: true }).then(function (res) {
        var info = {};
        var _userInfo = res.userInfo;
        info.userinfo = _userInfo;
        info.code = wxCode;
        info.encryptedData = res.encryptedData;
        info.iv = res.iv;
        console.log('\u5FAE\u4FE1\u6388\u6743\u767B\u5F55/\u66F4\u65B0\u4FE1\u606F');
        resolve(info);
      }).catch(reject);
    }).catch(reject);
  });
};

/**
 * @description 获取小程序设备 手机型号
 * @returns String
 * @author Songjp
 */
function getClientType() {
  var model = _wepy2.default.getSystemInfoSync().model;
  return model;
}

/**
 * @description px转化rpx
 * @returns String
 * @author Songjp
 */
function changePXToRPX(px) {
  var rpx = px * (750 / getSysWidth());
  return rpx;
}

/**
 * @description rpx转化px
 * @returns String
 * @author Songjp
 */
function changeRPXToPX(rpx) {
  var px = rpx * (getSysWidth() / 750);
  return px;
}

exports.getSysHeight = getSysHeight;
exports.getSysWidth = getSysWidth;
exports.getToken = getToken;
exports.setToken = setToken;
exports.getUserInfo = getUserInfo;
exports.getClientType = getClientType;
exports.changePXToRPX = changePXToRPX;
exports.changeRPXToPX = changeRPXToPX;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4LXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJnZXRTeXNIZWlnaHQiLCJ3ZXB5IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXNXaWR0aCIsIndpbmRvd1dpZHRoIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwic2V0VG9rZW4iLCJkYXRhIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRVc2VySW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJ0aGVuIiwicmVzIiwid3hDb2RlIiwiY29kZSIsIndpdGhDcmVkZW50aWFscyIsImluZm8iLCJfdXNlckluZm8iLCJ1c2VySW5mbyIsInVzZXJpbmZvIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZ2V0Q2xpZW50VHlwZSIsIm1vZGVsIiwiY2hhbmdlUFhUb1JQWCIsInB4IiwicnB4IiwiY2hhbmdlUlBYVG9QWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7OztBQUlBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsU0FBT0MsZUFBS0MsaUJBQUwsR0FBeUJDLFlBQWhDO0FBQ0Q7O0FBRUQ7Ozs7QUFJQSxTQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFNBQU9ILGVBQUtDLGlCQUFMLEdBQXlCRyxXQUFoQztBQUNEOztBQUVEOzs7O0FBSUEsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixNQUFJQyxRQUFRTixlQUFLTyxjQUFMLENBQW9CLE9BQXBCLEtBQWdDLEVBQTVDO0FBQ0EsU0FBT0QsS0FBUDtBQUNEOztBQUVEOzs7O0FBSUEsU0FBU0UsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEJULGlCQUFLVSxjQUFMLENBQW9CLE9BQXBCLEVBQTZCRCxJQUE3QjtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsU0FBU0UsV0FBVCxHQUF1QjtBQUNyQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENkLG1CQUFLZSxLQUFMLEdBQWFDLElBQWIsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCLFVBQUlDLFNBQVNELElBQUlFLElBQWpCO0FBQ0FuQixxQkFBS1csV0FBTCxDQUFpQixFQUFFUyxpQkFBaUIsSUFBbkIsRUFBakIsRUFBNENKLElBQTVDLENBQWlELFVBQUNDLEdBQUQsRUFBUztBQUN4RCxZQUFJSSxPQUFPLEVBQVg7QUFDQSxZQUFJQyxZQUFZTCxJQUFJTSxRQUFwQjtBQUNBRixhQUFLRyxRQUFMLEdBQWdCRixTQUFoQjtBQUNBRCxhQUFLRixJQUFMLEdBQVlELE1BQVo7QUFDQUcsYUFBS0ksYUFBTCxHQUFxQlIsSUFBSVEsYUFBekI7QUFDQUosYUFBS0ssRUFBTCxHQUFVVCxJQUFJUyxFQUFkO0FBQ0FDLGdCQUFRQyxHQUFSO0FBQ0FmLGdCQUFRUSxJQUFSO0FBQ0QsT0FURCxFQVNHUSxLQVRILENBU1NmLE1BVFQ7QUFVRCxLQVpELEVBWUdlLEtBWkgsQ0FZU2YsTUFaVDtBQWFELEdBZE0sQ0FBUDtBQWVEOztBQUVEOzs7OztBQUtBLFNBQVNnQixhQUFULEdBQXlCO0FBQ3ZCLE1BQUlDLFFBQVEvQixlQUFLQyxpQkFBTCxHQUF5QjhCLEtBQXJDO0FBQ0EsU0FBT0EsS0FBUDtBQUNEOztBQUVEOzs7OztBQUtBLFNBQVNDLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCO0FBQ3pCLE1BQUlDLE1BQU1ELE1BQU0sTUFBTTlCLGFBQVosQ0FBVjtBQUNBLFNBQU8rQixHQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU0MsYUFBVCxDQUF1QkQsR0FBdkIsRUFBNEI7QUFDMUIsTUFBSUQsS0FBS0MsT0FBTy9CLGdCQUFnQixHQUF2QixDQUFUO0FBQ0EsU0FBTzhCLEVBQVA7QUFDRDs7UUFHQ2xDLFksR0FBQUEsWTtRQUNBSSxXLEdBQUFBLFc7UUFDQUUsUSxHQUFBQSxRO1FBQ0FHLFEsR0FBQUEsUTtRQUNBRyxXLEdBQUFBLFc7UUFDQW1CLGEsR0FBQUEsYTtRQUNBRSxhLEdBQUFBLGE7UUFDQUcsYSxHQUFBQSxhIiwiZmlsZSI6Ind4LXN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOiOt+WPluW9k+WJje+8iOWPr+eUqO+8ieWxj+W5lemrmOW6plxuICogQGF1dGhvciBTb25nanBcbiAqL1xuZnVuY3Rpb24gZ2V0U3lzSGVpZ2h0KCkge1xuICByZXR1cm4gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDojrflj5blvZPliY3vvIjlj6/nlKjvvInlsY/luZXlrr3luqZcbiAqIEBhdXRob3IgU29uZ2pwXG4gKi9cbmZ1bmN0aW9uIGdldFN5c1dpZHRoKCkge1xuICByZXR1cm4gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoXG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOiOt+WPllRva2VuXG4gKiBAYXV0aG9yIFNvbmdqcFxuICovXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgbGV0IHRva2VuID0gd2VweS5nZXRTdG9yYWdlU3luYygndG9rZW4nKSB8fCAnJ1xuICByZXR1cm4gdG9rZW5cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g6K6+572uVG9rZW5cbiAqIEBhdXRob3IgU29uZ2pwXG4gKi9cbmZ1bmN0aW9uIHNldFRva2VuKGRhdGEpIHtcbiAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW4nLCBkYXRhKVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiAo55m75b2V5Yet6K+BK+eUqOaIt+WfuuacrOS/oeaBrylcbiAqIEBwYXJhbSByZXN0VXJsIOaOpeWPo+WcsOWdgFxuICogQHBhcmFtIF9yZXN0UGFyYW1zIOaOpeWPo+WPguaVsFxuICogQHJldHVybnMgUHJvbWlzZVxuICogQGF1dGhvciBTb25nanBcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckluZm8oKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd2VweS5sb2dpbigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgbGV0IHd4Q29kZSA9IHJlcy5jb2RlXG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBsZXQgaW5mbyA9IHt9XG4gICAgICAgIGxldCBfdXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgaW5mby51c2VyaW5mbyA9IF91c2VySW5mb1xuICAgICAgICBpbmZvLmNvZGUgPSB3eENvZGVcbiAgICAgICAgaW5mby5lbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGFcbiAgICAgICAgaW5mby5pdiA9IHJlcy5pdlxuICAgICAgICBjb25zb2xlLmxvZyhg5b6u5L+h5o6I5p2D55m75b2VL+abtOaWsOS/oeaBr2ApXG4gICAgICAgIHJlc29sdmUoaW5mbylcbiAgICAgIH0pLmNhdGNoKHJlamVjdClcbiAgICB9KS5jYXRjaChyZWplY3QpXG4gIH0pXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDojrflj5blsI/nqIvluo/orr7lpIcg5omL5py65Z6L5Y+3XG4gKiBAcmV0dXJucyBTdHJpbmdcbiAqIEBhdXRob3IgU29uZ2pwXG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudFR5cGUoKSB7XG4gIGxldCBtb2RlbCA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5tb2RlbFxuICByZXR1cm4gbW9kZWxcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gcHjovazljJZycHhcbiAqIEByZXR1cm5zIFN0cmluZ1xuICogQGF1dGhvciBTb25nanBcbiAqL1xuZnVuY3Rpb24gY2hhbmdlUFhUb1JQWChweCkge1xuICBsZXQgcnB4ID0gcHggKiAoNzUwIC8gZ2V0U3lzV2lkdGgoKSlcbiAgcmV0dXJuIHJweFxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBycHjovazljJZweFxuICogQHJldHVybnMgU3RyaW5nXG4gKiBAYXV0aG9yIFNvbmdqcFxuICovXG5mdW5jdGlvbiBjaGFuZ2VSUFhUb1BYKHJweCkge1xuICBsZXQgcHggPSBycHggKiAoZ2V0U3lzV2lkdGgoKSAvIDc1MClcbiAgcmV0dXJuIHB4XG59XG5cbmV4cG9ydCB7XG4gIGdldFN5c0hlaWdodCxcbiAgZ2V0U3lzV2lkdGgsXG4gIGdldFRva2VuLFxuICBzZXRUb2tlbixcbiAgZ2V0VXNlckluZm8sXG4gIGdldENsaWVudFR5cGUsXG4gIGNoYW5nZVBYVG9SUFgsXG4gIGNoYW5nZVJQWFRvUFhcbn1cbiJdfQ==