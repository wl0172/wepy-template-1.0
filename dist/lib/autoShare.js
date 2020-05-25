'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ix = function () {
  function ix() {
    _classCallCheck(this, ix);
  }

  _createClass(ix, null, [{
    key: 'Page',
    value: function (_Page) {
      function Page(_x) {
        return _Page.apply(this, arguments);
      }

      Page.toString = function () {
        return _Page.toString();
      };

      return Page;
    }(function (page) {
      var pageOption = ['onShow', 'onLoad'];
      var pageOptionShare = ['onShow', 'onLoad', 'onShareAppMessage'];
      // if () {

      // }
      pageOptionShare.forEach(function (f) {
        var raw = page[f];
        page[f] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (raw instanceof Function) {
            var cur = getCurrentPages().slice(-1)[0];
            raw.call.apply(raw, [cur].concat(args));
          }
        };
      });
      return Page(page);
    })
  }]);

  return ix;
}();

exports.default = ix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9TaGFyZS5qcyJdLCJuYW1lcyI6WyJpeCIsInBhZ2UiLCJwYWdlT3B0aW9uIiwicGFnZU9wdGlvblNoYXJlIiwiZm9yRWFjaCIsImYiLCJyYXciLCJhcmdzIiwiRnVuY3Rpb24iLCJjdXIiLCJnZXRDdXJyZW50UGFnZXMiLCJzbGljZSIsImNhbGwiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFDUEMsSSxFQUFNO0FBQ2hCLFVBQU1DLGFBQWEsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFuQjtBQUNBLFVBQU1DLGtCQUFrQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLG1CQUFyQixDQUF4QjtBQUNBOztBQUVBO0FBQ0FBLHNCQUFnQkMsT0FBaEIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQzdCLFlBQU1DLE1BQU1MLEtBQUtJLENBQUwsQ0FBWjtBQUNBSixhQUFLSSxDQUFMLElBQVUsWUFBYTtBQUFBLDRDQUFURSxJQUFTO0FBQVRBLGdCQUFTO0FBQUE7O0FBRXJCLGNBQUlELGVBQWVFLFFBQW5CLEVBQTZCO0FBQzNCLGdCQUFJQyxNQUFNQyxrQkFBa0JDLEtBQWxCLENBQXdCLENBQUMsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBVjtBQUNBTCxnQkFBSU0sSUFBSixhQUFTSCxHQUFULFNBQWlCRixJQUFqQjtBQUNEO0FBQ0YsU0FORDtBQU9ELE9BVEQ7QUFVQSxhQUFPTSxLQUFLWixJQUFMLENBQVA7QUFDRCxLOzs7Ozs7a0JBbEJrQkQsRSIsImZpbGUiOiJhdXRvU2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBpeCB7XG4gIHN0YXRpYyBQYWdlKHBhZ2UpIHtcbiAgICBjb25zdCBwYWdlT3B0aW9uID0gWydvblNob3cnLCAnb25Mb2FkJ11cbiAgICBjb25zdCBwYWdlT3B0aW9uU2hhcmUgPSBbJ29uU2hvdycsICdvbkxvYWQnLCAnb25TaGFyZUFwcE1lc3NhZ2UnXVxuICAgIC8vIGlmICgpIHtcblxuICAgIC8vIH1cbiAgICBwYWdlT3B0aW9uU2hhcmUuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3QgcmF3ID0gcGFnZVtmXTtcbiAgICAgIHBhZ2VbZl0gPSAoLi4uYXJncykgPT4ge1xuXG4gICAgICAgIGlmIChyYXcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIGxldCBjdXIgPSBnZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF1cbiAgICAgICAgICByYXcuY2FsbChjdXIsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBQYWdlKHBhZ2UpO1xuICB9XG59XG4iXX0=