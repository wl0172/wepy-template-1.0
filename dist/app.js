'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _index = require('./config/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/onload', 'pages/my', 'pages/login'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '小程序',
        navigationBarTextStyle: 'black',
        backgroundColor: '#F6F6F6'
      },
      tabBar: {
        color: '#494949',
        selectedColor: '#ED4D58',
        borderStyle: 'white',
        backgroundColor: '#ffffff',
        list: [{
          pagePath: 'pages/onload',
          iconPath: 'images/index-icon.png',
          selectedIconPath: 'images/index-selected-icon.png',
          text: '首页'
        }, {
          pagePath: 'pages/my',
          iconPath: 'images/my-icon.png',
          selectedIconPath: 'images/my-selected-icon.png',
          text: '我的'
        }]
      },
      networkTimeout: {
        request: 30000,
        downloadFile: 30000
      }
    };
    _this.globalData = {
      userInfo: null
    };
    _this.$config = _index2.default;

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.info('小程序已启动！');
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCIkY29uZmlnIiwidXNlIiwiY29uc29sZSIsImluZm8iLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUE0Q0Usc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQTFDZEEsTUEwQ2MsR0ExQ0w7QUFDUEMsYUFBTyxDQUNMLGNBREssRUFFTCxVQUZLLEVBR0wsYUFISyxDQURBO0FBT1BDLGNBQVE7QUFDTkMsNkJBQXFCLE1BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixLQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCO0FBTFgsT0FQRDtBQWNQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkoseUJBQWlCLFNBSlg7QUFLTkssY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGNBRFo7QUFFRUMsb0JBQVUsdUJBRlo7QUFHRUMsNEJBQWtCLGdDQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBREksRUFPSjtBQUNFSCxvQkFBVSxVQURaO0FBRUVDLG9CQUFVLG9CQUZaO0FBR0VDLDRCQUFrQiw2QkFIcEI7QUFJRUMsZ0JBQU07QUFKUixTQVBJO0FBTEEsT0FkRDtBQWtDUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLEtBREs7QUFFZEMsc0JBQWM7QUFGQTtBQWxDVCxLQTBDSztBQUFBLFVBSGRDLFVBR2MsR0FIRDtBQUNYQyxnQkFBVTtBQURDLEtBR0M7QUFBQSxVQVNkQyxPQVRjLEdBU0p0QixlQVRJOztBQUVaLFVBQUt1QixHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFDVTtBQUNUQyxjQUFRQyxJQUFSLENBQWEsU0FBYjtBQUNEOzs7NkJBQ1EsQ0FBRTs7OztFQW5EZ0JDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2luZGV4LmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9vbmxvYWQnLFxuICAgICAgJ3BhZ2VzL215JyxcbiAgICAgICdwYWdlcy9sb2dpbicsXG5cbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+eoi+W6jycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNidcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjNDk0OTQ5JyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjRUQ0RDU4JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL29ubG9hZCcsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaW5kZXgtaWNvbi5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaW5kZXgtc2VsZWN0ZWQtaWNvbi5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215JyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9teS1pY29uLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9teS1zZWxlY3RlZC1pY29uLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIHJlcXVlc3Q6IDMwMDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiAzMDAwMFxuICAgIH1cbiAgfTtcbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICB9XG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnNvbGUuaW5mbygn5bCP56iL5bqP5bey5ZCv5Yqo77yBJyk7XG4gIH1cbiAgb25IaWRlKCkge31cbiAgJGNvbmZpZyA9IGNvbmZpZztcbn1cbiJdfQ==