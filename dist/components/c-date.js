'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxSystem = require('./../lib/wx-system.js');

var _utils = require('./../lib/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var date = function (_wepy$component) {
  _inherits(date, _wepy$component);

  function date() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, date);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = date.__proto__ || Object.getPrototypeOf(date)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      dateArray: [],
      checkedArray: [],
      tempIndex: []
    }, _this.watch = {}, _this.props = {
      value: {
        type: Array,
        default: [],
        twoWay: true
      },
      months: {
        type: String,
        default: '2'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }, _this.computed = {
      getWeeks: function getWeeks(year, month) {
        var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        return new Date(year, month - 1, day).getDay();
      },
      getDays: function getDays() {
        var days = 0;
        if (this.tempIndex.length === 2) {
          this.dateArray.forEach(function (item, index) {
            item.dateArray.forEach(function (_item, _index) {
              if (_item.firstChecked || _item.secondChecked || _item.midChecked) {
                days++;
              }
            });
          });
        }
        return days;
      }
    }, _this.methods = {
      preventTouchMove: function preventTouchMove() {
        console.warn('preventTouchMove方法已阻止其他事件。');
      },
      tapDate: function tapDate(index1, index2) {
        var _this2 = this;

        // 首选
        var temp = this.dateArray[index1].dateArray[index2];
        this.dateArray.forEach(function (item, index) {
          item.dateArray.forEach(function (_item, _index) {
            if (_this2.checkedArray.length === 0) {
              if (index1 === index && index2 === _index) {
                temp.firstChecked = true;
                _this2.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                _this2.tempIndex[0] = {
                  index: index,
                  _index: _index
                };
                console.log(_this2.checkedArray[0]);
              }
              _this2.clearItem();
            } else if (_this2.checkedArray.length === 1) {
              var currentStamp = new Date(item.year, item.month - 1, _item.value).valueOf();
              var first = new Date(_this2.checkedArray[0]).valueOf();
              if (index1 === index && index2 === _index && !temp.firstChecked && currentStamp > first) {
                temp.secondChecked = true;
                _this2.checkedArray[1] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                _this2.tempIndex[1] = {
                  index: index,
                  _index: _index
                };
              } else if (index1 === index && index2 === _index && !temp.firstChecked && currentStamp < first) {
                _item.firstChecked = true;
                _this2.checkedArray.unshift(new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd'));
                _this2.tempIndex.unshift({
                  index: index,
                  _index: _index
                });
                _this2.dateArray[_this2.tempIndex[1].index].dateArray[_this2.tempIndex[1]._index].firstChecked = false;
                _this2.dateArray[_this2.tempIndex[1].index].dateArray[_this2.tempIndex[1]._index].secondChecked = true;
              }
              _this2.clearItem();
            } else if (_this2.checkedArray.length === 2) {
              if (index1 === index && index2 === _index && !temp.firstChecked && !temp.secondChecked) {
                var _currentStamp = new Date(item.year, item.month - 1, _item.value).valueOf();
                var _first = new Date(_this2.checkedArray[0]).valueOf();
                var second = new Date(_this2.checkedArray[1]).valueOf();
                // 选择日期小于当前入住时间
                if (_currentStamp < _first) {
                  // 存储日期
                  _this2.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                  // 更改入住时间
                  _this2.dateArray[_this2.tempIndex[0].index].dateArray[_this2.tempIndex[0]._index].firstChecked = false;
                  temp.firstChecked = true;
                  // 更改下标
                  _this2.tempIndex[0] = {
                    index: index,
                    _index: _index
                  };
                } else if (_currentStamp > second) {
                  // 选择日期大于离店时间
                  _this2.checkedArray[1] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                  _this2.dateArray[_this2.tempIndex[1].index].dateArray[_this2.tempIndex[1]._index].secondChecked = false;
                  temp.secondChecked = true;
                  _this2.tempIndex[1] = {
                    index: index,
                    _index: _index
                  };
                } else if (_first < _currentStamp && _currentStamp < second) {
                  // 选择日期在区间之内
                  temp.firstChecked = true;
                  _this2.dateArray[_this2.tempIndex[0].index].dateArray[_this2.tempIndex[0]._index].firstChecked = false;
                  _this2.dateArray[_this2.tempIndex[1].index].dateArray[_this2.tempIndex[1]._index].secondChecked = false;
                  _this2.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                  _this2.tempIndex[0] = {
                    index: index,
                    _index: _index
                  };
                  _this2.checkedArray.splice(1, 1);
                  _this2.tempIndex.splice(1, 1);
                }
              } else if (index1 === index && index2 === _index && temp.secondChecked) {
                _this2.dateArray[_this2.tempIndex[0].index].dateArray[_this2.tempIndex[0]._index].firstChecked = false;
                temp.firstChecked = true;
                temp.secondChecked = false;
                _this2.checkedArray.splice(0, 1);
                _this2.tempIndex.splice(0, 1);
              }
            }
            _this2.clearItem();
          });
        });
        this.getCheckedItem();
        this.$emit('changeValue');
      }
    }, _this.events = {
      changeValue: function changeValue() {
        this.value = this.checkedArray;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(date, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      // 当前时间戳
      var currentTimeStamp = new Date(new Date().toString('yyyy/MM/dd')).valueOf();
      // 获取模块日期列表
      this.dateArray = (0, _utils.getMonth)(this.months);
      // 获取当前时间周几
      var currentWeek = new Date().getDay();
      // 设置本周日为最小的时间戳（根据日历的模块定义，当前日期一行的第一个为周日）
      var smallTimeStamp = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * currentWeek).valueOf();
      this.dateArray.forEach(function (item) {
        item.week = _this3.computed.getWeeks(item.year, item.month);
        item.startStyle = 'grid-column-start:' + (item.week + 1);
        item.dateArray.forEach(function (_item) {
          _item.week = _this3.computed.getWeeks(item.year, item.month, _item.value);
          var timeStamp = new Date(item.year, item.month - 1, _item.value).valueOf();
          if (timeStamp === currentTimeStamp) {
            _item.dateLabel = '今天';
          } else if (timeStamp === currentTimeStamp + 24 * 60 * 60 * 1000 * 1) {
            _item.dateLabel = '明天';
          } else if (timeStamp === currentTimeStamp + 24 * 60 * 60 * 1000 * 2) {
            _item.dateLabel = '后天';
          }
          _item.show = true;
          // 禁用本日之前日期
          if (!_this3.disabled) {
            if (timeStamp < currentTimeStamp) {
              _item.disabled = true;
            } else {
              _item.disabled = false;
            }
          } else {
            if (timeStamp < smallTimeStamp) {
              _item.show = false;
            } else {
              _item.show = true;
              // 禁用本日之前日期
              if (timeStamp < currentTimeStamp) {
                _item.disabled = true;
              } else {
                _item.disabled = false;
              }
            }
          }
        });
      });
      this.getIndex();
      this.tapDate(this.tempIndex[0].index, this.tempIndex[0]._index);
      this.tapDate(this.tempIndex[1].index, this.tempIndex[1]._index);
      this.$apply();
    }
  }, {
    key: 'tapDate',
    value: function tapDate(index1, index2) {
      var _this4 = this;

      // 首选
      var temp = this.dateArray[index1].dateArray[index2];
      this.dateArray.forEach(function (item, index) {
        item.dateArray.forEach(function (_item, _index) {
          if (_this4.checkedArray.length === 0) {
            if (index1 === index && index2 === _index) {
              temp.firstChecked = true;
              _this4.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
              _this4.tempIndex[0] = {
                index: index,
                _index: _index
              };
            }
            _this4.clearItem();
          } else if (_this4.checkedArray.length === 1) {
            var currentStamp = new Date(item.year, item.month - 1, _item.value).valueOf();
            var first = new Date(_this4.checkedArray[0]).valueOf();
            if (index1 === index && index2 === _index && !temp.firstChecked && currentStamp > first) {
              temp.secondChecked = true;
              _this4.checkedArray[1] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
              _this4.tempIndex[1] = {
                index: index,
                _index: _index
              };
            } else if (index1 === index && index2 === _index && !temp.firstChecked && currentStamp < first) {
              _item.firstChecked = true;
              _this4.checkedArray.unshift(new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd'));
              _this4.tempIndex.unshift({
                index: index,
                _index: _index
              });
              _this4.dateArray[_this4.tempIndex[1].index].dateArray[_this4.tempIndex[1]._index].firstChecked = false;
              _this4.dateArray[_this4.tempIndex[1].index].dateArray[_this4.tempIndex[1]._index].secondChecked = true;
            }
            _this4.clearItem();
          } else if (_this4.checkedArray.length === 2) {
            if (index1 === index && index2 === _index && !temp.firstChecked && !temp.secondChecked) {
              var _currentStamp2 = new Date(item.year, item.month - 1, _item.value).valueOf();
              var _first2 = new Date(_this4.checkedArray[0]).valueOf();
              var second = new Date(_this4.checkedArray[1]).valueOf();
              // 选择日期小于当前入住时间
              if (_currentStamp2 < _first2) {
                // 存储日期
                _this4.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                // 更改入住时间
                _this4.dateArray[_this4.tempIndex[0].index].dateArray[_this4.tempIndex[0]._index].firstChecked = false;
                temp.firstChecked = true;
                // 更改下标
                _this4.tempIndex[0] = {
                  index: index,
                  _index: _index
                };
              } else if (_currentStamp2 > second) {
                // 选择日期大于离店时间
                _this4.checkedArray[1] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                _this4.dateArray[_this4.tempIndex[1].index].dateArray[_this4.tempIndex[1]._index].secondChecked = false;
                temp.secondChecked = true;
                _this4.tempIndex[1] = {
                  index: index,
                  _index: _index
                };
              } else if (_first2 < _currentStamp2 && _currentStamp2 < second) {
                // 选择日期在区间之内
                temp.firstChecked = true;
                _this4.dateArray[_this4.tempIndex[0].index].dateArray[_this4.tempIndex[0]._index].firstChecked = false;
                _this4.dateArray[_this4.tempIndex[1].index].dateArray[_this4.tempIndex[1]._index].secondChecked = false;
                _this4.checkedArray[0] = new Date(item.year, item.month - 1, _item.value).toString('yyyy/MM/dd');
                _this4.tempIndex[0] = {
                  index: index,
                  _index: _index
                };
                _this4.checkedArray.splice(1, 1);
                _this4.tempIndex.splice(1, 1);
              }
            } else if (index1 === index && index2 === _index && temp.secondChecked) {
              _this4.dateArray[_this4.tempIndex[0].index].dateArray[_this4.tempIndex[0]._index].firstChecked = false;
              temp.firstChecked = true;
              temp.secondChecked = false;
              _this4.checkedArray.splice(0, 1);
              _this4.tempIndex.splice(0, 1);
            }
          }
          _this4.clearItem();
        });
      });
      this.getCheckedItem();
    }
  }, {
    key: 'getCheckedItem',
    value: function getCheckedItem() {
      if (this.checkedArray.length === 2) {
        var first = new Date(this.checkedArray[0]).valueOf();
        var second = new Date(this.checkedArray[1]).valueOf();
        this.dateArray.forEach(function (item) {
          item.dateArray.forEach(function (_item) {
            var currentStamp = new Date(item.year, item.month - 1, _item.value).valueOf();
            if (first < currentStamp && currentStamp < second) {
              _item.midChecked = true;
            }
          });
        });
      }
    }
  }, {
    key: 'clearItem',
    value: function clearItem() {
      this.dateArray.forEach(function (item) {
        item.dateArray.forEach(function (_item) {
          _item.midChecked = false;
        });
      });
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      var _this5 = this;

      if (this.value.length > 0) {
        var firstDate = new Date(this.value[0]);
        var fyear = firstDate.getFullYear();
        var fmonth = firstDate.getMonth() + 1;
        var fdate = firstDate.getDate();
        var endDate = new Date(this.value[1]);
        var eyear = endDate.getFullYear();
        var emonth = endDate.getMonth() + 1;
        var edate = endDate.getDate();
        this.dateArray.forEach(function (item, index) {
          item.dateArray.forEach(function (_item, _index) {
            if (fyear === item.year && fmonth === item.month && fdate === _item.value) {
              _this5.tempIndex[0] = { index: index, _index: _index };
            }
            if (eyear === item.year && emonth === item.month && edate === _item.value) {
              _this5.tempIndex[1] = { index: index, _index: _index };
            }
          });
        });
      }
    }
  }]);

  return date;
}(_wepy2.default.component);

