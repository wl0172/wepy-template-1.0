'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../server/index.js');

var _utils = require('./../lib/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WithdrawMoney = function (_wepy$page) {
  _inherits(WithdrawMoney, _wepy$page);

  function WithdrawMoney() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WithdrawMoney);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithdrawMoney.__proto__ || Object.getPrototypeOf(WithdrawMoney)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '资产提现'
    }, _this.components = {}, _this.data = {
      queryList: {
        withdrawMoney: ''
      },
      withdrawInfo: {
        drawAmount: '',
        individualTax: '',
        receiveAmount: ''
      },
      bankInfo: {},
      cashAsset: '0',
      isWarn: false,
      warnModal: false
    }, _this.computed = {
      isOption: function isOption() {
        if (!this.isWarn && Number(this.queryList.withdrawMoney) > 0 && Number(this.queryList.withdrawMoney) <= Number(this.cashAsset)) {
          return true;
        }
        return false;
      },
      getCashAssetFormat: function getCashAssetFormat() {
        console.log((0, _utils.formatNumber)(this.cashAsset));
        return (0, _utils.formatNumber)(this.cashAsset);
      }
    }, _this.watch = {}, _this.methods = {
      bindMoneyInput: function bindMoneyInput(e) {
        this.queryList.withdrawMoney = e.detail.value;
        if (Number(this.queryList.withdrawMoney) > Number(this.cashAsset)) {
          this.isWarn = true;
        } else {
          this.isWarn = false;
        }
        this.$apply();
      },
      blurMoneyInput: function blurMoneyInput(e) {
        var value = e.detail.value;
        try {
          if (value.indexOf('.') != -1) {
            value = parseFloat(value).toFixed(2);
          } else {
            value = parseInt(value);
          }
          if (isNaN(value)) {
            value = '';
          }
          this.queryList.withdrawMoney = value;
        } catch (error) {
          this.queryList.withdrawMoney = '';
        }
        if (Number(this.queryList.withdrawMoney) > Number(this.cashAsset)) {
          this.isWarn = true;
        } else {
          this.isWarn = false;
        }
        this.$apply();
      },
      handleWithdrawMoneyAll: function handleWithdrawMoneyAll() {
        if (Number(this.cashAsset) > 0) {
          this.queryList.withdrawMoney = this.cashAsset;
          this.$apply();
        }
      },
      handleSubmit: function handleSubmit() {
        var _this2 = this;

        if (this.isOption) {
          if (this.bankInfo.id) {
            (0, _index.calculatePrice)(this.queryList.withdrawMoney).then(function (res) {
              _this2.warnModal = true;
              _this2.withdrawInfo.drawAmount = (0, _utils.formatNumber)(res.drawAmount);
              _this2.withdrawInfo.individualTax = (0, _utils.formatNumber)(res.individualTax);
              _this2.withdrawInfo.receiveAmount = (0, _utils.formatNumber)(res.receiveAmount);
              _this2.$apply();
            });
            this.$apply();
          }
        } else {
          _wepy2.default.showToast({
            title: '请输入您的提现金额',
            icon: 'none',
            duration: 1500
          });
        }
      },
      handleToBankCards: function handleToBankCards() {
        var that = this;
        wx.navigateTo({
          url: './bankCards?fromUrl=withdrawMoney',
          events: {
            getBankCardsInfo: function getBankCardsInfo(data) {
              that.bankInfo = data;
              console.log(data);
              that.$apply();
            }
          },
          success: function success(res) {
            console.log(res);
          }
        });
      },
      handleWithdrawSubmit: function handleWithdrawSubmit() {
        var _this3 = this;

        this.warnModal = false;
        if (this.isOption) {
          if (this.bankInfo.id) {
            wx.showLoading({
              title: '加载中'
            });
            (0, _index.applyForWithdrawal)({
              drawAmount: this.queryList.withdrawMoney,
              bankId: this.bankInfo.id
            }).then(function (res) {
              wx.hideLoading();
              (0, _index.getAssetBalance)().then(function (res) {
                _this3.cashAsset = Number(res.cashAsset).toFixed(2);
                _this3.$apply();
              });
              _this3.queryList.withdrawMoney = '';
              _this3.$apply();
            });
          } else {
            _wepy2.default.showToast({
              title: '请先选择银行卡！',
              icon: 'none',
              duration: 1500
            });
          }
        } else {
          _wepy2.default.showToast({
            title: '请输入您的提现金额',
            icon: 'none',
            duration: 1500
          });
        }
      },
      handleCloseDialog: function handleCloseDialog() {
        this.warnModal = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WithdrawMoney, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this4 = this;

      (0, _index.getAssetBalance)().then(function (res) {
        _this4.cashAsset = Number(res.cashAsset).toFixed(2);
        _this4.$apply();
      });
      (0, _index.getCurrentBank)().then(function (res) {
        _this4.bankInfo = res || {};
        _this4.$apply();
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

  return WithdrawMoney;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(WithdrawMoney , 'pages/withdrawMoney'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3TW9uZXkuanMiXSwibmFtZXMiOlsiV2l0aGRyYXdNb25leSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInF1ZXJ5TGlzdCIsIndpdGhkcmF3TW9uZXkiLCJ3aXRoZHJhd0luZm8iLCJkcmF3QW1vdW50IiwiaW5kaXZpZHVhbFRheCIsInJlY2VpdmVBbW91bnQiLCJiYW5rSW5mbyIsImNhc2hBc3NldCIsImlzV2FybiIsIndhcm5Nb2RhbCIsImNvbXB1dGVkIiwiaXNPcHRpb24iLCJOdW1iZXIiLCJnZXRDYXNoQXNzZXRGb3JtYXQiLCJjb25zb2xlIiwibG9nIiwid2F0Y2giLCJtZXRob2RzIiwiYmluZE1vbmV5SW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJibHVyTW9uZXlJbnB1dCIsImluZGV4T2YiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInBhcnNlSW50IiwiaXNOYU4iLCJlcnJvciIsImhhbmRsZVdpdGhkcmF3TW9uZXlBbGwiLCJoYW5kbGVTdWJtaXQiLCJpZCIsInRoZW4iLCJyZXMiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJoYW5kbGVUb0JhbmtDYXJkcyIsInRoYXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJnZXRCYW5rQ2FyZHNJbmZvIiwic3VjY2VzcyIsImhhbmRsZVdpdGhkcmF3U3VibWl0Iiwic2hvd0xvYWRpbmciLCJiYW5rSWQiLCJoaWRlTG9hZGluZyIsImhhbmRsZUNsb3NlRGlhbG9nIiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFNQTs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGlCQUFX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QUFLMUIsU0FBTCxHQUFpQkssT0FBT3NCLElBQUkzQixTQUFYLEVBQXNCbUIsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBakI7QUFDQSx1QkFBS0osTUFBTDtBQUNELGVBSEQ7QUFJQSxxQkFBS3RCLFNBQUwsQ0FBZUMsYUFBZixHQUErQixFQUEvQjtBQUNBLHFCQUFLcUIsTUFBTDtBQUNELGFBWEQ7QUFZRCxXQWhCRCxNQWdCTztBQUNMYSwyQkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHFCQUFPLFVBRE07QUFFYkMsb0JBQU0sTUFGTztBQUdiQyx3QkFBVTtBQUhHLGFBQWY7QUFLRDtBQUNGLFNBeEJELE1Bd0JPO0FBQ0xKLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sV0FETTtBQUViQyxrQkFBTSxNQUZPO0FBR2JDLHNCQUFVO0FBSEcsV0FBZjtBQUtEO0FBQ0YsT0EzR087QUE0R1JhLHVCQTVHUSwrQkE0R1k7QUFDbEIsYUFBSzNDLFNBQUwsR0FBaUIsS0FBakI7QUFDRDtBQTlHTyxLOzs7OzsyQkFYSDRDLE0sRUFBUTtBQUFBOztBQUNiLG9DQUFrQnBCLElBQWxCLENBQXVCLGVBQU87QUFDNUIsZUFBSzFCLFNBQUwsR0FBaUJLLE9BQU9zQixJQUFJM0IsU0FBWCxFQUFzQm1CLE9BQXRCLENBQThCLENBQTlCLENBQWpCO0FBQ0EsZUFBS0osTUFBTDtBQUNELE9BSEQ7QUFJQSxtQ0FBaUJXLElBQWpCLENBQXNCLGVBQU87QUFDM0IsZUFBSzNCLFFBQUwsR0FBZ0I0QixPQUFPLEVBQXZCO0FBQ0EsZUFBS1osTUFBTDtBQUNELE9BSEQ7QUFJRDs7OzZCQUNRLENBQUU7Ozs2QkFpSEYsQ0FBRTs7OytCQUNBLENBQUU7Ozs7RUFoSzRCYSxlQUFLbUIsSTs7a0JBQTNCM0QsYSIsImZpbGUiOiJ3aXRoZHJhd01vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRCYW5rLFxuICBnZXRBc3NldEJhbGFuY2UsXG4gIGFwcGx5Rm9yV2l0aGRyYXdhbCxcbiAgY2FsY3VsYXRlUHJpY2Vcbn0gZnJvbSAnLi4vc2VydmVyL2luZGV4LmpzJztcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXRoZHJhd01vbmV5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotYTkuqfmj5DnjrAnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBxdWVyeUxpc3Q6IHtcbiAgICAgIHdpdGhkcmF3TW9uZXk6ICcnXG4gICAgfSxcbiAgICB3aXRoZHJhd0luZm86IHtcbiAgICAgIGRyYXdBbW91bnQ6ICcnLFxuICAgICAgaW5kaXZpZHVhbFRheDogJycsXG4gICAgICByZWNlaXZlQW1vdW50OiAnJ1xuICAgIH0sXG4gICAgYmFua0luZm86IHt9LFxuICAgIGNhc2hBc3NldDogJzAnLFxuICAgIGlzV2FybjogZmFsc2UsXG4gICAgd2Fybk1vZGFsOiBmYWxzZVxuICB9O1xuICBjb21wdXRlZCA9IHtcbiAgICBpc09wdGlvbigpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNXYXJuICYmXG4gICAgICAgIE51bWJlcih0aGlzLnF1ZXJ5TGlzdC53aXRoZHJhd01vbmV5KSA+IDAgJiZcbiAgICAgICAgTnVtYmVyKHRoaXMucXVlcnlMaXN0LndpdGhkcmF3TW9uZXkpIDw9IE51bWJlcih0aGlzLmNhc2hBc3NldClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldENhc2hBc3NldEZvcm1hdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdE51bWJlcih0aGlzLmNhc2hBc3NldCkpO1xuICAgICAgcmV0dXJuIGZvcm1hdE51bWJlcih0aGlzLmNhc2hBc3NldCk7XG4gICAgfVxuICB9O1xuICB3YXRjaCA9IHt9O1xuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgZ2V0QXNzZXRCYWxhbmNlKCkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5jYXNoQXNzZXQgPSBOdW1iZXIocmVzLmNhc2hBc3NldCkudG9GaXhlZCgyKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gICAgZ2V0Q3VycmVudEJhbmsoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLmJhbmtJbmZvID0gcmVzIHx8IHt9O1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfVxuICBvblNob3coKSB7fVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRNb25leUlucHV0KGUpIHtcbiAgICAgIHRoaXMucXVlcnlMaXN0LndpdGhkcmF3TW9uZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGlmIChOdW1iZXIodGhpcy5xdWVyeUxpc3Qud2l0aGRyYXdNb25leSkgPiBOdW1iZXIodGhpcy5jYXNoQXNzZXQpKSB7XG4gICAgICAgIHRoaXMuaXNXYXJuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNXYXJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYmx1ck1vbmV5SW5wdXQoZSkge1xuICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignLicpICE9IC0xKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcnlMaXN0LndpdGhkcmF3TW9uZXkgPSB2YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMucXVlcnlMaXN0LndpdGhkcmF3TW9uZXkgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChOdW1iZXIodGhpcy5xdWVyeUxpc3Qud2l0aGRyYXdNb25leSkgPiBOdW1iZXIodGhpcy5jYXNoQXNzZXQpKSB7XG4gICAgICAgIHRoaXMuaXNXYXJuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNXYXJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgaGFuZGxlV2l0aGRyYXdNb25leUFsbCgpIHtcbiAgICAgIGlmIChOdW1iZXIodGhpcy5jYXNoQXNzZXQpID4gMCkge1xuICAgICAgICB0aGlzLnF1ZXJ5TGlzdC53aXRoZHJhd01vbmV5ID0gdGhpcy5jYXNoQXNzZXQ7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5pc09wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5iYW5rSW5mby5pZCkge1xuICAgICAgICAgIGNhbGN1bGF0ZVByaWNlKHRoaXMucXVlcnlMaXN0LndpdGhkcmF3TW9uZXkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMud2Fybk1vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2l0aGRyYXdJbmZvLmRyYXdBbW91bnQgPSBmb3JtYXROdW1iZXIocmVzLmRyYXdBbW91bnQpO1xuICAgICAgICAgICAgdGhpcy53aXRoZHJhd0luZm8uaW5kaXZpZHVhbFRheCA9IGZvcm1hdE51bWJlcihyZXMuaW5kaXZpZHVhbFRheCk7XG4gICAgICAgICAgICB0aGlzLndpdGhkcmF3SW5mby5yZWNlaXZlQW1vdW50ID0gZm9ybWF0TnVtYmVyKHJlcy5yZWNlaXZlQW1vdW50KTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5oKo55qE5o+Q546w6YeR6aKdJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVUb0JhbmtDYXJkcygpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2JhbmtDYXJkcz9mcm9tVXJsPXdpdGhkcmF3TW9uZXknLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBnZXRCYW5rQ2FyZHNJbmZvOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB0aGF0LmJhbmtJbmZvID0gZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlV2l0aGRyYXdTdWJtaXQoKSB7XG4gICAgICB0aGlzLndhcm5Nb2RhbCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuaXNPcHRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYmFua0luZm8uaWQpIHtcbiAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcHBseUZvcldpdGhkcmF3YWwoe1xuICAgICAgICAgICAgZHJhd0Ftb3VudDogdGhpcy5xdWVyeUxpc3Qud2l0aGRyYXdNb25leSxcbiAgICAgICAgICAgIGJhbmtJZDogdGhpcy5iYW5rSW5mby5pZFxuICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIGdldEFzc2V0QmFsYW5jZSgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jYXNoQXNzZXQgPSBOdW1iZXIocmVzLmNhc2hBc3NldCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5xdWVyeUxpc3Qud2l0aGRyYXdNb25leSA9ICcnO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+WFiOmAieaLqemTtuihjOWNoe+8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmgqjnmoTmj5DnjrDph5Hpop0nLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUNsb3NlRGlhbG9nKCkge1xuICAgICAgdGhpcy53YXJuTW9kYWwgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIG9uSGlkZSgpIHt9XG4gIG9uVW5sb2FkKCkge31cbn1cbiJdfQ==