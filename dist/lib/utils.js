'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// import wepy from 'wepy'

/**
 * 获取，字样金额
 * @param {*} n 数字
 */
function formatNumber(n) {
  var b = parseInt(n).toString();
  var len = b.length;
  if (len <= 3) {
    return b;
  }
  var r = len % 3;
  return r > 0 ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') : b.slice(r, len).match(/\d{3}/g).join(',');
}

/**
 * 根据当前时间查询月份日期
 * @param {*} currentTime 当前时间
 * @param {*} months 获取几个月
 */
function getMonth() {
  var months = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var monthsArray = [];
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  for (var j = 0; j < months; j++) {
    var dateObj = {};
    var dateArray = [];
    if (month > 12) {
      month -= 12;
      year += 1;
    }
    dateObj.year = year;
    dateObj.month = month;
    var count = new Date(year, month, 0).getDate();
    for (var i = 1; i <= count; i++) {
      var obj = { value: i };
      dateArray.push(obj);
    }
    month += 1;
    dateObj.dateArray = dateArray;
    monthsArray.push(dateObj);
  }
  console.log(monthsArray);
  return monthsArray;
}

/**
 * 获取UUID
 * @param {*} len 长度
 * @param {*} radix 基数
 */
function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  var i = 0;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r = void 0;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}

/**
 * 计算时间戳之间的差值
 * @param startTimeStamp 开始时间戳
 * @param endTimeStamp 结束时间戳
 */
function calculateDiffTime(startTimeStamp, endTimeStamp) {
  var startTime = 0;
  var endTime = 0;
  if (startTimeStamp < endTimeStamp) {
    startTime = startTimeStamp / 1000;
    endTime = endTimeStamp / 1000;
  } else {
    startTime = endTimeStamp / 1000;
    endTime = startTimeStamp / 1000;
  }
  var timeDiff = endTime - startTime;
  // var year = Math.floor(timeDiff / 86400 / 365)
  // timeDiff = timeDiff % (86400 * 365)
  // var month = Math.floor(timeDiff / 86400 / 30)
  // timeDiff = timeDiff % (86400 * 30)
  // var day = Math.floor(timeDiff / 86400)
  // timeDiff = timeDiff % 86400
  var hour = Math.floor(timeDiff / 3600);
  timeDiff = timeDiff % 3600;
  var minute = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;
  var second = Math.floor(timeDiff);
  return [hour < 10 ? '0' + hour : hour, minute < 10 ? '0' + minute : minute, second < 10 ? '0' + second : second];
}

/**
 * 深拷贝
 * @param {*} obj1 
 * @param {*} obj2 
 */
function deepCopy(obj1, obj2) {
  var obj = obj2 || {};
  for (var item in obj1) {
    if (_typeof(obj1[item]) === 'object') {
      obj[item] = obj1[item].constructor === Array ? [] : {};
      deepCopy(obj1[item], obj[item]);
    } else {
      obj[item] = obj1[item];
    }
  }
  return obj;
}

