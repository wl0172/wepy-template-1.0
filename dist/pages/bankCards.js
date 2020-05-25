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

var BankCards = function (_wepy$page) {
  _inherits(BankCards, _wepy$page);

  function BankCards() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BankCards);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BankCards.__proto__ || Object.getPrototypeOf(BankCards)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '银行卡管理'
    }, _this.components = {}, _this.data = {
      bankList: [{}],
      eventChannel: null,
      fromUrl: ''
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      handleAddCards: function handleAddCards() {
        wx.navigateTo({
          url: './addBankCards'
        });
      },
      handleRemoveBank: function handleRemoveBank(index, item) {
        var _this2 = this;

        _wepy2.default.showModal({
          title: '提示',
          content: '删除此银行卡'
        }).then(function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '加载中'
            });
            (0, _index.removeBank)({ dataId: item.id, appId: 'client' }).then(function (res) {
              _this2.bankList.splice(index, 1);
              _this2.$apply();
              wx.hideLoading();
            });
          }
        });
      },
      handleSelectedBank: function handleSelectedBank(row) {
        if (this.fromUrl) {
          this.eventChannel.emit('getBankCardsInfo', row);
          wx.navigateBack({
            delta: 1
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BankCards, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.eventChannel = this.$wxpage.getOpenerEventChannel();
      this.fromUrl = option.fromUrl;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this3 = this;

      wx.showLoading({
        title: '加载中'
      });
      (0, _index.getBanksList)({
        pageSize: 10,
        pageNum: 1
      }).then(function (res) {
        _this3.bankList = res.list || [];
        wx.hideLoading();
        _this3.$apply();
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }]);

  return BankCards;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BankCards , 'pages/bankCards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmtDYXJkcy5qcyJdLCJuYW1lcyI6WyJCYW5rQ2FyZHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJiYW5rTGlzdCIsImV2ZW50Q2hhbm5lbCIsImZyb21VcmwiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsImhhbmRsZUFkZENhcmRzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlUmVtb3ZlQmFuayIsImluZGV4IiwiaXRlbSIsIndlcHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uZmlybSIsInNob3dMb2FkaW5nIiwiZGF0YUlkIiwiaWQiLCJhcHBJZCIsInNwbGljZSIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiaGFuZGxlU2VsZWN0ZWRCYW5rIiwicm93IiwiZW1pdCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9uIiwiJHd4cGFnZSIsImdldE9wZW5lckV2ZW50Q2hhbm5lbCIsInBhZ2VTaXplIiwicGFnZU51bSIsImxpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FBQyxFQUFELENBREw7QUFFTEMsb0JBQWMsSUFGVDtBQUdMQyxlQUFTO0FBSEosSyxRQUtQQyxRLEdBQVcsRSxRQUNYQyxLLEdBQVEsRSxRQW1CUkMsTyxHQUFVO0FBQ1JDLG9CQURRLDRCQUNTO0FBQ2ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BTE87QUFNUkMsc0JBTlEsNEJBTVNDLEtBTlQsRUFNZ0JDLElBTmhCLEVBTXNCO0FBQUE7O0FBQzVCQyx1QkFDR0MsU0FESCxDQUNhO0FBQ1RDLGlCQUFPLElBREU7QUFFVEMsbUJBQVM7QUFGQSxTQURiLEVBS0dDLElBTEgsQ0FLUSxlQUFPO0FBQ1gsY0FBSUMsSUFBSUMsT0FBUixFQUFpQjtBQUNmWixlQUFHYSxXQUFILENBQWU7QUFDYkwscUJBQU87QUFETSxhQUFmO0FBR0EsbUNBQVcsRUFBRU0sUUFBUVQsS0FBS1UsRUFBZixFQUFtQkMsT0FBTyxRQUExQixFQUFYLEVBQWlETixJQUFqRCxDQUFzRCxlQUFPO0FBQzNELHFCQUFLakIsUUFBTCxDQUFjd0IsTUFBZCxDQUFxQmIsS0FBckIsRUFBNEIsQ0FBNUI7QUFDQSxxQkFBS2MsTUFBTDtBQUNBbEIsaUJBQUdtQixXQUFIO0FBQ0QsYUFKRDtBQUtEO0FBQ0YsU0FoQkg7QUFpQkQsT0F4Qk87QUF5QlJDLHdCQXpCUSw4QkF5QldDLEdBekJYLEVBeUJnQjtBQUN0QixZQUFJLEtBQUsxQixPQUFULEVBQWtCO0FBQ2hCLGVBQUtELFlBQUwsQ0FBa0I0QixJQUFsQixDQUF1QixrQkFBdkIsRUFBMkNELEdBQTNDO0FBQ0FyQixhQUFHdUIsWUFBSCxDQUFnQjtBQUNkQyxtQkFBTztBQURPLFdBQWhCO0FBR0Q7QUFDRjtBQWhDTyxLOzs7OzsyQkFsQkhDLE0sRUFBUTtBQUNiLFdBQUsvQixZQUFMLEdBQW9CLEtBQUtnQyxPQUFMLENBQWFDLHFCQUFiLEVBQXBCO0FBQ0EsV0FBS2hDLE9BQUwsR0FBZThCLE9BQU85QixPQUF0QjtBQUNBLFdBQUt1QixNQUFMO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUNQbEIsU0FBR2EsV0FBSCxDQUFlO0FBQ2JMLGVBQU87QUFETSxPQUFmO0FBR0EsK0JBQWE7QUFDWG9CLGtCQUFVLEVBREM7QUFFWEMsaUJBQVM7QUFGRSxPQUFiLEVBR0duQixJQUhILENBR1EsZUFBTztBQUNiLGVBQUtqQixRQUFMLEdBQWdCa0IsSUFBSW1CLElBQUosSUFBWSxFQUE1QjtBQUNBOUIsV0FBR21CLFdBQUg7QUFDQSxlQUFLRCxNQUFMO0FBQ0QsT0FQRDtBQVFEOzs7NkJBbUNRLENBQUU7OzsrQkFDQSxDQUFFOzs7O0VBakV3QlosZUFBS3lCLEk7O2tCQUF2QjNDLFMiLCJmaWxlIjoiYmFua0NhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7IGdldEJhbmtzTGlzdCwgcmVtb3ZlQmFuayB9IGZyb20gJy4uL3NlcnZlci9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmtDYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZO26KGM5Y2h566h55CGJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgYmFua0xpc3Q6IFt7fV0sXG4gICAgZXZlbnRDaGFubmVsOiBudWxsLFxuICAgIGZyb21Vcmw6ICcnXG4gIH07XG4gIGNvbXB1dGVkID0ge307XG4gIHdhdGNoID0ge307XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICB0aGlzLmV2ZW50Q2hhbm5lbCA9IHRoaXMuJHd4cGFnZS5nZXRPcGVuZXJFdmVudENoYW5uZWwoKTtcbiAgICB0aGlzLmZyb21VcmwgPSBvcHRpb24uZnJvbVVybDtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICB9KTtcbiAgICBnZXRCYW5rc0xpc3Qoe1xuICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgcGFnZU51bTogMVxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuYmFua0xpc3QgPSByZXMubGlzdCB8fCBbXTtcbiAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlQWRkQ2FyZHMoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9hZGRCYW5rQ2FyZHMnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZVJlbW92ZUJhbmsoaW5kZXgsIGl0ZW0pIHtcbiAgICAgIHdlcHlcbiAgICAgICAgLnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTmraTpk7booYzljaEnXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZW1vdmVCYW5rKHsgZGF0YUlkOiBpdGVtLmlkLCBhcHBJZDogJ2NsaWVudCcgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmJhbmtMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlU2VsZWN0ZWRCYW5rKHJvdykge1xuICAgICAgaWYgKHRoaXMuZnJvbVVybCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2hhbm5lbC5lbWl0KCdnZXRCYW5rQ2FyZHNJbmZvJywgcm93KTtcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG9uSGlkZSgpIHt9XG4gIG9uVW5sb2FkKCkge31cbn1cbiJdfQ==