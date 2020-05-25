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

var aboutUs = function (_wepy$page) {
  _inherits(aboutUs, _wepy$page);

  function aboutUs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, aboutUs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = aboutUs.__proto__ || Object.getPrototypeOf(aboutUs)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于我们'
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

  _createClass(aboutUs, [{
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

  return aboutUs;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(aboutUs , 'pages/aboutUs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0VXMuanMiXSwibmFtZXMiOlsiYWJvdXRVcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwicGhvbm9DYWxsIiwiaSIsInd4IiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwib3B0aW9uIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNwQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBQ1hDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0k7QUFDVixZQUFHQSxLQUFLLENBQVIsRUFBVTtBQUNSQyxhQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFhO0FBREUsV0FBakI7QUFHRCxTQUpELE1BSUs7QUFDSEYsYUFBR0MsYUFBSCxDQUFpQjtBQUNmQyx5QkFBYTtBQURFLFdBQWpCO0FBR0Q7QUFFRjtBQVpPLEs7Ozs7OzJCQUZIQyxNLEVBQVEsQ0FBRTs7OzZCQUNSLENBQUU7Ozs2QkFlRixDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQXpCdUJDLGVBQUtDLEk7O2tCQUFyQmYsTyIsImZpbGUiOiJhYm91dFVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWJvdXRVcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gY29uZmlnID0ge1xuICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+S6juaIkeS7rCdcbiB9O1xuIGNvbXBvbmVudHMgPSB7fTtcbiBkYXRhID0ge307XG4gY29tcHV0ZWQgPSB7fTtcbiB3YXRjaCA9IHt9O1xuIG9uTG9hZChvcHRpb24pIHt9XG4gb25TaG93KCkge31cbiBtZXRob2RzID0ge1xuICAgcGhvbm9DYWxsKGkpe1xuICAgICBpZihpID09IDApe1xuICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgcGhvbmVOdW1iZXI6ICcwMjEtNjYwNzYxMDAnXG4gICAgICAgfSlcbiAgICAgfWVsc2V7XG4gICAgICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICBwaG9uZU51bWJlcjogJzE5MTIxNDk2MTYyJ1xuICAgICAgIH0pXG4gICAgIH1cbiAgICAgXG4gICB9XG4gfTtcbiBvbkhpZGUoKSB7fVxuIG9uVW5sb2FkKCkge31cbn1cbiJdfQ==