exports.formatNumber = formatNumber;
exports.uuid = uuid;
exports.calculateDiffTime = calculateDiffTime;
exports.deepCopy = deepCopy;
exports.getMonth = getMonth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImZvcm1hdE51bWJlciIsIm4iLCJiIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImxlbiIsImxlbmd0aCIsInIiLCJzbGljZSIsIm1hdGNoIiwiam9pbiIsImdldE1vbnRoIiwibW9udGhzIiwibW9udGhzQXJyYXkiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiaiIsImRhdGVPYmoiLCJkYXRlQXJyYXkiLCJjb3VudCIsImdldERhdGUiLCJpIiwib2JqIiwidmFsdWUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInV1aWQiLCJyYWRpeCIsImNoYXJzIiwic3BsaXQiLCJNYXRoIiwicmFuZG9tIiwiY2FsY3VsYXRlRGlmZlRpbWUiLCJzdGFydFRpbWVTdGFtcCIsImVuZFRpbWVTdGFtcCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0aW1lRGlmZiIsImhvdXIiLCJmbG9vciIsIm1pbnV0ZSIsInNlY29uZCIsImRlZXBDb3B5Iiwib2JqMSIsIm9iajIiLCJpdGVtIiwiY29uc3RydWN0b3IiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUlBLFNBQVNBLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCLE1BQUlDLElBQUlDLFNBQVNGLENBQVQsRUFBWUcsUUFBWixFQUFSO0FBQ0EsTUFBSUMsTUFBTUgsRUFBRUksTUFBWjtBQUNBLE1BQUlELE9BQU8sQ0FBWCxFQUFjO0FBQ1osV0FBT0gsQ0FBUDtBQUNEO0FBQ0QsTUFBSUssSUFBSUYsTUFBTSxDQUFkO0FBQ0EsU0FBT0UsSUFBSSxDQUFKLEdBQVFMLEVBQUVNLEtBQUYsQ0FBUSxDQUFSLEVBQVdELENBQVgsSUFBZ0IsR0FBaEIsR0FBc0JMLEVBQUVNLEtBQUYsQ0FBUUQsQ0FBUixFQUFXRixHQUFYLEVBQWdCSSxLQUFoQixDQUFzQixRQUF0QixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBOUIsR0FBMEVSLEVBQUVNLEtBQUYsQ0FBUUQsQ0FBUixFQUFXRixHQUFYLEVBQWdCSSxLQUFoQixDQUFzQixRQUF0QixFQUFnQ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBakY7QUFDRDs7QUFFRDs7Ozs7QUFLQSxTQUFTQyxRQUFULEdBQThCO0FBQUEsTUFBWkMsTUFBWSx1RUFBSCxDQUFHOztBQUM1QixNQUFJQyxjQUFjLEVBQWxCO0FBQ0EsTUFBSUMsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQSxNQUFJQyxPQUFPRixLQUFLRyxXQUFMLEVBQVg7QUFDQSxNQUFJQyxRQUFRSixLQUFLSCxRQUFMLEtBQWtCLENBQTlCO0FBQ0EsT0FBSyxJQUFJUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLE1BQXBCLEVBQTRCTyxHQUE1QixFQUFpQztBQUMvQixRQUFJQyxVQUFVLEVBQWQ7QUFDQSxRQUFJQyxZQUFZLEVBQWhCO0FBQ0EsUUFBSUgsUUFBUSxFQUFaLEVBQWdCO0FBQ2RBLGVBQVMsRUFBVDtBQUNBRixjQUFRLENBQVI7QUFDRDtBQUNESSxZQUFRSixJQUFSLEdBQWVBLElBQWY7QUFDQUksWUFBUUYsS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxRQUFJSSxRQUFRLElBQUlQLElBQUosQ0FBU0MsSUFBVCxFQUFlRSxLQUFmLEVBQXNCLENBQXRCLEVBQXlCSyxPQUF6QixFQUFaO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLEtBQUtGLEtBQXJCLEVBQTRCRSxHQUE1QixFQUFpQztBQUMvQixVQUFJQyxNQUFNLEVBQUNDLE9BQU1GLENBQVAsRUFBVjtBQUNBSCxnQkFBVU0sSUFBVixDQUFlRixHQUFmO0FBQ0Q7QUFDRFAsYUFBUyxDQUFUO0FBQ0FFLFlBQVFDLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FSLGdCQUFZYyxJQUFaLENBQWlCUCxPQUFqQjtBQUNEO0FBQ0RRLFVBQVFDLEdBQVIsQ0FBWWhCLFdBQVo7QUFDQSxTQUFPQSxXQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU2lCLElBQVQsQ0FBY3pCLEdBQWQsRUFBbUIwQixLQUFuQixFQUEwQjtBQUN4QixNQUFJQyxRQUFRLGlFQUFpRUMsS0FBakUsQ0FBdUUsRUFBdkUsQ0FBWjtBQUNBLE1BQUlILE9BQU8sRUFBWDtBQUNBLE1BQUlOLElBQUksQ0FBUjtBQUNBTyxVQUFRQSxTQUFTQyxNQUFNMUIsTUFBdkI7O0FBRUEsTUFBSUQsR0FBSixFQUFTO0FBQ1AsU0FBS21CLElBQUksQ0FBVCxFQUFZQSxJQUFJbkIsR0FBaEIsRUFBcUJtQixHQUFyQjtBQUEwQk0sV0FBS04sQ0FBTCxJQUFVUSxNQUFNLElBQUlFLEtBQUtDLE1BQUwsS0FBZ0JKLEtBQTFCLENBQVY7QUFBMUI7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJeEIsVUFBSjtBQUNBdUIsU0FBSyxDQUFMLElBQVVBLEtBQUssRUFBTCxJQUFXQSxLQUFLLEVBQUwsSUFBV0EsS0FBSyxFQUFMLElBQVcsR0FBM0M7QUFDQUEsU0FBSyxFQUFMLElBQVcsR0FBWDtBQUNBLFNBQUtOLElBQUksQ0FBVCxFQUFZQSxJQUFJLEVBQWhCLEVBQW9CQSxHQUFwQixFQUF5QjtBQUN2QixVQUFJLENBQUNNLEtBQUtOLENBQUwsQ0FBTCxFQUFjO0FBQ1pqQixZQUFJLElBQUkyQixLQUFLQyxNQUFMLEtBQWdCLEVBQXhCO0FBQ0FMLGFBQUtOLENBQUwsSUFBVVEsTUFBT1IsTUFBTSxFQUFQLEdBQWNqQixJQUFJLEdBQUwsR0FBWSxHQUF6QixHQUErQkEsQ0FBckMsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU91QixLQUFLcEIsSUFBTCxDQUFVLEVBQVYsQ0FBUDtBQUNEOztBQUVEOzs7OztBQUtBLFNBQVMwQixpQkFBVCxDQUEyQkMsY0FBM0IsRUFBMkNDLFlBQTNDLEVBQXlEO0FBQ3ZELE1BQUlDLFlBQVksQ0FBaEI7QUFDQSxNQUFJQyxVQUFVLENBQWQ7QUFDQSxNQUFJSCxpQkFBaUJDLFlBQXJCLEVBQW1DO0FBQ2pDQyxnQkFBWUYsaUJBQWlCLElBQTdCO0FBQ0FHLGNBQVVGLGVBQWUsSUFBekI7QUFDRCxHQUhELE1BR087QUFDTEMsZ0JBQVlELGVBQWUsSUFBM0I7QUFDQUUsY0FBVUgsaUJBQWlCLElBQTNCO0FBQ0Q7QUFDRCxNQUFJSSxXQUFXRCxVQUFVRCxTQUF6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUlHLE9BQU9SLEtBQUtTLEtBQUwsQ0FBV0YsV0FBVyxJQUF0QixDQUFYO0FBQ0FBLGFBQVdBLFdBQVcsSUFBdEI7QUFDQSxNQUFJRyxTQUFTVixLQUFLUyxLQUFMLENBQVdGLFdBQVcsRUFBdEIsQ0FBYjtBQUNBQSxhQUFXQSxXQUFXLEVBQXRCO0FBQ0EsTUFBSUksU0FBU1gsS0FBS1MsS0FBTCxDQUFXRixRQUFYLENBQWI7QUFDQSxTQUFPLENBQUNDLE9BQU8sRUFBUCxHQUFZLE1BQU1BLElBQWxCLEdBQXlCQSxJQUExQixFQUFnQ0UsU0FBUyxFQUFULEdBQWMsTUFBTUEsTUFBcEIsR0FBNkJBLE1BQTdELEVBQXFFQyxTQUFTLEVBQVQsR0FBYyxNQUFNQSxNQUFwQixHQUE2QkEsTUFBbEcsQ0FBUDtBQUNEOztBQUVEOzs7OztBQUtBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUM1QixNQUFJdkIsTUFBTXVCLFFBQVEsRUFBbEI7QUFDQSxPQUFLLElBQUlDLElBQVQsSUFBaUJGLElBQWpCLEVBQXVCO0FBQ3JCLFFBQUksUUFBT0EsS0FBS0UsSUFBTCxDQUFQLE1BQXNCLFFBQTFCLEVBQW9DO0FBQ2xDeEIsVUFBSXdCLElBQUosSUFBWUYsS0FBS0UsSUFBTCxFQUFXQyxXQUFYLEtBQTJCQyxLQUEzQixHQUFtQyxFQUFuQyxHQUF3QyxFQUFwRDtBQUNBTCxlQUFTQyxLQUFLRSxJQUFMLENBQVQsRUFBcUJ4QixJQUFJd0IsSUFBSixDQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMeEIsVUFBSXdCLElBQUosSUFBWUYsS0FBS0UsSUFBTCxDQUFaO0FBQ0Q7QUFDRjtBQUNELFNBQU94QixHQUFQO0FBQ0Q7O1FBR0N6QixZLEdBQUFBLFk7UUFDQThCLEksR0FBQUEsSTtRQUNBTSxpQixHQUFBQSxpQjtRQUNBVSxRLEdBQUFBLFE7UUFDQW5DLFEsR0FBQUEsUSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbi8qKlxuICog6I635Y+W77yM5a2X5qC36YeR6aKdXG4gKiBAcGFyYW0geyp9IG4g5pWw5a2XXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuKSB7XG4gIHZhciBiID0gcGFyc2VJbnQobikudG9TdHJpbmcoKVxuICB2YXIgbGVuID0gYi5sZW5ndGhcbiAgaWYgKGxlbiA8PSAzKSB7XG4gICAgcmV0dXJuIGJcbiAgfVxuICB2YXIgciA9IGxlbiAlIDNcbiAgcmV0dXJuIHIgPiAwID8gYi5zbGljZSgwLCByKSArICcsJyArIGIuc2xpY2UociwgbGVuKS5tYXRjaCgvXFxkezN9L2cpLmpvaW4oJywnKSA6IGIuc2xpY2UociwgbGVuKS5tYXRjaCgvXFxkezN9L2cpLmpvaW4oJywnKVxufVxuXG4vKipcbiAqIOagueaNruW9k+WJjeaXtumXtOafpeivouaciOS7veaXpeacn1xuICogQHBhcmFtIHsqfSBjdXJyZW50VGltZSDlvZPliY3ml7bpl7RcbiAqIEBwYXJhbSB7Kn0gbW9udGhzIOiOt+WPluWHoOS4quaciFxuICovXG5mdW5jdGlvbiBnZXRNb250aChtb250aHMgPSAxKSB7XG4gIGxldCBtb250aHNBcnJheSA9IFtdXG4gIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGZvciAobGV0IGogPSAwOyBqIDwgbW9udGhzOyBqKyspIHtcbiAgICBsZXQgZGF0ZU9iaiA9IHt9XG4gICAgbGV0IGRhdGVBcnJheSA9IFtdXG4gICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgIG1vbnRoIC09IDEyXG4gICAgICB5ZWFyICs9IDFcbiAgICB9XG4gICAgZGF0ZU9iai55ZWFyID0geWVhclxuICAgIGRhdGVPYmoubW9udGggPSBtb250aFxuICAgIGxldCBjb3VudCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKClcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgb2JqID0ge3ZhbHVlOml9XG4gICAgICBkYXRlQXJyYXkucHVzaChvYmopXG4gICAgfVxuICAgIG1vbnRoICs9IDFcbiAgICBkYXRlT2JqLmRhdGVBcnJheSA9IGRhdGVBcnJheVxuICAgIG1vbnRoc0FycmF5LnB1c2goZGF0ZU9iailcbiAgfVxuICBjb25zb2xlLmxvZyhtb250aHNBcnJheSlcbiAgcmV0dXJuIG1vbnRoc0FycmF5XG59XG5cbi8qKlxuICog6I635Y+WVVVJRFxuICogQHBhcmFtIHsqfSBsZW4g6ZW/5bqmXG4gKiBAcGFyYW0geyp9IHJhZGl4IOWfuuaVsFxuICovXG5mdW5jdGlvbiB1dWlkKGxlbiwgcmFkaXgpIHtcbiAgbGV0IGNoYXJzID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jy5zcGxpdCgnJylcbiAgbGV0IHV1aWQgPSBbXVxuICBsZXQgaSA9IDBcbiAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGhcblxuICBpZiAobGVuKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB1dWlkW2ldID0gY2hhcnNbMCB8IE1hdGgucmFuZG9tKCkgKiByYWRpeF1cbiAgfSBlbHNlIHtcbiAgICBsZXQgclxuICAgIHV1aWRbOF0gPSB1dWlkWzEzXSA9IHV1aWRbMThdID0gdXVpZFsyM10gPSAnLSdcbiAgICB1dWlkWzE0XSA9ICc0J1xuICAgIGZvciAoaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICBpZiAoIXV1aWRbaV0pIHtcbiAgICAgICAgciA9IDAgfCBNYXRoLnJhbmRvbSgpICogMTZcbiAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09PSAxOSkgPyAociAmIDB4MykgfCAweDggOiByXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdXVpZC5qb2luKCcnKVxufVxuXG4vKipcbiAqIOiuoeeul+aXtumXtOaIs+S5i+mXtOeahOW3ruWAvFxuICogQHBhcmFtIHN0YXJ0VGltZVN0YW1wIOW8gOWni+aXtumXtOaIs1xuICogQHBhcmFtIGVuZFRpbWVTdGFtcCDnu5PmnZ/ml7bpl7TmiLNcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlRGlmZlRpbWUoc3RhcnRUaW1lU3RhbXAsIGVuZFRpbWVTdGFtcCkge1xuICBsZXQgc3RhcnRUaW1lID0gMFxuICBsZXQgZW5kVGltZSA9IDBcbiAgaWYgKHN0YXJ0VGltZVN0YW1wIDwgZW5kVGltZVN0YW1wKSB7XG4gICAgc3RhcnRUaW1lID0gc3RhcnRUaW1lU3RhbXAgLyAxMDAwXG4gICAgZW5kVGltZSA9IGVuZFRpbWVTdGFtcCAvIDEwMDBcbiAgfSBlbHNlIHtcbiAgICBzdGFydFRpbWUgPSBlbmRUaW1lU3RhbXAgLyAxMDAwXG4gICAgZW5kVGltZSA9IHN0YXJ0VGltZVN0YW1wIC8gMTAwMFxuICB9XG4gIHZhciB0aW1lRGlmZiA9IGVuZFRpbWUgLSBzdGFydFRpbWVcbiAgLy8gdmFyIHllYXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzNjUpXG4gIC8vIHRpbWVEaWZmID0gdGltZURpZmYgJSAoODY0MDAgKiAzNjUpXG4gIC8vIHZhciBtb250aCA9IE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCAvIDMwKVxuICAvLyB0aW1lRGlmZiA9IHRpbWVEaWZmICUgKDg2NDAwICogMzApXG4gIC8vIHZhciBkYXkgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDApXG4gIC8vIHRpbWVEaWZmID0gdGltZURpZmYgJSA4NjQwMFxuICB2YXIgaG91ciA9IE1hdGguZmxvb3IodGltZURpZmYgLyAzNjAwKVxuICB0aW1lRGlmZiA9IHRpbWVEaWZmICUgMzYwMFxuICB2YXIgbWludXRlID0gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDYwKVxuICB0aW1lRGlmZiA9IHRpbWVEaWZmICUgNjBcbiAgdmFyIHNlY29uZCA9IE1hdGguZmxvb3IodGltZURpZmYpXG4gIHJldHVybiBbaG91ciA8IDEwID8gJzAnICsgaG91ciA6IGhvdXIsIG1pbnV0ZSA8IDEwID8gJzAnICsgbWludXRlIDogbWludXRlLCBzZWNvbmQgPCAxMCA/ICcwJyArIHNlY29uZCA6IHNlY29uZF1cbn1cblxuLyoqXG4gKiDmt7Hmi7fotJ1cbiAqIEBwYXJhbSB7Kn0gb2JqMSBcbiAqIEBwYXJhbSB7Kn0gb2JqMiBcbiAqL1xuZnVuY3Rpb24gZGVlcENvcHkob2JqMSwgb2JqMikge1xuICBsZXQgb2JqID0gb2JqMiB8fCB7fVxuICBmb3IgKGxldCBpdGVtIGluIG9iajEpIHtcbiAgICBpZiAodHlwZW9mIG9iajFbaXRlbV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBvYmpbaXRlbV0gPSBvYmoxW2l0ZW1dLmNvbnN0cnVjdG9yID09PSBBcnJheSA/IFtdIDoge31cbiAgICAgIGRlZXBDb3B5KG9iajFbaXRlbV0sIG9ialtpdGVtXSlcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2l0ZW1dID0gb2JqMVtpdGVtXVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCB7XG4gIGZvcm1hdE51bWJlcixcbiAgdXVpZCxcbiAgY2FsY3VsYXRlRGlmZlRpbWUsXG4gIGRlZXBDb3B5LFxuICBnZXRNb250aFxufVxuIl19