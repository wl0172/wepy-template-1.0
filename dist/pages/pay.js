'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pay = function (_wepy$page) {
  _inherits(Pay, _wepy$page);

  function Pay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pay.__proto__ || Object.getPrototypeOf(Pay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '支付页'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pay, [{
    key: 'onLoad',
    value: function onLoad(option) {
      wx.requestPayment({
        timeStamp: option.timeStamp + '',
        nonceStr: option.nonceStr,
        package: decodeURIComponent(option.package),
        signType: 'MD5',
        paySign: option.paySign,
        success: function success(res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function () {
            _wepy2.default.navigateBack({
              delta: '1'
            });
          }, 1000);
        },
        fail: function fail(res) {
          wx.showToast({
            title: '请重试！',
            icon: 'none',
            duration: 1000
          });
          setTimeout(function () {
            _wepy2.default.navigateBack({
              delta: '1'
            });
          }, 1000);
        }
      });
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

  return Pay;
}(_wepy2.default.page);

exports.default = Pay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJQYXkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsIm9wdGlvbiIsInd4IiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzaWduVHlwZSIsInBheVNpZ24iLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBQ1hDLEssR0FBUSxFLFFBbUNSQyxPLEdBQVUsRTs7Ozs7MkJBbENIQyxNLEVBQVE7QUFDYkMsU0FBR0MsY0FBSCxDQUFrQjtBQUNoQkMsbUJBQVdILE9BQU9HLFNBQVAsR0FBbUIsRUFEZDtBQUVoQkMsa0JBQVVKLE9BQU9JLFFBRkQ7QUFHaEJDLGlCQUFTQyxtQkFBbUJOLE9BQU9LLE9BQTFCLENBSE87QUFJaEJFLGtCQUFVLEtBSk07QUFLaEJDLGlCQUFTUixPQUFPUSxPQUxBO0FBTWhCQyxlQU5nQixtQkFNUkMsR0FOUSxFQU1IO0FBQ1hULGFBQUdVLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxJQURJO0FBRVhDLGtCQUFNLFNBRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0FDLHFCQUFXLFlBQU07QUFDZkMsMkJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLHFCQUFPO0FBRFMsYUFBbEI7QUFHRCxXQUpELEVBSUcsSUFKSDtBQUtELFNBakJlO0FBa0JoQkMsWUFsQmdCLGdCQWtCWFQsR0FsQlcsRUFrQk47QUFDUlQsYUFBR1UsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLE1BREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLQUMscUJBQVcsWUFBTTtBQUNmQywyQkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQU87QUFEUyxhQUFsQjtBQUdELFdBSkQsRUFJRyxJQUpIO0FBS0Q7QUE3QmUsT0FBbEI7QUErQkQ7Ozs2QkFDUSxDQUFFOzs7NkJBRUYsQ0FBRTs7OytCQUNBLENBQUU7Ozs7RUE1Q2tCRixlQUFLSSxJOztrQkFBakI1QixHIiwiZmlsZSI6InBheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pSv5LuY6aG1J1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7fTtcbiAgY29tcHV0ZWQgPSB7fTtcbiAgd2F0Y2ggPSB7fTtcbiAgb25Mb2FkKG9wdGlvbikge1xuICAgIHd4LnJlcXVlc3RQYXltZW50KHtcbiAgICAgIHRpbWVTdGFtcDogb3B0aW9uLnRpbWVTdGFtcCArICcnLFxuICAgICAgbm9uY2VTdHI6IG9wdGlvbi5ub25jZVN0cixcbiAgICAgIHBhY2thZ2U6IGRlY29kZVVSSUNvbXBvbmVudChvcHRpb24ucGFja2FnZSksXG4gICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICBwYXlTaWduOiBvcHRpb24ucGF5U2lnbixcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6ICcxJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YeN6K+V77yBJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAnMSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25TaG93KCkge31cbiAgbWV0aG9kcyA9IHt9O1xuICBvbkhpZGUoKSB7fVxuICBvblVubG9hZCgpIHt9XG59XG4iXX0=