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

// import { Page } from '../lib/autoShare.js'

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
      navigationBarTitleText: '合美惠保险'
    }, _this.components = {}, _this.data = {
      url: '',
      optionsUrl: '/csms2/mobile/policy/quote/',
      productCode: '',
      token: '',
      shareToken: ''
    }, _this.computed = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WEBVIEW, [{
    key: 'onLoad',
    value: function onLoad(option) {
      // 判断是否分享
      if (option.productCode) {
        this.productCode = option.productCode;
      }
      this.$apply();
      if (option.from && option.from == 'share' && option.shareToken) {
        this.shareToken = option.shareToken;
      } else {
        this.shareToken = '';
        this.$apply();
      }

      console.log(this.$wxpage);
      this.$apply();
    }

    // 配置基础url
    // 例子 url：         https://csms-uat.ebaocloud.com.cn/
    //     optionUrl:    csms/mobile/policy/quote/
    //     product:      1AN/YAZHJTYWX/001
    //     token:        ?delegated=TAIRAN.admin
    //                   &ticket=CSMD+VEFJUkFOOmMxZDhkZjE5OTFlMDQyYzQwMjEyYTZhNDc4YmM1MmQ4OjE1ODg5OTU3OTE0ODc%3D#
    //                   &parcel=userId

  }, {
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      console.log(this);
      this.url = this.$parent.$config.webUrl + this.optionsUrl + this.productCode;
      this.$apply();
      if ((0, _wxSystem.getUserId)() !== -1 && !(0, _wxSystem.getUserId)()) {
        wx.navigateTo({
          url: './onload'
        });
      } else {
        // 正常进入
        if (!this.shareToken) {
          (0, _index.getEboToken)().then(function (res) {
            _this2.token = '?' + res || '';
            _this2.url += _this2.token + ('&parcel=' + (0, _wxSystem.getUserId)());
            _this2.$apply();
          });
        } else if (this.shareToken) {
          // 分享链接
          this.url += decodeURIComponent(this.shareToken) + '&parcel=' + (0, _wxSystem.getUserId)();

          this.$apply();
        }
      }
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (!true) {
        return {
          title: '合美惠全家保为你护航',
          path: '/pages/webView?from=share&shareToken=' + encodeURIComponent(this.token) + '&productCode=' + this.productCode
        };
      } else {
        return {
          title: '欢迎来到合美惠全家保',
          path: '/pages/onload'
        };
      }
    }
  }]);

  return WEBVIEW;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(WEBVIEW , 'pages/webView'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYlZpZXcuanMiXSwibmFtZXMiOlsiV0VCVklFVyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInVybCIsIm9wdGlvbnNVcmwiLCJwcm9kdWN0Q29kZSIsInRva2VuIiwic2hhcmVUb2tlbiIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwib3B0aW9uIiwiJGFwcGx5IiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCIkd3hwYWdlIiwiJHBhcmVudCIsIiRjb25maWciLCJ3ZWJVcmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ0aGVuIiwicmVzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidGl0bGUiLCJwYXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsa0JBQVksNkJBRlA7QUFHTEMsbUJBQWEsRUFIUjtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsa0JBQVk7QUFMUCxLLFFBT1BDLFEsR0FBVyxFLFFBQ1hDLEssR0FBUSxFLFFBbURSQyxPLEdBQVUsRTs7Ozs7MkJBbERIQyxNLEVBQVE7QUFDYjtBQUNBLFVBQUlBLE9BQU9OLFdBQVgsRUFBd0I7QUFDdEIsYUFBS0EsV0FBTCxHQUFtQk0sT0FBT04sV0FBMUI7QUFDRDtBQUNELFdBQUtPLE1BQUw7QUFDQSxVQUFJRCxPQUFPRSxJQUFQLElBQWVGLE9BQU9FLElBQVAsSUFBZSxPQUE5QixJQUF5Q0YsT0FBT0osVUFBcEQsRUFBZ0U7QUFDOUQsYUFBS0EsVUFBTCxHQUFrQkksT0FBT0osVUFBekI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsYUFBS0ssTUFBTDtBQUNEOztBQUVERSxjQUFRQyxHQUFSLENBQVksS0FBS0MsT0FBakI7QUFDQSxXQUFLSixNQUFMO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1M7QUFBQTs7QUFDUEUsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxXQUFLWixHQUFMLEdBQVcsS0FBS2MsT0FBTCxDQUFhQyxPQUFiLENBQXFCQyxNQUFyQixHQUE4QixLQUFLZixVQUFuQyxHQUFnRCxLQUFLQyxXQUFoRTtBQUNBLFdBQUtPLE1BQUw7QUFDQSxVQUFJLCtCQUFnQixDQUFDLENBQWpCLElBQXNCLENBQUMsMEJBQTNCLEVBQXdDO0FBQ3RDUSxXQUFHQyxVQUFILENBQWM7QUFDWmxCLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0w7QUFDQSxZQUFJLENBQUMsS0FBS0ksVUFBVixFQUFzQjtBQUNwQixvQ0FBY2UsSUFBZCxDQUFtQixlQUFPO0FBQ3hCLG1CQUFLaEIsS0FBTCxHQUFhLE1BQU1pQixHQUFOLElBQWEsRUFBMUI7QUFDQSxtQkFBS3BCLEdBQUwsSUFBWSxPQUFLRyxLQUFMLGlCQUF3QiwwQkFBeEIsQ0FBWjtBQUNBLG1CQUFLTSxNQUFMO0FBQ0QsV0FKRDtBQUtELFNBTkQsTUFNTyxJQUFJLEtBQUtMLFVBQVQsRUFBcUI7QUFDMUI7QUFDQSxlQUFLSixHQUFMLElBQWVxQixtQkFDYixLQUFLakIsVUFEUSxDQUFmLGdCQUVZLDBCQUZaOztBQUlBLGVBQUtLLE1BQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7O3NDQUNLVyxHLEVBQUs7QUFDckIsVUFBSSxDQUFDLElBQUwsRUFBVztBQUNULGVBQU87QUFDTEUsaUJBQU8sWUFERjtBQUVMQywwREFBOENDLG1CQUM1QyxLQUFLckIsS0FEdUMsQ0FBOUMscUJBRWlCLEtBQUtEO0FBSmpCLFNBQVA7QUFNRCxPQVBELE1BT0s7QUFDSCxlQUFPO0FBQ0xvQixpQkFBTyxZQURGO0FBRUxDO0FBRkssU0FBUDtBQUlEO0FBQ0Y7Ozs7RUFqRmtDRSxlQUFLQyxJOztrQkFBckIvQixPIiwiZmlsZSI6IndlYlZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSAnLi4vbGliL3d4LXN5c3RlbS5qcyc7XG5pbXBvcnQgeyBnZXRFYm9Ub2tlbiB9IGZyb20gJy4uL3NlcnZlci9pbmRleC5qcyc7XG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbGliL2F1dG9TaGFyZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV0VCVklFVyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZCI576O5oOg5L+d6ZmpJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdXJsOiAnJyxcbiAgICBvcHRpb25zVXJsOiAnL2NzbXMyL21vYmlsZS9wb2xpY3kvcXVvdGUvJyxcbiAgICBwcm9kdWN0Q29kZTogJycsXG4gICAgdG9rZW46ICcnLFxuICAgIHNoYXJlVG9rZW46ICcnXG4gIH07XG4gIGNvbXB1dGVkID0ge307XG4gIHdhdGNoID0ge307XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICAvLyDliKTmlq3mmK/lkKbliIbkuqtcbiAgICBpZiAob3B0aW9uLnByb2R1Y3RDb2RlKSB7XG4gICAgICB0aGlzLnByb2R1Y3RDb2RlID0gb3B0aW9uLnByb2R1Y3RDb2RlO1xuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpO1xuICAgIGlmIChvcHRpb24uZnJvbSAmJiBvcHRpb24uZnJvbSA9PSAnc2hhcmUnICYmIG9wdGlvbi5zaGFyZVRva2VuKSB7XG4gICAgICB0aGlzLnNoYXJlVG9rZW4gPSBvcHRpb24uc2hhcmVUb2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFyZVRva2VuID0gJyc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuJHd4cGFnZSk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuXG4gIC8vIOmFjee9ruWfuuehgHVybFxuICAvLyDkvovlrZAgdXJs77yaICAgICAgICAgaHR0cHM6Ly9jc21zLXVhdC5lYmFvY2xvdWQuY29tLmNuL1xuICAvLyAgICAgb3B0aW9uVXJsOiAgICBjc21zL21vYmlsZS9wb2xpY3kvcXVvdGUvXG4gIC8vICAgICBwcm9kdWN0OiAgICAgIDFBTi9ZQVpISlRZV1gvMDAxXG4gIC8vICAgICB0b2tlbjogICAgICAgID9kZWxlZ2F0ZWQ9VEFJUkFOLmFkbWluXG4gIC8vICAgICAgICAgICAgICAgICAgICZ0aWNrZXQ9Q1NNRCtWRUZKVWtGT09tTXhaRGhrWmpFNU9URmxNRFF5WXpRd01qRXlZVFpoTkRjNFltTTFNbVE0T2pFMU9EZzVPVFUzT1RFME9EYyUzRCNcbiAgLy8gICAgICAgICAgICAgICAgICAgJnBhcmNlbD11c2VySWRcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIHRoaXMudXJsID0gdGhpcy4kcGFyZW50LiRjb25maWcud2ViVXJsICsgdGhpcy5vcHRpb25zVXJsICsgdGhpcy5wcm9kdWN0Q29kZTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICAgIGlmIChnZXRVc2VySWQoKSAhPT0gLTEgJiYgIWdldFVzZXJJZCgpKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9vbmxvYWQnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5q2j5bi46L+b5YWlXG4gICAgICBpZiAoIXRoaXMuc2hhcmVUb2tlbikge1xuICAgICAgICBnZXRFYm9Ub2tlbigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnRva2VuID0gJz8nICsgcmVzIHx8ICcnO1xuICAgICAgICAgIHRoaXMudXJsICs9IHRoaXMudG9rZW4gKyBgJnBhcmNlbD0ke2dldFVzZXJJZCgpfWA7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hhcmVUb2tlbikge1xuICAgICAgICAvLyDliIbkuqvpk77mjqVcbiAgICAgICAgdGhpcy51cmwgKz0gYCR7ZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIHRoaXMuc2hhcmVUb2tlblxuICAgICAgICApfSZwYXJjZWw9JHtnZXRVc2VySWQoKX1gO1xuXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7fTtcbiAgb25IaWRlKCkge31cbiAgb25VbmxvYWQoKSB7fVxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICBpZiAoIXRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5ZCI576O5oOg5YWo5a625L+d5Li65L2g5oqk6IiqJyxcbiAgICAgICAgcGF0aDogYC9wYWdlcy93ZWJWaWV3P2Zyb209c2hhcmUmc2hhcmVUb2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICB0aGlzLnRva2VuXG4gICAgICAgICl9JnByb2R1Y3RDb2RlPSR7dGhpcy5wcm9kdWN0Q29kZX1gXG4gICAgICB9O1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfmrKLov47mnaXliLDlkIjnvo7mg6Dlhajlrrbkv50nLFxuICAgICAgICBwYXRoOiBgL3BhZ2VzL29ubG9hZGBcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=