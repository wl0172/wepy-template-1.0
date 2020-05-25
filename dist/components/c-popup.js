'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxSystem = require('./../lib/wx-system.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var popup = function (_wepy$component) {
  _inherits(popup, _wepy$component);

  function popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = popup.__proto__ || Object.getPrototypeOf(popup)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      animationData: {},
      popupStyle: ''
    }, _this.watch = {
      size: function size(value, oldValue) {
        this.animationData = _wepy2.default.createAnimation({
          duration: this.duration,
          timingFunction: 'ease'
        });
        this.animationData.translateY(-value * ((0, _wxSystem.getSysWidth)() / 750)).step();
        this.$apply();
        if (value > 1000) {
          this.popupStyle = 'height:' + value + 'rpx;bottom:' + (-value - 2) + 'rpx;width:100%;';
        } else {
          this.popupStyle = 'height:' + value + 'rpx;bottom:' + (-value - 2) + 'rpx;width:100%;border-top-left-radius: ' + this.radius + 'rpx;border-top-right-radius: ' + this.radius + 'rpx;';
        }

        this.$apply();
      },
      showModal: function showModal(newValue, oldValue) {
        if (this.type === 'top') {
          this.popupStyle = 'height:' + this.size + 'rpx;width:100%;top:' + -this.size + 'rpx;';
          if (newValue && !oldValue) {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'linear'
            });
            this.animationData.translateY(this.size * ((0, _wxSystem.getSysWidth)() / 750)).step();
            this.$apply();
          } else {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'linear'
            });
            this.animationData.translateY(0).step();
            this.$apply();
          }
        } else if (this.type === 'right') {
          this.popupStyle = 'width:' + this.size + 'rpx;right:' + -this.size + 'rpx;top:0px;bottom:0px;';
          if (newValue && !oldValue) {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'linear'
            });
            this.animationData.translateX(-this.size * ((0, _wxSystem.getSysWidth)() / 750)).step();
            this.$apply();
          } else {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'linear'
            });
            this.animationData.translateX(0).step();
            this.$apply();
          }
        } else if (this.type === 'bottom') {
          this.popupStyle = 'height:' + this.size + 'rpx;bottom:' + (-this.size - 1) + 'rpx;width:100%;border-top-left-radius: ' + this.radius + 'rpx;border-top-right-radius: ' + this.radius + 'rpx;';
          if (newValue && !oldValue) {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'ease'
            });
            this.animationData.translateY(-this.size * ((0, _wxSystem.getSysWidth)() / 750)).step();
            this.$apply();
          } else {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'ease'
            });
            this.animationData.translateY(0).step();
            this.$apply();
          }
        } else if (this.type === 'left') {
          this.popupStyle = 'width:' + this.size + 'rpx;left:' + -this.size + 'rpx;top:0px;bottom:0px;';
          if (newValue && !oldValue) {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'ease'
            });
            this.animationData.translateX(this.size * ((0, _wxSystem.getSysWidth)() / 750)).step();
            this.$apply();
          } else {
            this.animationData = _wepy2.default.createAnimation({
              duration: this.duration,
              timingFunction: 'ease'
            });
            this.animationData.translateX(0).step();
            this.$apply();
          }
        }
      }
    }, _this.props = {
      type: {
        type: String,
        default: 'right'
      },
      showModal: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      size: {
        type: String,
        default: '400',
        twoWay: true
      },
      duration: {
        type: String,
        default: '400'
      },
      modal: {
        type: String,
        default: 'YES'
      },
      radius: {
        type: String,
        default: '0'
      }
    }, _this.methods = {
      hideModal: function hideModal() {
        this.$emit('hideModal');
      },
      preventTouchMove: function preventTouchMove() {
        console.warn('preventTouchMove方法已阻止其他事件。');
      }
    }, _this.events = {
      hideModal: function hideModal() {
        this.showModal = false;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(popup, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return popup;
}(_wepy2.default.component);

exports.default = popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImMtcG9wdXAuanMiXSwibmFtZXMiOlsicG9wdXAiLCJjb21wb25lbnRzIiwiZGF0YSIsImFuaW1hdGlvbkRhdGEiLCJwb3B1cFN0eWxlIiwid2F0Y2giLCJzaXplIiwidmFsdWUiLCJvbGRWYWx1ZSIsIndlcHkiLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwidHJhbnNsYXRlWSIsInN0ZXAiLCIkYXBwbHkiLCJyYWRpdXMiLCJzaG93TW9kYWwiLCJuZXdWYWx1ZSIsInR5cGUiLCJ0cmFuc2xhdGVYIiwicHJvcHMiLCJTdHJpbmciLCJkZWZhdWx0IiwiQm9vbGVhbiIsInR3b1dheSIsIm1vZGFsIiwibWV0aG9kcyIsImhpZGVNb2RhbCIsIiRlbWl0IiwicHJldmVudFRvdWNoTW92ZSIsImNvbnNvbGUiLCJ3YXJuIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGtCQUFZO0FBRlAsSyxRQUlQQyxLLEdBQVE7QUFDTkMsVUFETSxnQkFDREMsS0FEQyxFQUNNQyxRQUROLEVBQ2dCO0FBQ3BCLGFBQUtMLGFBQUwsR0FBcUJNLGVBQUtDLGVBQUwsQ0FBcUI7QUFDeENDLG9CQUFVLEtBQUtBLFFBRHlCO0FBRXhDQywwQkFBZ0I7QUFGd0IsU0FBckIsQ0FBckI7QUFJQSxhQUFLVCxhQUFMLENBQW1CVSxVQUFuQixDQUE4QixDQUFDTixLQUFELElBQVUsK0JBQWdCLEdBQTFCLENBQTlCLEVBQThETyxJQUE5RDtBQUNBLGFBQUtDLE1BQUw7QUFDQSxZQUFJUixRQUFRLElBQVosRUFBa0I7QUFDaEIsZUFBS0gsVUFBTCxlQUE0QkcsS0FBNUIsb0JBQStDLENBQUNBLEtBQUQsR0FDN0MsQ0FERjtBQUVELFNBSEQsTUFHTztBQUNM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SyxRQTRCUkksTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixhQUFLQyxLQUFMLENBQVcsV0FBWDtBQUNELE9BSE87QUFJUkMsc0JBSlEsOEJBSVc7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsNEJBQWI7QUFDRDtBQU5PLEssUUFTVkMsTSxHQUFTO0FBQ1BMLGVBRE8sdUJBQ0s7QUFDVixhQUFLWCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsYUFBS0YsTUFBTDtBQUNEO0FBSk0sSzs7Ozs7NkJBREEsQ0FBRTs7OztFQXBKc0JOLGVBQUt5QixTOztrQkFBbkJsQyxLIiwiZmlsZSI6ImMtcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgZ2V0U3lzV2lkdGggfSBmcm9tICcuLi9saWIvd3gtc3lzdGVtLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBvcHVwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgYW5pbWF0aW9uRGF0YToge30sXG4gICAgcG9wdXBTdHlsZTogJydcbiAgfTtcbiAgd2F0Y2ggPSB7XG4gICAgc2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltYXRpb25EYXRhLnRyYW5zbGF0ZVkoLXZhbHVlICogKGdldFN5c1dpZHRoKCkgLyA3NTApKS5zdGVwKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICB0aGlzLnBvcHVwU3R5bGUgPSBgaGVpZ2h0OiR7dmFsdWV9cnB4O2JvdHRvbTokey12YWx1ZSAtXG4gICAgICAgICAgMn1ycHg7d2lkdGg6MTAwJTtgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3B1cFN0eWxlID0gYGhlaWdodDoke3ZhbHVlfXJweDtib3R0b206JHstdmFsdWUgLVxuICAgICAgICAgIDJ9cnB4O3dpZHRoOjEwMCU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHtcbiAgICAgICAgICB0aGlzLnJhZGl1c1xuICAgICAgICB9cnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3RoaXMucmFkaXVzfXJweDtgO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgc2hvd01vZGFsKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cFN0eWxlID0gYGhlaWdodDoke3RoaXMuc2l6ZX1ycHg7d2lkdGg6MTAwJTt0b3A6JHstdGhpc1xuICAgICAgICAgIC5zaXplfXJweDtgO1xuICAgICAgICBpZiAobmV3VmFsdWUgJiYgIW9sZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFcbiAgICAgICAgICAgIC50cmFuc2xhdGVZKHRoaXMuc2l6ZSAqIChnZXRTeXNXaWR0aCgpIC8gNzUwKSlcbiAgICAgICAgICAgIC5zdGVwKCk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YS50cmFuc2xhdGVZKDApLnN0ZXAoKTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLnBvcHVwU3R5bGUgPSBgd2lkdGg6JHt0aGlzLnNpemV9cnB4O3JpZ2h0OiR7LXRoaXNcbiAgICAgICAgICAuc2l6ZX1ycHg7dG9wOjBweDtib3R0b206MHB4O2A7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhb2xkVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YVxuICAgICAgICAgICAgLnRyYW5zbGF0ZVgoLXRoaXMuc2l6ZSAqIChnZXRTeXNXaWR0aCgpIC8gNzUwKSlcbiAgICAgICAgICAgIC5zdGVwKCk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YS50cmFuc2xhdGVYKDApLnN0ZXAoKTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgdGhpcy5wb3B1cFN0eWxlID0gYGhlaWdodDoke3RoaXMuc2l6ZX1ycHg7Ym90dG9tOiR7LXRoaXMuc2l6ZSAtXG4gICAgICAgICAgMX1ycHg7d2lkdGg6MTAwJTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke1xuICAgICAgICAgIHRoaXMucmFkaXVzXG4gICAgICAgIH1ycHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7dGhpcy5yYWRpdXN9cnB4O2A7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhb2xkVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFcbiAgICAgICAgICAgIC50cmFuc2xhdGVZKC10aGlzLnNpemUgKiAoZ2V0U3lzV2lkdGgoKSAvIDc1MCkpXG4gICAgICAgICAgICAuc3RlcCgpO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhLnRyYW5zbGF0ZVkoMCkuc3RlcCgpO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cFN0eWxlID0gYHdpZHRoOiR7dGhpcy5zaXplfXJweDtsZWZ0OiR7LXRoaXNcbiAgICAgICAgICAuc2l6ZX1ycHg7dG9wOjBweDtib3R0b206MHB4O2A7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhb2xkVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFcbiAgICAgICAgICAgIC50cmFuc2xhdGVYKHRoaXMuc2l6ZSAqIChnZXRTeXNXaWR0aCgpIC8gNzUwKSlcbiAgICAgICAgICAgIC5zdGVwKCk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEudHJhbnNsYXRlWCgwKS5zdGVwKCk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3JpZ2h0J1xuICAgIH0sXG4gICAgc2hvd01vZGFsOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICc0MDAnLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBkdXJhdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzQwMCdcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnWUVTJ1xuICAgIH0sXG4gICAgcmFkaXVzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnMCdcbiAgICB9XG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgdGhpcy4kZW1pdCgnaGlkZU1vZGFsJyk7XG4gICAgfSxcbiAgICBwcmV2ZW50VG91Y2hNb3ZlKCkge1xuICAgICAgY29uc29sZS53YXJuKCdwcmV2ZW50VG91Y2hNb3Zl5pa55rOV5bey6Zi75q2i5YW25LuW5LqL5Lu244CCJyk7XG4gICAgfVxuICB9O1xuICBvbkxvYWQoKSB7fVxuICBldmVudHMgPSB7XG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9O1xufVxuIl19