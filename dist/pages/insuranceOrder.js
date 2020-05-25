'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../server/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceOrder = function (_wepy$page) {
  _inherits(InsuranceOrder, _wepy$page);

  function InsuranceOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsuranceOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsuranceOrder.__proto__ || Object.getPrototypeOf(InsuranceOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '全部保单'
    }, _this.components = {}, _this.data = {
      performanceList: [],
      queryList: {
        pageNum: 1,
        pageSize: 10
      }
    }, _this.computed = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsuranceOrder, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      (0, _index.getPerformance)(this.queryList).then(function (res) {
        _this2.performanceList = res || [];
        _this2.performanceList.forEach(function (item) {
          item.time = new Date(item.time).toString('yyyy-MM-dd hh:mm:ss');
        });
        if (_this2.performanceList.length == 0) {
          wx.showToast({
            title: '当前暂无数据！',
            icon: 'none',
            duration: 2000
          });
        }
        _this2.$apply();
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }, {
    key: 'onReachBottomDistance',
    value: function onReachBottomDistance() {
      var _this3 = this;

      _wepy2.default.showLoading({
        title: '加载中...'
      });
      this.queryList.pageNum++;
      (0, _index.getPerformance)(this.queryList).then(function (res) {
        if (res && res.length > 0) {
          res.forEach(function (item) {
            item.time = new Date(item.time).toString('yyyy-MM-dd hh:mm:ss');
            _this3.performanceList.push(item);
          });
        } else {
          wx.showToast({
            title: '当前暂无数据！',
            icon: 'none',
            duration: 2000
          });
        }
        _this3.$apply();
      });
    }
  }]);

  return InsuranceOrder;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(InsuranceOrder , 'pages/insuranceOrder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VyYW5jZU9yZGVyLmpzIl0sIm5hbWVzIjpbIkluc3VyYW5jZU9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicGVyZm9ybWFuY2VMaXN0IiwicXVlcnlMaXN0IiwicGFnZU51bSIsInBhZ2VTaXplIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm1ldGhvZHMiLCJvcHRpb24iLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJ0aW1lIiwiRGF0ZSIsInRvU3RyaW5nIiwibGVuZ3RoIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIiRhcHBseSIsIndlcHkiLCJzaG93TG9hZGluZyIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsdUJBQWlCLEVBRFo7QUFFTEMsaUJBQVc7QUFDVEMsaUJBQVMsQ0FEQTtBQUVUQyxrQkFBVTtBQUZEO0FBRk4sSyxRQU9QQyxRLEdBQVcsRSxRQUNYQyxLLEdBQVEsRSxRQWtCUkMsTyxHQUFVLEU7Ozs7OzJCQWpCSEMsTSxFQUFRLENBQUU7Ozs2QkFDUjtBQUFBOztBQUNQLGlDQUFlLEtBQUtOLFNBQXBCLEVBQStCTyxJQUEvQixDQUFvQyxlQUFPO0FBQ3pDLGVBQUtSLGVBQUwsR0FBdUJTLE9BQU8sRUFBOUI7QUFDQSxlQUFLVCxlQUFMLENBQXFCVSxPQUFyQixDQUE2QixnQkFBUTtBQUNuQ0MsZUFBS0MsSUFBTCxHQUFZLElBQUlDLElBQUosQ0FBU0YsS0FBS0MsSUFBZCxFQUFvQkUsUUFBcEIsQ0FBNkIscUJBQTdCLENBQVo7QUFDRCxTQUZEO0FBR0EsWUFBSSxPQUFLZCxlQUFMLENBQXFCZSxNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNwQ0MsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLFNBREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRDtBQUNELGVBQUtDLE1BQUw7QUFDRCxPQWJEO0FBY0Q7Ozs2QkFFUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7OzRDQUNXO0FBQUE7O0FBQ3RCQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmTCxlQUFPO0FBRFEsT0FBakI7QUFHQSxXQUFLakIsU0FBTCxDQUFlQyxPQUFmO0FBQ0EsaUNBQWUsS0FBS0QsU0FBcEIsRUFBK0JPLElBQS9CLENBQW9DLGVBQU87QUFDekMsWUFBSUMsT0FBT0EsSUFBSU0sTUFBSixHQUFhLENBQXhCLEVBQTJCO0FBQ3pCTixjQUFJQyxPQUFKLENBQVksZ0JBQVE7QUFDbEJDLGlCQUFLQyxJQUFMLEdBQVksSUFBSUMsSUFBSixDQUFTRixLQUFLQyxJQUFkLEVBQW9CRSxRQUFwQixDQUE2QixxQkFBN0IsQ0FBWjtBQUNBLG1CQUFLZCxlQUFMLENBQXFCd0IsSUFBckIsQ0FBMEJiLElBQTFCO0FBQ0QsV0FIRDtBQUlELFNBTEQsTUFLTztBQUNMSyxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sU0FESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtEO0FBQ0QsZUFBS0MsTUFBTDtBQUNELE9BZEQ7QUFlRDs7OztFQXZEeUNDLGVBQUtHLEk7O2tCQUE1QjlCLGMiLCJmaWxlIjoiaW5zdXJhbmNlT3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0UGVyZm9ybWFuY2UgfSBmcm9tICcuLi9zZXJ2ZXIvaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN1cmFuY2VPcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWo6YOo5L+d5Y2VJ1xuICB9O1xuXG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBwZXJmb3JtYW5jZUxpc3Q6IFtdLFxuICAgIHF1ZXJ5TGlzdDoge1xuICAgICAgcGFnZU51bTogMSxcbiAgICAgIHBhZ2VTaXplOiAxMFxuICAgIH1cbiAgfTtcbiAgY29tcHV0ZWQgPSB7fTtcbiAgd2F0Y2ggPSB7fTtcbiAgb25Mb2FkKG9wdGlvbikge31cbiAgb25TaG93KCkge1xuICAgIGdldFBlcmZvcm1hbmNlKHRoaXMucXVlcnlMaXN0KS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnBlcmZvcm1hbmNlTGlzdCA9IHJlcyB8fCBbXTtcbiAgICAgIHRoaXMucGVyZm9ybWFuY2VMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGltZSA9IG5ldyBEYXRlKGl0ZW0udGltZSkudG9TdHJpbmcoJ3l5eXktTU0tZGQgaGg6bW06c3MnKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2VMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflvZPliY3mmoLml6DmlbDmja7vvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHt9O1xuICBvbkhpZGUoKSB7fVxuICBvblVubG9hZCgpIHt9XG4gIG9uUmVhY2hCb3R0b21EaXN0YW5jZSgpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4uJ1xuICAgIH0pO1xuICAgIHRoaXMucXVlcnlMaXN0LnBhZ2VOdW0rKztcbiAgICBnZXRQZXJmb3JtYW5jZSh0aGlzLnF1ZXJ5TGlzdCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcyAmJiByZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtLnRpbWUgPSBuZXcgRGF0ZShpdGVtLnRpbWUpLnRvU3RyaW5nKCd5eXl5LU1NLWRkIGhoOm1tOnNzJyk7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZUxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5b2T5YmN5pqC5peg5pWw5o2u77yBJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=