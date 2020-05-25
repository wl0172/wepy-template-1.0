'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxSystem = require('./../lib/wx-system.js');

var _index = require('./../server/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WEBVIEW = function (_wepy$page) {
  _inherits(WEBVIEW, _wepy$page);

  function WEBVIEW() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WEBVIEW);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WEBVIEW.__proto__ || Object.getPrototypeOf(WEBVIEW)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '保单详情'
    }, _this.components = {}, _this.data = {
      url: ''
    }, _this.computed = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WEBVIEW, [{
    key: 'onLoad',
    value: function onLoad(option) {
      if (option.quotationNo) {}
      // this.url = this.$parent.$config.webUrl + '/csms2/mobile/policy/view/byquote/' + option.quotationNo +'?'+res.data
    }
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

  return WEBVIEW;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(WEBVIEW , 'pages/policyWeb'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeVdlYi5qcyJdLCJuYW1lcyI6WyJXRUJWSUVXIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXJsIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm1ldGhvZHMiLCJvcHRpb24iLCJxdW90YXRpb25ObyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsV0FBSztBQURBLEssUUFHUEMsUSxHQUFXLEUsUUFDWEMsSyxHQUFRLEUsUUFXUkMsTyxHQUFVLEU7Ozs7OzJCQVZIQyxNLEVBQVE7QUFDYixVQUFHQSxPQUFPQyxXQUFWLEVBQXNCLENBRXJCO0FBQ0Q7QUFDRDs7OzZCQUVRLENBRVI7Ozs2QkFFUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQXRCc0JDLGVBQUtDLEk7O2tCQUFyQlosTyIsImZpbGUiOiJwb2xpY3lXZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSAnLi4vbGliL3d4LXN5c3RlbS5qcyc7XG5pbXBvcnQgeyBnZXRFYm9Ub2tlbiB9IGZyb20gJy4uL3NlcnZlci9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV0VCVklFVyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+d5Y2V6K+m5oOFJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdXJsOiAnJ1xuICB9O1xuICBjb21wdXRlZCA9IHt9O1xuICB3YXRjaCA9IHt9O1xuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgaWYob3B0aW9uLnF1b3RhdGlvbk5vKXtcblxuICAgIH1cbiAgICAvLyB0aGlzLnVybCA9IHRoaXMuJHBhcmVudC4kY29uZmlnLndlYlVybCArICcvY3NtczIvbW9iaWxlL3BvbGljeS92aWV3L2J5cXVvdGUvJyArIG9wdGlvbi5xdW90YXRpb25ObyArJz8nK3Jlcy5kYXRhXG4gIH1cblxuICBvblNob3coKSB7XG5cbiAgfVxuICBtZXRob2RzID0ge307XG4gIG9uSGlkZSgpIHt9XG4gIG9uVW5sb2FkKCkge31cblxufVxuIl19