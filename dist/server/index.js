'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = undefined;

require('./../npm/wepy-async-function/index.js');

var _request = require('./../lib/request.js');

var _request2 = _interopRequireDefault(_request);

var _index = require('./../config/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 登录
 * @param {*} param
 */
function login(param) {
  return _request2.default.post('/insurance-api/client/login', param);
}

exports.login = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImxvZ2luIiwicGFyYW0iLCJyZXF1ZXN0IiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7O0FBSUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU9DLGtCQUFRQyxJQUFSLENBQWEsNkJBQWIsRUFBNENGLEtBQTVDLENBQVA7QUFDRDs7UUFHQ0QsSyxHQUFBQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vbGliL3JlcXVlc3QnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9pbmRleCdcblxuLyoqXG4gKiDnmbvlvZVcbiAqIEBwYXJhbSB7Kn0gcGFyYW1cbiAqL1xuZnVuY3Rpb24gbG9naW4ocGFyYW0pIHtcbiAgcmV0dXJuIHJlcXVlc3QucG9zdCgnL2luc3VyYW5jZS1hcGkvY2xpZW50L2xvZ2luJywgcGFyYW0pXG59XG5cbmV4cG9ydCB7XG4gIGxvZ2luXG59XG4iXX0=