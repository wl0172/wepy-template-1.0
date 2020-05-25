'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../lib/utils.js');

var _index = require('./../server/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaitAccount = function (_wepy$page) {
  _inherits(WaitAccount, _wepy$page);

  function WaitAccount() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WaitAccount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WaitAccount.__proto__ || Object.getPrototypeOf(WaitAccount)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '待入账明细'
    }, _this.components = {}, _this.data = {
      detailList: []
    }, _this.computed = {}, _this.watch = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WaitAccount, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      (0, _index.getIncomeDetail)().then(function (res) {
        _this2.detailList = res || [];
        _this2.detailList.forEach(function (item) {
          if (item.anticipatedIncomeDetailVOList) {
            item.anticipatedIncomeDetailVOList.forEach(function (_item) {
              _item.policyTime = new Date(_item.policyTime).toString('yyyy-MM-dd hh:mm:ss');
            });
          }
        });
        _this2.$apply();
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }]);

  return WaitAccount;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(WaitAccount , 'pages/waitAccount'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRBY2NvdW50LmpzIl0sIm5hbWVzIjpbIldhaXRBY2NvdW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiZGV0YWlsTGlzdCIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwib3B0aW9uIiwidGhlbiIsInJlcyIsImZvckVhY2giLCJpdGVtIiwiYW50aWNpcGF0ZWRJbmNvbWVEZXRhaWxWT0xpc3QiLCJfaXRlbSIsInBvbGljeVRpbWUiLCJEYXRlIiwidG9TdHJpbmciLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBRFAsSyxRQUdQQyxRLEdBQVcsRSxRQUNYQyxLLEdBQVEsRSxRQWlCUkMsTyxHQUFVLEU7Ozs7OzJCQWhCSEMsTSxFQUFRLENBQUU7Ozs2QkFDUjtBQUFBOztBQUNQLG9DQUFrQkMsSUFBbEIsQ0FBdUIsZUFBTztBQUM1QixlQUFLTCxVQUFMLEdBQWtCTSxPQUFPLEVBQXpCO0FBQ0EsZUFBS04sVUFBTCxDQUFnQk8sT0FBaEIsQ0FBd0IsZ0JBQVE7QUFDOUIsY0FBSUMsS0FBS0MsNkJBQVQsRUFBd0M7QUFDdENELGlCQUFLQyw2QkFBTCxDQUFtQ0YsT0FBbkMsQ0FBMkMsaUJBQVM7QUFDbERHLG9CQUFNQyxVQUFOLEdBQW1CLElBQUlDLElBQUosQ0FBU0YsTUFBTUMsVUFBZixFQUEyQkUsUUFBM0IsQ0FDakIscUJBRGlCLENBQW5CO0FBR0QsYUFKRDtBQUtEO0FBQ0YsU0FSRDtBQVNBLGVBQUtDLE1BQUw7QUFDRCxPQVpEO0FBYUQ7Ozs2QkFHUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQTdCMEJDLGVBQUtDLEk7O2tCQUF6QnJCLFciLCJmaWxlIjoid2FpdEFjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7IGdldEluY29tZURldGFpbCB9IGZyb20gJy4uL3NlcnZlci9pbmRleC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0QWNjb3VudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5b6F5YWl6LSm5piO57uGJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgZGV0YWlsTGlzdDogW11cbiAgfTtcbiAgY29tcHV0ZWQgPSB7fTtcbiAgd2F0Y2ggPSB7fTtcbiAgb25Mb2FkKG9wdGlvbikge31cbiAgb25TaG93KCkge1xuICAgIGdldEluY29tZURldGFpbCgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsTGlzdCA9IHJlcyB8fCBbXTtcbiAgICAgIHRoaXMuZGV0YWlsTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5hbnRpY2lwYXRlZEluY29tZURldGFpbFZPTGlzdCkge1xuICAgICAgICAgIGl0ZW0uYW50aWNpcGF0ZWRJbmNvbWVEZXRhaWxWT0xpc3QuZm9yRWFjaChfaXRlbSA9PiB7XG4gICAgICAgICAgICBfaXRlbS5wb2xpY3lUaW1lID0gbmV3IERhdGUoX2l0ZW0ucG9saWN5VGltZSkudG9TdHJpbmcoXG4gICAgICAgICAgICAgICd5eXl5LU1NLWRkIGhoOm1tOnNzJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7fTtcblxuICBvbkhpZGUoKSB7fVxuICBvblVubG9hZCgpIHt9XG59XG4iXX0=