exports.default = date;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImMtZGF0ZS5qcyJdLCJuYW1lcyI6WyJkYXRlIiwiY29tcG9uZW50cyIsImRhdGEiLCJkYXRlQXJyYXkiLCJjaGVja2VkQXJyYXkiLCJ0ZW1wSW5kZXgiLCJ3YXRjaCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwidHdvV2F5IiwibW9udGhzIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiY29tcHV0ZWQiLCJnZXRXZWVrcyIsInllYXIiLCJtb250aCIsImRheSIsIkRhdGUiLCJnZXREYXkiLCJnZXREYXlzIiwiZGF5cyIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJfaXRlbSIsIl9pbmRleCIsImZpcnN0Q2hlY2tlZCIsInNlY29uZENoZWNrZWQiLCJtaWRDaGVja2VkIiwibWV0aG9kcyIsInByZXZlbnRUb3VjaE1vdmUiLCJjb25zb2xlIiwid2FybiIsInRhcERhdGUiLCJpbmRleDEiLCJpbmRleDIiLCJ0ZW1wIiwidG9TdHJpbmciLCJsb2ciLCJjbGVhckl0ZW0iLCJjdXJyZW50U3RhbXAiLCJ2YWx1ZU9mIiwiZmlyc3QiLCJ1bnNoaWZ0Iiwic2Vjb25kIiwic3BsaWNlIiwiZ2V0Q2hlY2tlZEl0ZW0iLCIkZW1pdCIsImV2ZW50cyIsImNoYW5nZVZhbHVlIiwiY3VycmVudFRpbWVTdGFtcCIsImN1cnJlbnRXZWVrIiwic21hbGxUaW1lU3RhbXAiLCJnZXRUaW1lIiwid2VlayIsInN0YXJ0U3R5bGUiLCJ0aW1lU3RhbXAiLCJkYXRlTGFiZWwiLCJzaG93IiwiZ2V0SW5kZXgiLCIkYXBwbHkiLCJmaXJzdERhdGUiLCJmeWVhciIsImdldEZ1bGxZZWFyIiwiZm1vbnRoIiwiZ2V0TW9udGgiLCJmZGF0ZSIsImdldERhdGUiLCJlbmREYXRlIiwiZXllYXIiLCJlbW9udGgiLCJlZGF0ZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7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LENBQWxDO0FBQ0EsWUFBSU0sUUFBVUgsUUFBUUQsT0FBUixFQUFkO0FBQ0EsYUFBS3RFLFNBQUwsQ0FBZXdCLE9BQWYsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3JDRCxlQUFLekIsU0FBTCxDQUFld0IsT0FBZixDQUF1QixVQUFDRyxLQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDdkMsZ0JBQUdxQyxVQUFReEMsS0FBS1QsSUFBYixJQUFxQm1ELFdBQVcxQyxLQUFLUixLQUFyQyxJQUE4Q29ELFVBQVMxQyxNQUFNdEIsS0FBaEUsRUFBc0U7QUFDckUscUJBQUtILFNBQUwsQ0FBZSxDQUFmLElBQWtCLEVBQUN3QixPQUFNQSxLQUFQLEVBQWFFLFFBQU9BLE1BQXBCLEVBQWxCO0FBQ0E7QUFDRCxnQkFBRzRDLFVBQVEvQyxLQUFLVCxJQUFiLElBQW9CeUQsV0FBV2hELEtBQUtSLEtBQXBDLElBQTZDeUQsVUFBUy9DLE1BQU10QixLQUEvRCxFQUFxRTtBQUNwRSxxQkFBS0gsU0FBTCxDQUFlLENBQWYsSUFBa0IsRUFBQ3dCLE9BQU1BLEtBQVAsRUFBYUUsUUFBT0EsTUFBcEIsRUFBbEI7QUFDQTtBQUNGLFdBUEQ7QUFRRCxTQVREO0FBVUQ7QUFDRjs7OztFQTFjK0IrQyxlQUFLQyxTOztrQkFBbEIvRSxJIiwiZmlsZSI6ImMtZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBnZXRTeXNXaWR0aCB9IGZyb20gJy4uL2xpYi93eC1zeXN0ZW0uanMnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0ZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgY29tcG9uZW50cyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGRhdGVBcnJheTogW10sXG4gICAgY2hlY2tlZEFycmF5OiBbXSxcbiAgICB0ZW1wSW5kZXg6IFtdXG4gIH07XG4gIHdhdGNoID0ge307XG4gIHByb3BzID0ge1xuICAgIHZhbHVlOntcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDpbXSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnMidcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH07XG4gIGNvbXB1dGVkID0ge1xuICAgIGdldFdlZWtzKHllYXIsIG1vbnRoLCBkYXkgPSAxKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpLmdldERheSgpO1xuICAgIH0sXG4gICAgZ2V0RGF5cygpIHtcbiAgICAgIGxldCBkYXlzID0gMDtcbiAgICAgIGlmICh0aGlzLnRlbXBJbmRleC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5kYXRlQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpdGVtLmRhdGVBcnJheS5mb3JFYWNoKChfaXRlbSwgX2luZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoX2l0ZW0uZmlyc3RDaGVja2VkIHx8IF9pdGVtLnNlY29uZENoZWNrZWQgfHwgX2l0ZW0ubWlkQ2hlY2tlZCkge1xuICAgICAgICAgICAgICBkYXlzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHByZXZlbnRUb3VjaE1vdmUoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3ByZXZlbnRUb3VjaE1vdmXmlrnms5Xlt7LpmLvmraLlhbbku5bkuovku7bjgIInKTtcbiAgICB9LFxuICAgIHRhcERhdGUoaW5kZXgxLCBpbmRleDIpIHtcbiAgICAgIC8vIOmmlumAiVxuICAgICAgbGV0IHRlbXAgPSB0aGlzLmRhdGVBcnJheVtpbmRleDFdLmRhdGVBcnJheVtpbmRleDJdO1xuICAgICAgdGhpcy5kYXRlQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5kYXRlQXJyYXkuZm9yRWFjaCgoX2l0ZW0sIF9pbmRleCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWRBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpbmRleDEgPT09IGluZGV4ICYmIGluZGV4MiA9PT0gX2luZGV4KSB7XG4gICAgICAgICAgICAgIHRlbXAuZmlyc3RDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXlbMF0gPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgKS50b1N0cmluZygneXl5eS9NTS9kZCcpO1xuICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFswXSA9IHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGVja2VkQXJyYXlbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhckl0ZW0oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tlZEFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGFtcCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICBfaXRlbS52YWx1ZVxuICAgICAgICAgICAgKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBuZXcgRGF0ZSh0aGlzLmNoZWNrZWRBcnJheVswXSkudmFsdWVPZigpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbmRleDEgPT09IGluZGV4ICYmXG4gICAgICAgICAgICAgIGluZGV4MiA9PT0gX2luZGV4ICYmXG4gICAgICAgICAgICAgICF0ZW1wLmZpcnN0Q2hlY2tlZCAmJlxuICAgICAgICAgICAgICBjdXJyZW50U3RhbXAgPiBmaXJzdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRlbXAuc2Vjb25kQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5WzFdID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgaXRlbS55ZWFyLFxuICAgICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICkudG9TdHJpbmcoJ3l5eXkvTU0vZGQnKTtcbiAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMV0gPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIF9pbmRleDogX2luZGV4XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICBpbmRleDEgPT09IGluZGV4ICYmXG4gICAgICAgICAgICAgIGluZGV4MiA9PT0gX2luZGV4ICYmXG4gICAgICAgICAgICAgICF0ZW1wLmZpcnN0Q2hlY2tlZCAmJlxuICAgICAgICAgICAgICBjdXJyZW50U3RhbXAgPCBmaXJzdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIF9pdGVtLmZpcnN0Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5LnVuc2hpZnQoXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoaXRlbS55ZWFyLCBpdGVtLm1vbnRoIC0gMSwgX2l0ZW0udmFsdWUpLnRvU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgJ3l5eXkvTU0vZGQnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleC51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUFycmF5W3RoaXMudGVtcEluZGV4WzFdLmluZGV4XS5kYXRlQXJyYXlbXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMV0uX2luZGV4XG4gICAgICAgICAgICAgIF0uZmlyc3RDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZGF0ZUFycmF5W3RoaXMudGVtcEluZGV4WzFdLmluZGV4XS5kYXRlQXJyYXlbXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMV0uX2luZGV4XG4gICAgICAgICAgICAgIF0uc2Vjb25kQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFySXRlbSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja2VkQXJyYXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGluZGV4MSA9PT0gaW5kZXggJiZcbiAgICAgICAgICAgICAgaW5kZXgyID09PSBfaW5kZXggJiZcbiAgICAgICAgICAgICAgIXRlbXAuZmlyc3RDaGVja2VkICYmXG4gICAgICAgICAgICAgICF0ZW1wLnNlY29uZENoZWNrZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YW1wID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgaXRlbS55ZWFyLFxuICAgICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICkudmFsdWVPZigpO1xuICAgICAgICAgICAgICBsZXQgZmlyc3QgPSBuZXcgRGF0ZSh0aGlzLmNoZWNrZWRBcnJheVswXSkudmFsdWVPZigpO1xuICAgICAgICAgICAgICBsZXQgc2Vjb25kID0gbmV3IERhdGUodGhpcy5jaGVja2VkQXJyYXlbMV0pLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgLy8g6YCJ5oup5pel5pyf5bCP5LqO5b2T5YmN5YWl5L2P5pe26Ze0XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhbXAgPCBmaXJzdCkge1xuICAgICAgICAgICAgICAgIC8vIOWtmOWCqOaXpeacn1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5WzBdID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgICBpdGVtLm1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygneXl5eS9NTS9kZCcpO1xuICAgICAgICAgICAgICAgIC8vIOabtOaUueWFpeS9j+aXtumXtFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFycmF5W3RoaXMudGVtcEluZGV4WzBdLmluZGV4XS5kYXRlQXJyYXlbXG4gICAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFswXS5faW5kZXhcbiAgICAgICAgICAgICAgICBdLmZpcnN0Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRlbXAuZmlyc3RDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyDmm7TmlLnkuIvmoIdcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFswXSA9IHtcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIF9pbmRleDogX2luZGV4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RhbXAgPiBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAvLyDpgInmi6nml6XmnJ/lpKfkuo7nprvlupfml7bpl7RcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRBcnJheVsxXSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgaXRlbS55ZWFyLFxuICAgICAgICAgICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgICAgICAgICBfaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoJ3l5eXkvTU0vZGQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJheVt0aGlzLnRlbXBJbmRleFsxXS5pbmRleF0uZGF0ZUFycmF5W1xuICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMV0uX2luZGV4XG4gICAgICAgICAgICAgICAgXS5zZWNvbmRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGVtcC5zZWNvbmRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXSA9IHtcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIF9pbmRleDogX2luZGV4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA8IGN1cnJlbnRTdGFtcCAmJiBjdXJyZW50U3RhbXAgPCBzZWNvbmQpIHtcbiAgICAgICAgICAgICAgICAvLyDpgInmi6nml6XmnJ/lnKjljLrpl7TkuYvlhoVcbiAgICAgICAgICAgICAgICB0ZW1wLmZpcnN0Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMF0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzBdLl9pbmRleFxuICAgICAgICAgICAgICAgIF0uZmlyc3RDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMV0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzFdLl9pbmRleFxuICAgICAgICAgICAgICAgIF0uc2Vjb25kQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5WzBdID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgICBpdGVtLm1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygneXl5eS9NTS9kZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzBdID0ge1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5LnNwbGljZSgxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleC5zcGxpY2UoMSwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIGluZGV4MSA9PT0gaW5kZXggJiZcbiAgICAgICAgICAgICAgaW5kZXgyID09PSBfaW5kZXggJiZcbiAgICAgICAgICAgICAgdGVtcC5zZWNvbmRDaGVja2VkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMF0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFswXS5faW5kZXhcbiAgICAgICAgICAgICAgXS5maXJzdENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGVtcC5maXJzdENoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0ZW1wLnNlY29uZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xlYXJJdGVtKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmdldENoZWNrZWRJdGVtKCk7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2VWYWx1ZScpXG4gICAgfVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgLy8g5b2T5YmN5pe26Ze05oizXG4gICAgbGV0IGN1cnJlbnRUaW1lU3RhbXAgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKCkudG9TdHJpbmcoJ3l5eXkvTU0vZGQnKVxuICAgICkudmFsdWVPZigpO1xuICAgIC8vIOiOt+WPluaooeWdl+aXpeacn+WIl+ihqFxuICAgIHRoaXMuZGF0ZUFycmF5ID0gZ2V0TW9udGgodGhpcy5tb250aHMpO1xuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtOWRqOWHoFxuICAgIGxldCBjdXJyZW50V2VlayA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XG4gICAgLy8g6K6+572u5pys5ZGo5pel5Li65pyA5bCP55qE5pe26Ze05oiz77yI5qC55o2u5pel5Y6G55qE5qih5Z2X5a6a5LmJ77yM5b2T5YmN5pel5pyf5LiA6KGM55qE56ys5LiA5Liq5Li65ZGo5pel77yJXG4gICAgbGV0IHNtYWxsVGltZVN0YW1wID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDI0ICogNjAgKiA2MCAqIDEwMDAgKiBjdXJyZW50V2Vla1xuICAgICkudmFsdWVPZigpO1xuICAgIHRoaXMuZGF0ZUFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLndlZWsgPSB0aGlzLmNvbXB1dGVkLmdldFdlZWtzKGl0ZW0ueWVhciwgaXRlbS5tb250aCk7XG4gICAgICBpdGVtLnN0YXJ0U3R5bGUgPSBgZ3JpZC1jb2x1bW4tc3RhcnQ6JHtpdGVtLndlZWsgKyAxfWA7XG4gICAgICBpdGVtLmRhdGVBcnJheS5mb3JFYWNoKF9pdGVtID0+IHtcbiAgICAgICAgX2l0ZW0ud2VlayA9IHRoaXMuY29tcHV0ZWQuZ2V0V2Vla3MoaXRlbS55ZWFyLCBpdGVtLm1vbnRoLCBfaXRlbS52YWx1ZSk7XG4gICAgICAgIGxldCB0aW1lU3RhbXAgPSBuZXcgRGF0ZShcbiAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgKS52YWx1ZU9mKCk7XG4gICAgICAgIGlmICh0aW1lU3RhbXAgPT09IGN1cnJlbnRUaW1lU3RhbXApIHtcbiAgICAgICAgICBfaXRlbS5kYXRlTGFiZWwgPSAn5LuK5aSpJztcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lU3RhbXAgPT09IGN1cnJlbnRUaW1lU3RhbXAgKyAyNCAqIDYwICogNjAgKiAxMDAwICogMSkge1xuICAgICAgICAgIF9pdGVtLmRhdGVMYWJlbCA9ICfmmI7lpKknO1xuICAgICAgICB9IGVsc2UgaWYgKHRpbWVTdGFtcCA9PT0gY3VycmVudFRpbWVTdGFtcCArIDI0ICogNjAgKiA2MCAqIDEwMDAgKiAyKSB7XG4gICAgICAgICAgX2l0ZW0uZGF0ZUxhYmVsID0gJ+WQjuWkqSc7XG4gICAgICAgIH1cbiAgICAgICAgX2l0ZW0uc2hvdyA9IHRydWU7XG4gICAgICAgIC8vIOemgeeUqOacrOaXpeS5i+WJjeaXpeacn1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBpZiAodGltZVN0YW1wIDwgY3VycmVudFRpbWVTdGFtcCkge1xuICAgICAgICAgICAgX2l0ZW0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaXRlbS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGltZVN0YW1wIDwgc21hbGxUaW1lU3RhbXApIHtcbiAgICAgICAgICAgIF9pdGVtLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2l0ZW0uc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAvLyDnpoHnlKjmnKzml6XkuYvliY3ml6XmnJ9cbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgPCBjdXJyZW50VGltZVN0YW1wKSB7XG4gICAgICAgICAgICAgIF9pdGVtLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9pdGVtLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmdldEluZGV4KClcbiAgICB0aGlzLnRhcERhdGUodGhpcy50ZW1wSW5kZXhbMF0uaW5kZXgsdGhpcy50ZW1wSW5kZXhbMF0uX2luZGV4KVxuICAgIHRoaXMudGFwRGF0ZSh0aGlzLnRlbXBJbmRleFsxXS5pbmRleCx0aGlzLnRlbXBJbmRleFsxXS5faW5kZXgpXG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuICB0YXBEYXRlKGluZGV4MSwgaW5kZXgyKSB7XG4gICAgICAvLyDpppbpgIlcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5kYXRlQXJyYXlbaW5kZXgxXS5kYXRlQXJyYXlbaW5kZXgyXTtcbiAgICAgIHRoaXMuZGF0ZUFycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uZGF0ZUFycmF5LmZvckVhY2goKF9pdGVtLCBfaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja2VkQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXgxID09PSBpbmRleCAmJiBpbmRleDIgPT09IF9pbmRleCkge1xuICAgICAgICAgICAgICB0ZW1wLmZpcnN0Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5WzBdID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgaXRlbS55ZWFyLFxuICAgICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICkudG9TdHJpbmcoJ3l5eXkvTU0vZGQnKTtcbiAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMF0gPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIF9pbmRleDogX2luZGV4XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFySXRlbSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja2VkQXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YW1wID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgIGl0ZW0ueWVhcixcbiAgICAgICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICApLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IG5ldyBEYXRlKHRoaXMuY2hlY2tlZEFycmF5WzBdKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGluZGV4MSA9PT0gaW5kZXggJiZcbiAgICAgICAgICAgICAgaW5kZXgyID09PSBfaW5kZXggJiZcbiAgICAgICAgICAgICAgIXRlbXAuZmlyc3RDaGVja2VkICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRTdGFtcCA+IGZpcnN0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGVtcC5zZWNvbmRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXlbMV0gPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgKS50b1N0cmluZygneXl5eS9NTS9kZCcpO1xuICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXSA9IHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIGluZGV4MSA9PT0gaW5kZXggJiZcbiAgICAgICAgICAgICAgaW5kZXgyID09PSBfaW5kZXggJiZcbiAgICAgICAgICAgICAgIXRlbXAuZmlyc3RDaGVja2VkICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRTdGFtcCA8IGZpcnN0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgX2l0ZW0uZmlyc3RDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXkudW5zaGlmdChcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShpdGVtLnllYXIsIGl0ZW0ubW9udGggLSAxLCBfaXRlbS52YWx1ZSkudG9TdHJpbmcoXG4gICAgICAgICAgICAgICAgICAneXl5eS9NTS9kZCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4LnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICBfaW5kZXg6IF9pbmRleFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMV0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXS5faW5kZXhcbiAgICAgICAgICAgICAgXS5maXJzdENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMV0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXS5faW5kZXhcbiAgICAgICAgICAgICAgXS5zZWNvbmRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXJJdGVtKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrZWRBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW5kZXgxID09PSBpbmRleCAmJlxuICAgICAgICAgICAgICBpbmRleDIgPT09IF9pbmRleCAmJlxuICAgICAgICAgICAgICAhdGVtcC5maXJzdENoZWNrZWQgJiZcbiAgICAgICAgICAgICAgIXRlbXAuc2Vjb25kQ2hlY2tlZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50U3RhbXAgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgaXRlbS5tb250aCAtIDEsXG4gICAgICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgIGxldCBmaXJzdCA9IG5ldyBEYXRlKHRoaXMuY2hlY2tlZEFycmF5WzBdKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgIGxldCBzZWNvbmQgPSBuZXcgRGF0ZSh0aGlzLmNoZWNrZWRBcnJheVsxXSkudmFsdWVPZigpO1xuICAgICAgICAgICAgICAvLyDpgInmi6nml6XmnJ/lsI/kuo7lvZPliY3lhaXkvY/ml7bpl7RcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGFtcCA8IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgLy8g5a2Y5YKo5pel5pyfXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXlbMF0gPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgIGl0ZW0ueWVhcixcbiAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCd5eXl5L01NL2RkJyk7XG4gICAgICAgICAgICAgICAgLy8g5pu05pS55YWl5L2P5pe26Ze0XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlQXJyYXlbdGhpcy50ZW1wSW5kZXhbMF0uaW5kZXhdLmRhdGVBcnJheVtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzBdLl9pbmRleFxuICAgICAgICAgICAgICAgIF0uZmlyc3RDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGVtcC5maXJzdENoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOabtOaUueS4i+agh1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzBdID0ge1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTdGFtcCA+IHNlY29uZCkge1xuICAgICAgICAgICAgICAgIC8vIOmAieaLqeaXpeacn+Wkp+S6juemu+W6l+aXtumXtFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEFycmF5WzFdID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICBpdGVtLnllYXIsXG4gICAgICAgICAgICAgICAgICBpdGVtLm1vbnRoIC0gMSxcbiAgICAgICAgICAgICAgICAgIF9pdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygneXl5eS9NTS9kZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUFycmF5W3RoaXMudGVtcEluZGV4WzFdLmluZGV4XS5kYXRlQXJyYXlbXG4gICAgICAgICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXS5faW5kZXhcbiAgICAgICAgICAgICAgICBdLnNlY29uZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0ZW1wLnNlY29uZENoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzFdID0ge1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgX2luZGV4OiBfaW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpcnN0IDwgY3VycmVudFN0YW1wICYmIGN1cnJlbnRTdGFtcCA8IHNlY29uZCkge1xuICAgICAgICAgICAgICAgIC8vIOmAieaLqeaXpeacn+WcqOWMuumXtOS5i+WGhVxuICAgICAgICAgICAgICAgIHRlbXAuZmlyc3RDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJheVt0aGlzLnRlbXBJbmRleFswXS5pbmRleF0uZGF0ZUFycmF5W1xuICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMF0uX2luZGV4XG4gICAgICAgICAgICAgICAgXS5maXJzdENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJheVt0aGlzLnRlbXBJbmRleFsxXS5pbmRleF0uZGF0ZUFycmF5W1xuICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMV0uX2luZGV4XG4gICAgICAgICAgICAgICAgXS5zZWNvbmRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXlbMF0gPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgIGl0ZW0ueWVhcixcbiAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCd5eXl5L01NL2RkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wSW5kZXhbMF0gPSB7XG4gICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBfaW5kZXg6IF9pbmRleFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkQXJyYXkuc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4LnNwbGljZSgxLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgaW5kZXgxID09PSBpbmRleCAmJlxuICAgICAgICAgICAgICBpbmRleDIgPT09IF9pbmRleCAmJlxuICAgICAgICAgICAgICB0ZW1wLnNlY29uZENoZWNrZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmRhdGVBcnJheVt0aGlzLnRlbXBJbmRleFswXS5pbmRleF0uZGF0ZUFycmF5W1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4WzBdLl9pbmRleFxuICAgICAgICAgICAgICBdLmZpcnN0Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0ZW1wLmZpcnN0Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRlbXAuc2Vjb25kQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgIHRoaXMudGVtcEluZGV4LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jbGVhckl0ZW0oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0Q2hlY2tlZEl0ZW0oKTtcbiAgICB9XG4gIGdldENoZWNrZWRJdGVtKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWRBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICAgIGxldCBmaXJzdCA9IG5ldyBEYXRlKHRoaXMuY2hlY2tlZEFycmF5WzBdKS52YWx1ZU9mKCk7XG4gICAgICBsZXQgc2Vjb25kID0gbmV3IERhdGUodGhpcy5jaGVja2VkQXJyYXlbMV0pLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMuZGF0ZUFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uZGF0ZUFycmF5LmZvckVhY2goX2l0ZW0gPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhbXAgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIGl0ZW0ueWVhcixcbiAgICAgICAgICAgIGl0ZW0ubW9udGggLSAxLFxuICAgICAgICAgICAgX2l0ZW0udmFsdWVcbiAgICAgICAgICApLnZhbHVlT2YoKTtcbiAgICAgICAgICBpZiAoZmlyc3QgPCBjdXJyZW50U3RhbXAgJiYgY3VycmVudFN0YW1wIDwgc2Vjb25kKSB7XG4gICAgICAgICAgICBfaXRlbS5taWRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNsZWFySXRlbSgpIHtcbiAgICB0aGlzLmRhdGVBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5kYXRlQXJyYXkuZm9yRWFjaChfaXRlbSA9PiB7XG4gICAgICAgIF9pdGVtLm1pZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGdldEluZGV4KCl7XG4gICAgaWYodGhpcy52YWx1ZS5sZW5ndGg+MCl7XG4gICAgICBsZXQgZmlyc3REYXRlID0gIG5ldyBEYXRlKHRoaXMudmFsdWVbMF0pXG4gICAgICBsZXQgZnllYXIgPSBmaXJzdERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgbGV0IGZtb250aCA9IGZpcnN0RGF0ZS5nZXRNb250aCgpICsgMVxuICAgICAgbGV0IGZkYXRlICA9ICBmaXJzdERhdGUuZ2V0RGF0ZSgpXG4gICAgICBsZXQgZW5kRGF0ZSA9ICBuZXcgRGF0ZSh0aGlzLnZhbHVlWzFdKVxuICAgICAgbGV0IGV5ZWFyID0gZW5kRGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICBsZXQgZW1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpICsgMVxuICAgICAgbGV0IGVkYXRlICA9ICBlbmREYXRlLmdldERhdGUoKVxuICAgICAgdGhpcy5kYXRlQXJyYXkuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmRhdGVBcnJheS5mb3JFYWNoKChfaXRlbSxfaW5kZXgpID0+IHtcbiAgICAgICAgICBpZihmeWVhcj09PWl0ZW0ueWVhciAmJiBmbW9udGggPT09IGl0ZW0ubW9udGggJiYgZmRhdGUgPT09X2l0ZW0udmFsdWUpe1xuICAgICAgICAgICB0aGlzLnRlbXBJbmRleFswXT17aW5kZXg6aW5kZXgsX2luZGV4Ol9pbmRleH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZXllYXI9PT1pdGVtLnllYXImJiBlbW9udGggPT09IGl0ZW0ubW9udGggJiYgZWRhdGUgPT09X2l0ZW0udmFsdWUpe1xuICAgICAgICAgICB0aGlzLnRlbXBJbmRleFsxXT17aW5kZXg6aW5kZXgsX2luZGV4Ol9pbmRleH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHtcbiAgICBjaGFuZ2VWYWx1ZSgpe1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZEFycmF5XG4gICAgfVxuICB9O1xufVxuIl19