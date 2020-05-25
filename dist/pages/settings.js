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

var Settings = function (_wepy$page) {
  _inherits(Settings, _wepy$page);

  function Settings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Settings.__proto__ || Object.getPrototypeOf(Settings)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '设置'
    }, _this.components = {}, _this.data = {
      systemMode: '',
      isIphoneX: false
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      handleAboutUs: function handleAboutUs() {
        wx.navigateTo({
          url: './aboutUs'
        });
      },
      handleProtcol: function handleProtcol() {
        wx.navigateTo({
          url: './hideProtocol'
        });
      },
      handleLoginOut: function handleLoginOut() {
        wx.showLoading({
          title: '加载中'
        });
        (0, _index.loginOut)().then(function (res) {
          wx.hideLoading();
          try {
            wx.clearStorageSync();
            wx.switchTab({
              url: './onload'
            });
          } catch (e) {
            _wepy2.default.showToast({
              title: '退出登录失败，请重新尝试！',
              icon: 'none',
              duration: 1500
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Settings, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.systemMode = (0, _wxSystem.getClientType)();
      if (this.systemMode.indexOf('iPhone X') != -1) {
        this.isIphoneX = true;
      }
      this.$apply();
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

  return Settings;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Settings , 'pages/settings'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic3lzdGVtTW9kZSIsImlzSXBob25lWCIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwiaGFuZGxlQWJvdXRVcyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZVByb3Rjb2wiLCJoYW5kbGVMb2dpbk91dCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ0aGVuIiwiaGlkZUxvYWRpbmciLCJjbGVhclN0b3JhZ2VTeW5jIiwic3dpdGNoVGFiIiwiZSIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJvcHRpb24iLCJpbmRleE9mIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEMsaUJBQVc7QUFGTixLLFFBSVBDLFEsR0FBVyxFLFFBQ1hDLEssR0FBUSxFLFFBU1JDLE8sR0FBVTtBQUNSQyxtQkFEUSwyQkFDUTtBQUNkQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQUxPO0FBTVJDLG1CQU5RLDJCQU1RO0FBQ2RILFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BVk87QUFXUkUsb0JBWFEsNEJBV1M7QUFDZkosV0FBR0ssV0FBSCxDQUFlO0FBQ2JDLGlCQUFPO0FBRE0sU0FBZjtBQUdBLCtCQUFXQyxJQUFYLENBQWdCLGVBQU87QUFDckJQLGFBQUdRLFdBQUg7QUFDQSxjQUFJO0FBQ0ZSLGVBQUdTLGdCQUFIO0FBQ0FULGVBQUdVLFNBQUgsQ0FBYTtBQUNYUixtQkFBSztBQURNLGFBQWI7QUFHRCxXQUxELENBS0UsT0FBT1MsQ0FBUCxFQUFVO0FBQ1ZDLDJCQUFLQyxTQUFMLENBQWU7QUFDYlAscUJBQU8sZUFETTtBQUViUSxvQkFBTSxNQUZPO0FBR2JDLHdCQUFVO0FBSEcsYUFBZjtBQUtEO0FBQ0YsU0FkRDtBQWVEO0FBOUJPLEs7Ozs7OzJCQVJIQyxNLEVBQVE7QUFDYixXQUFLdEIsVUFBTCxHQUFrQiw4QkFBbEI7QUFDQSxVQUFJLEtBQUtBLFVBQUwsQ0FBZ0J1QixPQUFoQixDQUF3QixVQUF4QixLQUF1QyxDQUFDLENBQTVDLEVBQStDO0FBQzdDLGFBQUt0QixTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7QUFDRCxXQUFLdUIsTUFBTDtBQUNEOzs7NkJBQ1EsQ0FBRTs7OzZCQWlDRixDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQXBEdUJOLGVBQUtPLEk7O2tCQUF0QjlCLFEiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0Q2xpZW50VHlwZSB9IGZyb20gJy4uL2xpYi93eC1zeXN0ZW0uanMnO1xuaW1wb3J0IHsgbG9naW5PdXQgfSBmcm9tICcuLi9zZXJ2ZXIvaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6+572uJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgc3lzdGVtTW9kZTogJycsXG4gICAgaXNJcGhvbmVYOiBmYWxzZVxuICB9O1xuICBjb21wdXRlZCA9IHt9O1xuICB3YXRjaCA9IHt9O1xuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgdGhpcy5zeXN0ZW1Nb2RlID0gZ2V0Q2xpZW50VHlwZSgpO1xuICAgIGlmICh0aGlzLnN5c3RlbU1vZGUuaW5kZXhPZignaVBob25lIFgnKSAhPSAtMSkge1xuICAgICAgdGhpcy5pc0lwaG9uZVggPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG4gIG9uU2hvdygpIHt9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlQWJvdXRVcygpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2Fib3V0VXMnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZVByb3Rjb2woKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9oaWRlUHJvdG9jb2wnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUxvZ2luT3V0KCkge1xuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgIH0pO1xuICAgICAgbG9naW5PdXQoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICB1cmw6ICcuL29ubG9hZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6YCA5Ye655m75b2V5aSx6LSl77yM6K+36YeN5paw5bCd6K+V77yBJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb25IaWRlKCkge31cbiAgb25VbmxvYWQoKSB7fVxufVxuIl19