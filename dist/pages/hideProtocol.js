'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hideProtocol = function (_wepy$page) {
  _inherits(hideProtocol, _wepy$page);

  function hideProtocol() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, hideProtocol);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = hideProtocol.__proto__ || Object.getPrototypeOf(hideProtocol)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '隐私协议'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.watch = {}, _this.methods = {
      phonoCall: function phonoCall(i) {
        if (i == 0) {
          wx.makePhoneCall({
            phoneNumber: '021-66076100'
          });
        } else {
          wx.makePhoneCall({
            phoneNumber: '19121496162'
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(hideProtocol, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }]);

  return hideProtocol;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(hideProtocol , 'pages/hideProtocol'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZGVQcm90b2NvbC5qcyJdLCJuYW1lcyI6WyJoaWRlUHJvdG9jb2wiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInBob25vQ2FsbCIsImkiLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsIm9wdGlvbiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU8sRSxRQUNQQyxRLEdBQVcsRSxRQUNYQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNJO0FBQ1YsWUFBR0EsS0FBSyxDQUFSLEVBQVU7QUFDUkMsYUFBR0MsYUFBSCxDQUFpQjtBQUNmQyx5QkFBYTtBQURFLFdBQWpCO0FBR0QsU0FKRCxNQUlLO0FBQ0hGLGFBQUdDLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWE7QUFERSxXQUFqQjtBQUdEO0FBRUY7QUFaTyxLOzs7OzsyQkFGSEMsTSxFQUFRLENBQUU7Ozs2QkFDUixDQUFFOzs7NkJBZUYsQ0FBRTs7OytCQUNBLENBQUU7Ozs7RUF6QjRCQyxlQUFLQyxJOztrQkFBMUJmLFkiLCJmaWxlIjoiaGlkZVByb3RvY29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGlkZVByb3RvY29sIGV4dGVuZHMgd2VweS5wYWdlIHtcbiBjb25maWcgPSB7XG4gICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZqQ56eB5Y2P6K6uJ1xuIH07XG4gY29tcG9uZW50cyA9IHt9O1xuIGRhdGEgPSB7fTtcbiBjb21wdXRlZCA9IHt9O1xuIHdhdGNoID0ge307XG4gb25Mb2FkKG9wdGlvbikge31cbiBvblNob3coKSB7fVxuIG1ldGhvZHMgPSB7XG4gICBwaG9ub0NhbGwoaSl7XG4gICAgIGlmKGkgPT0gMCl7XG4gICAgICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICBwaG9uZU51bWJlcjogJzAyMS02NjA3NjEwMCdcbiAgICAgICB9KVxuICAgICB9ZWxzZXtcbiAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgIHBob25lTnVtYmVyOiAnMTkxMjE0OTYxNjInXG4gICAgICAgfSlcbiAgICAgfVxuICAgICBcbiAgIH1cbiB9O1xuIG9uSGlkZSgpIHt9XG4gb25VbmxvYWQoKSB7fVxufVxuIl19