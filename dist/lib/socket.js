'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onLoadSocket(url, param) {
  return new Promise(function (resolve, reject) {
    if (typeof url === 'undefined' || url == null || url === '') {
      return '';
    }
    if (typeof param === 'undefined' || param == null || (typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object') {
      return '';
    }
    url += url.indexOf('?') !== -1 ? '' : '?';
    for (var k in param) {
      url += (url.indexOf('=') !== -1 ? '&' : '') + k + '=' + encodeURI(param[k]);
      console.log(url);
    }
    console.log('socket地址：' + url);
    _wepy2.default.connectSocket({
      url: url
    }).then(function (res) {
      _wepy2.default.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！');
        resolve(res);
      });
      _wepy2.default.onSocketError(function (err) {
        console.log('WebSocket连接打开失败，请检查！');
        reject(err);
      });
      _wepy2.default.onSocketClose(function (err) {
        console.log('WebSocket 已关闭！');
        reject(err);
      });
    });
  });
}

exports.default = {
  onLoadSocket: onLoadSocket
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJvbkxvYWRTb2NrZXQiLCJ1cmwiLCJwYXJhbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5kZXhPZiIsImsiLCJlbmNvZGVVUkkiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImNvbm5lY3RTb2NrZXQiLCJ0aGVuIiwib25Tb2NrZXRPcGVuIiwicmVzIiwib25Tb2NrZXRFcnJvciIsImVyciIsIm9uU29ja2V0Q2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxLQUEzQixFQUFrQztBQUNoQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1QyxRQUFJLE9BQVFKLEdBQVIsS0FBaUIsV0FBakIsSUFBZ0NBLE9BQU8sSUFBdkMsSUFBK0NBLFFBQVEsRUFBM0QsRUFBK0Q7QUFDN0QsYUFBTyxFQUFQO0FBQ0Q7QUFDRCxRQUFJLE9BQVFDLEtBQVIsS0FBbUIsV0FBbkIsSUFBa0NBLFNBQVMsSUFBM0MsSUFBbUQsUUFBUUEsS0FBUix5Q0FBUUEsS0FBUixPQUFtQixRQUExRSxFQUFvRjtBQUNsRixhQUFPLEVBQVA7QUFDRDtBQUNERCxXQUFRQSxJQUFJSyxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQXZCLEdBQTRCLEVBQTVCLEdBQWlDLEdBQXhDO0FBQ0EsU0FBSyxJQUFJQyxDQUFULElBQWNMLEtBQWQsRUFBcUI7QUFDbkJELGFBQU8sQ0FBRUEsSUFBSUssT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF2QixHQUE0QixHQUE1QixHQUFrQyxFQUFuQyxJQUF5Q0MsQ0FBekMsR0FBNkMsR0FBN0MsR0FBbURDLFVBQVVOLE1BQU1LLENBQU4sQ0FBVixDQUExRDtBQUNBRSxjQUFRQyxHQUFSLENBQVlULEdBQVo7QUFDRDtBQUNEUSxZQUFRQyxHQUFSLENBQVksY0FBY1QsR0FBMUI7QUFDQVUsbUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJYLFdBQUtBO0FBRFksS0FBbkIsRUFFR1ksSUFGSCxDQUVRLGVBQU87QUFDYkYscUJBQUtHLFlBQUwsQ0FBa0IsVUFBVUMsR0FBVixFQUFlO0FBQy9CTixnQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0FOLGdCQUFRVyxHQUFSO0FBQ0QsT0FIRDtBQUlBSixxQkFBS0ssYUFBTCxDQUFtQixVQUFVQyxHQUFWLEVBQWU7QUFDaENSLGdCQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQUwsZUFBT1ksR0FBUDtBQUNELE9BSEQ7QUFJQU4scUJBQUtPLGFBQUwsQ0FBbUIsVUFBVUQsR0FBVixFQUFlO0FBQ2hDUixnQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0FMLGVBQU9ZLEdBQVA7QUFDRCxPQUhEO0FBSUQsS0FmRDtBQWdCRCxHQTdCTSxDQUFQO0FBOEJEOztrQkFFYztBQUNiakI7QUFEYSxDIiwiZmlsZSI6InNvY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmZ1bmN0aW9uIG9uTG9hZFNvY2tldCh1cmwsIHBhcmFtKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiAodXJsKSA9PT0gJ3VuZGVmaW5lZCcgfHwgdXJsID09IG51bGwgfHwgdXJsID09PSAnJykge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHBhcmFtKSA9PT0gJ3VuZGVmaW5lZCcgfHwgcGFyYW0gPT0gbnVsbCB8fCB0eXBlb2YgKHBhcmFtKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgIT09IC0xKSA/ICcnIDogJz8nXG4gICAgZm9yICh2YXIgayBpbiBwYXJhbSkge1xuICAgICAgdXJsICs9ICgodXJsLmluZGV4T2YoJz0nKSAhPT0gLTEpID8gJyYnIDogJycpICsgayArICc9JyArIGVuY29kZVVSSShwYXJhbVtrXSlcbiAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3NvY2tldOWcsOWdgO+8micgKyB1cmwpXG4gICAgd2VweS5jb25uZWN0U29ja2V0KHtcbiAgICAgIHVybDogdXJsXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgd2VweS5vblNvY2tldE9wZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5bey5omT5byA77yBJylcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9KVxuICAgICAgd2VweS5vblNvY2tldEVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeaJk+W8gOWksei0pe+8jOivt+ajgOafpe+8gScpXG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9KVxuICAgICAgd2VweS5vblNvY2tldENsb3NlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCDlt7LlhbPpl63vvIEnKVxuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uTG9hZFNvY2tldFxufVxuIl19