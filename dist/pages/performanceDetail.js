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

var PerformanceDetail = function (_wepy$page) {
  _inherits(PerformanceDetail, _wepy$page);

  function PerformanceDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PerformanceDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PerformanceDetail.__proto__ || Object.getPrototypeOf(PerformanceDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '历史业绩',
      backgroundColor: '#ffffff'
    }, _this.components = {}, _this.data = {
      performanceList: [],
      date: new Date().toString('yyyy-MM')
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      handleDateChange: function handleDateChange(e) {
        var _this2 = this;

        this.date = e.detail.value;
        (0, _index.getHistoryDetail)({ date: this.date }).then(function (res) {
          _this2.performanceList = res || [];
          _this2.$apply();
        });
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PerformanceDetail, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this3 = this;

      (0, _index.getHistoryDetail)().then(function (res) {
        _this3.performanceList = res || [];
        _this3.$apply();
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

  return PerformanceDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PerformanceDetail , 'pages/performanceDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlBlcmZvcm1hbmNlRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImNvbXBvbmVudHMiLCJkYXRhIiwicGVyZm9ybWFuY2VMaXN0IiwiZGF0ZSIsIkRhdGUiLCJ0b1N0cmluZyIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJvcHRpb24iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFGVixLLFFBSVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyx1QkFBaUIsRUFEWjtBQUVMQyxZQUFNLElBQUlDLElBQUosR0FBV0MsUUFBWCxDQUFvQixTQUFwQjtBQUZELEssUUFJUEMsUSxHQUFXLEUsUUFDWEMsSyxHQUFRLEUsUUFRUkMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNTQyxDQURULEVBQ1k7QUFBQTs7QUFDbEIsYUFBS1AsSUFBTCxHQUFZTyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0EscUNBQWlCLEVBQUVULE1BQU0sS0FBS0EsSUFBYixFQUFqQixFQUFzQ1UsSUFBdEMsQ0FBMkMsZUFBTztBQUNoRCxpQkFBS1gsZUFBTCxHQUF1QlksT0FBTyxFQUE5QjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FIRDtBQUlBLGFBQUtBLE1BQUw7QUFDRDtBQVJPLEs7Ozs7OzJCQVBIQyxNLEVBQVE7QUFBQTs7QUFDYixxQ0FBbUJILElBQW5CLENBQXdCLGVBQU87QUFDN0IsZUFBS1gsZUFBTCxHQUF1QlksT0FBTyxFQUE5QjtBQUNBLGVBQUtDLE1BQUw7QUFDRCxPQUhEO0FBSUQ7Ozs2QkFDUSxDQUFFOzs7NkJBV0YsQ0FBRTs7OytCQUNBLENBQUU7Ozs7RUE5QmdDRSxlQUFLQyxJOztrQkFBL0J0QixpQiIsImZpbGUiOiJwZXJmb3JtYW5jZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBnZXRIaXN0b3J5RGV0YWlsIH0gZnJvbSAnLi4vc2VydmVyL2luZGV4LmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmZvcm1hbmNlRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljoblj7LkuJrnu6knLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBwZXJmb3JtYW5jZUxpc3Q6IFtdLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoJ3l5eXktTU0nKVxuICB9O1xuICBjb21wdXRlZCA9IHt9O1xuICB3YXRjaCA9IHt9O1xuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgZ2V0SGlzdG9yeURldGFpbCgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMucGVyZm9ybWFuY2VMaXN0ID0gcmVzIHx8IFtdO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfVxuICBvblNob3coKSB7fVxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZURhdGVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBnZXRIaXN0b3J5RGV0YWlsKHsgZGF0ZTogdGhpcy5kYXRlIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZUxpc3QgPSByZXMgfHwgW107XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9O1xuICBvbkhpZGUoKSB7fVxuICBvblVubG9hZCgpIHt9XG59XG4iXX0=