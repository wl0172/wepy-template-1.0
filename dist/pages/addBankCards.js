'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index2 = require('./../server/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBankCards = function (_wepy$page) {
  _inherits(AddBankCards, _wepy$page);

  function AddBankCards() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddBankCards);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddBankCards.__proto__ || Object.getPrototypeOf(AddBankCards)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '添加银行卡'
    }, _this.components = {}, _this.data = {
      provinceList: [],
      provinceIndex: '',
      cityList: [],
      cityIndex: '',
      bankList: [],
      bankIndex: '',
      queryList: {
        appId: 'client',
        provinceId: '',
        cityId: '',
        bankCode: '',
        bankName: '',
        subBankName: '',
        bankCardNo: '',
        cardOwnerName: '',
        mobilePhone: '',
        verificationCode: ''
      },
      isGetting: false,
      count: 0
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      /**
       * 选择省/直辖市
       */
      provincePickerChange: function provincePickerChange(e) {
        var _this2 = this;

        var _index = e.detail.value;
        this.provinceIndex = _index;
        this.queryList.provinceId = this.provinceList[this.provinceIndex].id;
        // this.cityList = [];
        // this.queryList.cityId = '';
        // this.cityIndex = '';
        this.$apply();
        (0, _index2.getRegionList)({ pid: this.queryList.provinceId }).then(function (res) {
          _this2.cityList = res || [];
          _this2.$apply();
        });
      },

      /**
       * 选择市
       */
      cityPickerChange: function cityPickerChange(e) {
        var _index = e.detail.value;
        this.cityIndex = _index;
        this.queryList.cityId = this.cityList[this.cityIndex].id;
        this.$apply();
      },

      /**
       * 选择开户银行
       */
      bankPickerChange: function bankPickerChange(e) {
        var _index = e.detail.value;
        this.bankIndex = _index;
        this.queryList.bankCode = this.bankList[this.bankIndex].bankCode;
        this.queryList.bankName = this.bankList[this.bankIndex].bankName;
        this.$apply();
      },
      bindBankNameInput: function bindBankNameInput(e) {
        this.queryList.subBankName = e.detail.value;
        this.$apply();
      },
      bindBankCodeInput: function bindBankCodeInput(e) {
        this.queryList.bankCardNo = e.detail.value;
        this.$apply();
      },
      bindNameInput: function bindNameInput(e) {
        this.queryList.cardOwnerName = e.detail.value;
        this.$apply();
      },
      bindPhoneInput: function bindPhoneInput(e) {
        this.queryList.mobilePhone = e.detail.value;
        this.$apply();
      },
      bindCodeInput: function bindCodeInput(e) {
        this.queryList.verificationCode = e.detail.value;
        this.$apply();
      },
      handleGetCode: function handleGetCode() {
        var _this3 = this;

        if (!/(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/.test(this.queryList.mobilePhone)) {
          _wepy2.default.showToast({
            title: '请输入正确的手机号码！',
            icon: 'none',
            duration: 1500
          });
        } else {
          _wepy2.default.showToast({
            title: '\u8BF7\u67E5\u6536' + this.queryList.mobilePhone + '\u77ED\u4FE1\u9A8C\u8BC1\u7801',
            icon: 'none',
            duration: 1500
          });
          wx.showLoading({
            title: '加载中'
          });
          (0, _index2.getSMSCode)({
            appId: 'client',
            mobilePhone: this.queryList.mobilePhone,
            businessType: 4
          }).then(function (res) {
            wx.hideLoading();
            _this3.count = 60;
            _this3.timer = setInterval(function () {
              if (_this3.count > 0) {
                _this3.isGetting = true;
                _this3.count--;
                _this3.$apply();
              } else {
                _this3.isGetting = false;
                _this3.$apply();
                clearTimeout(_this3.timer);
              }
            }, 1000);
          });
        }
      },
      handleAddCards: function handleAddCards() {
        if (!this.queryList.provinceId) {
          _wepy2.default.showToast({
            title: '请选择开户行所在省！',
            icon: 'none',
            duration: 1500
          });
        } else if (!this.queryList.cityId) {
          _wepy2.default.showToast({
            title: '请选择开户行所在市！',
            icon: 'none',
            duration: 1500
          });
        } else if (!this.queryList.bankCode) {
          _wepy2.default.showToast({
            title: '请选择开户银行！',
            icon: 'none',
            duration: 1500
          });
        } else if (!this.queryList.subBankName) {
          _wepy2.default.showToast({
            title: '请输入开户分/支行！',
            icon: 'none',
            duration: 1500
          });
        } else if (!this.queryList.bankCardNo) {
          _wepy2.default.showToast({
            title: '请输入储蓄卡卡号！',
            icon: 'none',
            duration: 1500
          });
        } else if (!/^[\u4e00-\u9fa5]+$/.test(this.queryList.cardOwnerName)) {
          _wepy2.default.showToast({
            title: '请输入正确持卡人姓名！',
            icon: 'none',
            duration: 1500
          });
        } else if (!/(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/.test(this.queryList.mobilePhone)) {
          _wepy2.default.showToast({
            title: '请输入正确手机号码！',
            icon: 'none',
            duration: 1500
          });
        } else if (!this.queryList.verificationCode) {
          _wepy2.default.showToast({
            title: '请输入验证码！',
            icon: 'none',
            duration: 1500
          });
        } else {
          wx.showLoading({
            title: '加载中'
          });
          (0, _index2.addBank)(this.queryList).then(function (res) {
            wx.hideLoading();
            _wepy2.default.showToast({
              title: '添加银行卡成功！',
              icon: 'none',
              duration: 1500
            });
            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              });
            }, 1500);
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddBankCards, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this4 = this;

      (0, _index2.getRegionList)({ pid: -1 }).then(function (res) {
        _this4.provinceList = res || [];
        _this4.$apply();
      });
      (0, _index2.getBankListOptionList)().then(function (res) {
        _this4.bankList = res || [];
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

  return AddBankCards;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(AddBankCards , 'pages/addBankCards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEJhbmtDYXJkcy5qcyJdLCJuYW1lcyI6WyJBZGRCYW5rQ2FyZHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJwcm92aW5jZUxpc3QiLCJwcm92aW5jZUluZGV4IiwiY2l0eUxpc3QiLCJjaXR5SW5kZXgiLCJiYW5rTGlzdCIsImJhbmtJbmRleCIsInF1ZXJ5TGlzdCIsImFwcElkIiwicHJvdmluY2VJZCIsImNpdHlJZCIsImJhbmtDb2RlIiwiYmFua05hbWUiLCJzdWJCYW5rTmFtZSIsImJhbmtDYXJkTm8iLCJjYXJkT3duZXJOYW1lIiwibW9iaWxlUGhvbmUiLCJ2ZXJpZmljYXRpb25Db2RlIiwiaXNHZXR0aW5nIiwiY291bnQiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsInByb3ZpbmNlUGlja2VyQ2hhbmdlIiwiZSIsIl9pbmRleCIsImRldGFpbCIsInZhbHVlIiwiaWQiLCIkYXBwbHkiLCJwaWQiLCJ0aGVuIiwicmVzIiwiY2l0eVBpY2tlckNoYW5nZSIsImJhbmtQaWNrZXJDaGFuZ2UiLCJiaW5kQmFua05hbWVJbnB1dCIsImJpbmRCYW5rQ29kZUlucHV0IiwiYmluZE5hbWVJbnB1dCIsImJpbmRQaG9uZUlucHV0IiwiYmluZENvZGVJbnB1dCIsImhhbmRsZUdldENvZGUiLCJ0ZXN0Iiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwid3giLCJzaG93TG9hZGluZyIsImJ1c2luZXNzVHlwZSIsImhpZGVMb2FkaW5nIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImhhbmRsZUFkZENhcmRzIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQU9xQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdB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ZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQge1xuICBnZXRSZWdpb25MaXN0LFxuICBnZXRCYW5rTGlzdE9wdGlvbkxpc3QsXG4gIGdldFNNU0NvZGUsXG4gIGFkZEJhbmtcbn0gZnJvbSAnLi4vc2VydmVyL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkQmFua0NhcmRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmt7vliqDpk7booYzljaEnXG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBwcm92aW5jZUxpc3Q6IFtdLFxuICAgIHByb3ZpbmNlSW5kZXg6ICcnLFxuICAgIGNpdHlMaXN0OiBbXSxcbiAgICBjaXR5SW5kZXg6ICcnLFxuICAgIGJhbmtMaXN0OiBbXSxcbiAgICBiYW5rSW5kZXg6ICcnLFxuICAgIHF1ZXJ5TGlzdDoge1xuICAgICAgYXBwSWQ6ICdjbGllbnQnLFxuICAgICAgcHJvdmluY2VJZDogJycsXG4gICAgICBjaXR5SWQ6ICcnLFxuICAgICAgYmFua0NvZGU6ICcnLFxuICAgICAgYmFua05hbWU6ICcnLFxuICAgICAgc3ViQmFua05hbWU6ICcnLFxuICAgICAgYmFua0NhcmRObzogJycsXG4gICAgICBjYXJkT3duZXJOYW1lOiAnJyxcbiAgICAgIG1vYmlsZVBob25lOiAnJyxcbiAgICAgIHZlcmlmaWNhdGlvbkNvZGU6ICcnXG4gICAgfSxcbiAgICBpc0dldHRpbmc6IGZhbHNlLFxuICAgIGNvdW50OiAwXG4gIH07XG4gIGNvbXB1dGVkID0ge307XG4gIHdhdGNoID0ge307XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBnZXRSZWdpb25MaXN0KHsgcGlkOiAtMSB9KS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnByb3ZpbmNlTGlzdCA9IHJlcyB8fCBbXTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gICAgZ2V0QmFua0xpc3RPcHRpb25MaXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5iYW5rTGlzdCA9IHJlcyB8fCBbXTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH1cbiAgb25TaG93KCkge31cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDpgInmi6nnnIEv55u06L6W5biCXG4gICAgICovXG4gICAgcHJvdmluY2VQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgbGV0IF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5wcm92aW5jZUluZGV4ID0gX2luZGV4O1xuICAgICAgdGhpcy5xdWVyeUxpc3QucHJvdmluY2VJZCA9IHRoaXMucHJvdmluY2VMaXN0W3RoaXMucHJvdmluY2VJbmRleF0uaWQ7XG4gICAgICAvLyB0aGlzLmNpdHlMaXN0ID0gW107XG4gICAgICAvLyB0aGlzLnF1ZXJ5TGlzdC5jaXR5SWQgPSAnJztcbiAgICAgIC8vIHRoaXMuY2l0eUluZGV4ID0gJyc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgZ2V0UmVnaW9uTGlzdCh7IHBpZDogdGhpcy5xdWVyeUxpc3QucHJvdmluY2VJZCB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY2l0eUxpc3QgPSByZXMgfHwgW107XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmAieaLqeW4glxuICAgICAqL1xuICAgIGNpdHlQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgbGV0IF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5jaXR5SW5kZXggPSBfaW5kZXg7XG4gICAgICB0aGlzLnF1ZXJ5TGlzdC5jaXR5SWQgPSB0aGlzLmNpdHlMaXN0W3RoaXMuY2l0eUluZGV4XS5pZDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgInmi6nlvIDmiLfpk7booYxcbiAgICAgKi9cbiAgICBiYW5rUGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuYmFua0luZGV4ID0gX2luZGV4O1xuICAgICAgdGhpcy5xdWVyeUxpc3QuYmFua0NvZGUgPSB0aGlzLmJhbmtMaXN0W3RoaXMuYmFua0luZGV4XS5iYW5rQ29kZTtcbiAgICAgIHRoaXMucXVlcnlMaXN0LmJhbmtOYW1lID0gdGhpcy5iYW5rTGlzdFt0aGlzLmJhbmtJbmRleF0uYmFua05hbWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYmluZEJhbmtOYW1lSW5wdXQoZSkge1xuICAgICAgdGhpcy5xdWVyeUxpc3Quc3ViQmFua05hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBiaW5kQmFua0NvZGVJbnB1dChlKSB7XG4gICAgICB0aGlzLnF1ZXJ5TGlzdC5iYW5rQ2FyZE5vID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYmluZE5hbWVJbnB1dChlKSB7XG4gICAgICB0aGlzLnF1ZXJ5TGlzdC5jYXJkT3duZXJOYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYmluZFBob25lSW5wdXQoZSkge1xuICAgICAgdGhpcy5xdWVyeUxpc3QubW9iaWxlUGhvbmUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBiaW5kQ29kZUlucHV0KGUpIHtcbiAgICAgIHRoaXMucXVlcnlMaXN0LnZlcmlmaWNhdGlvbkNvZGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBoYW5kbGVHZXRDb2RlKCkge1xuICAgICAgaWYgKFxuICAgICAgICAhLyheMVszfDR8NXw3fDh8OV1cXGR7OX0kKXwoXjA5XFxkezh9JCkvLnRlc3QodGhpcy5xdWVyeUxpc3QubW9iaWxlUGhvbmUpXG4gICAgICApIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+356CB77yBJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IGDor7fmn6XmlLYke3RoaXMucXVlcnlMaXN0Lm1vYmlsZVBob25lfeefreS/oemqjOivgeeggWAsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgIH0pO1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICAgIH0pO1xuICAgICAgICBnZXRTTVNDb2RlKHtcbiAgICAgICAgICBhcHBJZDogJ2NsaWVudCcsXG4gICAgICAgICAgbW9iaWxlUGhvbmU6IHRoaXMucXVlcnlMaXN0Lm1vYmlsZVBob25lLFxuICAgICAgICAgIGJ1c2luZXNzVHlwZTogNFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gNjA7XG4gICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLmlzR2V0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNHZXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVBZGRDYXJkcygpIHtcbiAgICAgIGlmICghdGhpcy5xdWVyeUxpc3QucHJvdmluY2VJZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nlvIDmiLfooYzmiYDlnKjnnIHvvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlcnlMaXN0LmNpdHlJZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nlvIDmiLfooYzmiYDlnKjluILvvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlcnlMaXN0LmJhbmtDb2RlKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeW8gOaIt+mTtuihjO+8gScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5xdWVyeUxpc3Quc3ViQmFua05hbWUpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5byA5oi35YiGL+aUr+ihjO+8gScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5xdWVyeUxpc3QuYmFua0NhcmRObykge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXlgqjok4TljaHljaHlj7fvvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIS9eW1xcdTRlMDAtXFx1OWZhNV0rJC8udGVzdCh0aGlzLnF1ZXJ5TGlzdC5jYXJkT3duZXJOYW1lKSkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmraPnoa7mjIHljaHkurrlp5PlkI3vvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICEvKF4xWzN8NHw1fDd8OHw5XVxcZHs5fSQpfCheMDlcXGR7OH0kKS8udGVzdCh0aGlzLnF1ZXJ5TGlzdC5tb2JpbGVQaG9uZSlcbiAgICAgICkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmraPnoa7miYvmnLrlj7fnoIHvvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucXVlcnlMaXN0LnZlcmlmaWNhdGlvbkNvZGUpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl6aqM6K+B56CB77yBJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRCYW5rKHRoaXMucXVlcnlMaXN0KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOmTtuihjOWNoeaIkOWKn++8gScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG9uSGlkZSgpIHt9XG4gIG9uVW5sb2FkKCkge31cbn1cbiJdfQ==