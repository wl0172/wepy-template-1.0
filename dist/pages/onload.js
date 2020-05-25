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

var Onload = function (_wepy$page) {
  _inherits(Onload, _wepy$page);

  function Onload() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Onload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Onload.__proto__ || Object.getPrototypeOf(Onload)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'wepy框架'
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Onload, [{
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

  return Onload;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Onload , 'pages/onload'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ubG9hZC5qcyJdLCJuYW1lcyI6WyJPbmxvYWQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIndhdGNoIiwib3B0aW9uIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBR1BDLFEsR0FBVyxFLFFBQ1hDLEssR0FBUSxFOzs7OzsyQkFDREMsTSxFQUFRLENBQUU7Ozs2QkFDUixDQUVSOzs7NkJBQ1EsQ0FBRTs7OytCQUNBLENBQUU7Ozs7RUFmcUJDLGVBQUtDLEk7O2tCQUFwQlQsTSIsImZpbGUiOiJvbmxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25sb2FkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd3ZXB55qGG5p62J1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG5cbiAgfTtcbiAgY29tcHV0ZWQgPSB7fTtcbiAgd2F0Y2ggPSB7fTtcbiAgb25Mb2FkKG9wdGlvbikge31cbiAgb25TaG93KCkge1xuXG4gIH07XG4gIG9uSGlkZSgpIHt9XG4gIG9uVW5sb2FkKCkge31cblxuXG59XG4iXX0=