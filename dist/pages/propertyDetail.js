'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxSystem = require('./../lib/wx-system.js');

var _index = require('./../server/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyDetail = function (_wepy$page) {
  _inherits(PropertyDetail, _wepy$page);

  function PropertyDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PropertyDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PropertyDetail.__proto__ || Object.getPrototypeOf(PropertyDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '资产明细'
    }, _this.components = {}, _this.data = {
      type: '',
      statusLabel: '全部',
      propertyType: '',
      pageNum: 1,
      pageSize: 20,
      scrollHeight: 0,
      warnModal: false,
      reasonDialog: false,
      resonText: '',
      date: new Date().toString('yyyy-MM'),
      anticipatedList: [],
      drawInfo: {}
    }, _this.computed = {}, _this.watch = {
      type: function type(value, old) {
        if (value == 0 || value == '') {
          this.statusLabel = '全部';
          this.propertyType = '';
        } else if (value == 1) {
          this.statusLabel = '提现';
          this.propertyType = '2';
        } else if (value == 2) {
          this.statusLabel = '收益';
          this.propertyType = '1';
        }
        this.pageNum = 1;
        this.$apply();
        this.getAnticipated();
      }
    }, _this.methods = _defineProperty({
      scrolltolowerFollow: function scrolltolowerFollow() {
        var _this2 = this;

        _wepy2.default.showLoading({
          title: '加载中...'
        });
        this.pageNum++;
        (0, _index.getAccountDetailInfo)({
          type: this.propertyType,
          date: this.date,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }).then(function (res) {
          if (res.list && res.list.length > 0) {
            res.list.forEach(function (item) {
              if (item.time) {
                item.time = new Date(item.time).toString('yyyy-MM-dd hh:ss:mm');
              }
              _this2.anticipatedList.push(item);
            });
            _this2.$apply();
          } else {
            _wepy2.default.showToast({
              title: '暂无更多！',
              icon: 'none',
              duration: 1500
            });
          }
        });
      },
      handleDateChange: function handleDateChange(e) {
        this.date = e.detail.value;
        this.$apply();
      },
      handleReason: function handleReason(index) {},
      preventTouchMove: function preventTouchMove(e) {
        console.log('阻止');
      },
      handleCloseDialog: function handleCloseDialog() {
        this.warnModal = false;
        this.$apply();
      },
      handleClose: function handleClose() {
        this.reasonDialog = false;
        this.$apply();
      },
      handleSelect: function handleSelect() {
        var _this3 = this;

        wx.showActionSheet({
          itemList: ['全部', '提现', '收益']
        }).then(function (res) {
          _this3.type = res.tapIndex;
          _this3.$apply();
        });
      },
      handleSuccessInfo: function handleSuccessInfo(row) {
        this.warnModal = true;
        this.$apply();
      }
    }, 'handleReason', function handleReason(row) {
      var _this4 = this;

      this.reasonDialog = true;
      (0, _index.getDrawRemark)({
        userDrawId: row.id,
        status: row.withdrawDepositStatus
      }).then(function (res) {
        _this4.resonText = res.remark;
        _this4.$apply();
      });
      this.$apply();
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PropertyDetail, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.scrollHeight = (0, _wxSystem.changePXToRPX)((0, _wxSystem.getSysHeight)()) - 90;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getAnticipated();
    }
  }, {
    key: 'getAnticipated',

    // 资产明细
    value: function getAnticipated() {
      var _this5 = this;

      (0, _index.getAccountDetailInfo)({
        type: this.propertyType,
        date: this.date,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(function (res) {
        if (res.list) {
          _this5.anticipatedList = res.list;
          _this5.anticipatedList.forEach(function (item) {
            if (item.time) {
              item.time = new Date(item.time).toString('yyyy-MM-dd hh:ss:mm');
            }
          });
          _this5.$apply();
        }
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {}
  }]);

  return PropertyDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PropertyDetail , 'pages/propertyDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5RGV0YWlsLmpzIl0sIm5hbWVzIjpbIlByb3BlcnR5RGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidHlwZSIsInN0YXR1c0xhYmVsIiwicHJvcGVydHlUeXBlIiwicGFnZU51bSIsInBhZ2VTaXplIiwic2Nyb2xsSGVpZ2h0Iiwid2Fybk1vZGFsIiwicmVhc29uRGlhbG9nIiwicmVzb25UZXh0IiwiZGF0ZSIsIkRhdGUiLCJ0b1N0cmluZyIsImFudGljaXBhdGVkTGlzdCIsImRyYXdJbmZvIiwiY29tcHV0ZWQiLCJ3YXRjaCIsInZhbHVlIiwib2xkIiwiJGFwcGx5IiwiZ2V0QW50aWNpcGF0ZWQiLCJtZXRob2RzIiwic2Nyb2xsdG9sb3dlckZvbGxvdyIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImxpc3QiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsInRpbWUiLCJwdXNoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJoYW5kbGVSZWFzb24iLCJpbmRleCIsInByZXZlbnRUb3VjaE1vdmUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VEaWFsb2ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNlbGVjdCIsInd4Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJ0YXBJbmRleCIsImhhbmRsZVN1Y2Nlc3NJbmZvIiwicm93IiwidXNlckRyYXdJZCIsImlkIiwic3RhdHVzIiwid2l0aGRyYXdEZXBvc2l0U3RhdHVzIiwicmVtYXJrIiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFNQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdU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LE9BZkQ7QUFnQkQ7Ozs2QkFDUSxDQUFFOzs7K0JBQ0EsQ0FBRTs7OztFQXpJNkJJLGVBQUtxQyxJOztrQkFBNUJoRSxjIiwiZmlsZSI6InByb3BlcnR5RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7XG4gIGdldFN5c1dpZHRoLFxuICBnZXRTeXNIZWlnaHQsXG4gIGNoYW5nZVBYVG9SUFgsXG4gIGNoYW5nZVJQWFRvUFhcbn0gZnJvbSAnLi4vbGliL3d4LXN5c3RlbS5qcyc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsSW5mbywgZ2V0RHJhd1JlbWFyayB9IGZyb20gJy4uL3NlcnZlci9pbmRleC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eURldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LWE5Lqn5piO57uGJ1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdHlwZTogJycsXG4gICAgc3RhdHVzTGFiZWw6ICflhajpg6gnLFxuICAgIHByb3BlcnR5VHlwZTogJycsXG4gICAgcGFnZU51bTogMSxcbiAgICBwYWdlU2l6ZTogMjAsXG4gICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgIHdhcm5Nb2RhbDogZmFsc2UsXG4gICAgcmVhc29uRGlhbG9nOiBmYWxzZSxcbiAgICByZXNvblRleHQ6ICcnLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoJ3l5eXktTU0nKSxcbiAgICBhbnRpY2lwYXRlZExpc3Q6IFtdLFxuICAgIGRyYXdJbmZvOntcblxuICAgIH1cbiAgfTtcbiAgY29tcHV0ZWQgPSB7fTtcbiAgd2F0Y2ggPSB7XG4gICAgdHlwZSh2YWx1ZSwgb2xkKSB7XG4gICAgICBpZiAodmFsdWUgPT0gMCB8fCB2YWx1ZSA9PSAnJykge1xuICAgICAgICB0aGlzLnN0YXR1c0xhYmVsID0gJ+WFqOmDqCc7XG4gICAgICAgIHRoaXMucHJvcGVydHlUeXBlID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNMYWJlbCA9ICfmj5DnjrAnO1xuICAgICAgICB0aGlzLnByb3BlcnR5VHlwZSA9ICcyJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gMikge1xuICAgICAgICB0aGlzLnN0YXR1c0xhYmVsID0gJ+aUtuebiic7XG4gICAgICAgIHRoaXMucHJvcGVydHlUeXBlID0gJzEnO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWdlTnVtID0gMTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB0aGlzLmdldEFudGljaXBhdGVkKCk7XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBjaGFuZ2VQWFRvUlBYKGdldFN5c0hlaWdodCgpKSAtIDkwO1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIHRoaXMuZ2V0QW50aWNpcGF0ZWQoKTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNjcm9sbHRvbG93ZXJGb2xsb3coKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9KTtcbiAgICAgIHRoaXMucGFnZU51bSsrO1xuICAgICAgZ2V0QWNjb3VudERldGFpbEluZm8oe1xuICAgICAgICB0eXBlOiB0aGlzLnByb3BlcnR5VHlwZSxcbiAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxuICAgICAgICBwYWdlTnVtOiB0aGlzLnBhZ2VOdW0sXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMubGlzdCAmJiByZXMubGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmVzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRpbWUpIHtcbiAgICAgICAgICAgICAgaXRlbS50aW1lID0gbmV3IERhdGUoaXRlbS50aW1lKS50b1N0cmluZygneXl5eS1NTS1kZCBoaDpzczptbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbnRpY2lwYXRlZExpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pqC5peg5pu05aSa77yBJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlRGF0ZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLmRhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBoYW5kbGVSZWFzb24oaW5kZXgpIHt9LFxuICAgIHByZXZlbnRUb3VjaE1vdmUoZSkge1xuICAgICAgY29uc29sZS5sb2coJ+mYu+atoicpO1xuICAgIH0sXG4gICAgaGFuZGxlQ2xvc2VEaWFsb2coKSB7XG4gICAgICB0aGlzLndhcm5Nb2RhbCA9IGZhbHNlO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNsb3NlKCkge1xuICAgICAgdGhpcy5yZWFzb25EaWFsb2cgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBoYW5kbGVTZWxlY3QoKSB7XG4gICAgICB3eFxuICAgICAgICAuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyflhajpg6gnLCAn5o+Q546wJywgJ+aUtuebiiddXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy50eXBlID0gcmVzLnRhcEluZGV4O1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlU3VjY2Vzc0luZm8ocm93KSB7XG4gICAgICB0aGlzLndhcm5Nb2RhbCA9IHRydWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgaGFuZGxlUmVhc29uKHJvdykge1xuICAgICAgdGhpcy5yZWFzb25EaWFsb2cgPSB0cnVlO1xuICAgICAgZ2V0RHJhd1JlbWFyayh7XG4gICAgICAgIHVzZXJEcmF3SWQ6IHJvdy5pZCxcbiAgICAgICAgc3RhdHVzOiByb3cud2l0aGRyYXdEZXBvc2l0U3RhdHVzXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucmVzb25UZXh0ID0gcmVzLnJlbWFyaztcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH07XG4gIC8vIOi1hOS6p+aYjue7hlxuICBnZXRBbnRpY2lwYXRlZCgpIHtcbiAgICBnZXRBY2NvdW50RGV0YWlsSW5mbyh7XG4gICAgICB0eXBlOiB0aGlzLnByb3BlcnR5VHlwZSxcbiAgICAgIGRhdGU6IHRoaXMuZGF0ZSxcbiAgICAgIHBhZ2VOdW06IHRoaXMucGFnZU51bSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5saXN0KSB7XG4gICAgICAgIHRoaXMuYW50aWNpcGF0ZWRMaXN0ID0gcmVzLmxpc3Q7XG4gICAgICAgIHRoaXMuYW50aWNpcGF0ZWRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udGltZSkge1xuICAgICAgICAgICAgaXRlbS50aW1lID0gbmV3IERhdGUoaXRlbS50aW1lKS50b1N0cmluZygneXl5eS1NTS1kZCBoaDpzczptbScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25IaWRlKCkge31cbiAgb25VbmxvYWQoKSB7fVxufVxuIl19