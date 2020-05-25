'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.dev.js');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('./config.prod.js');

var _config4 = _interopRequireDefault(_config3);

var _config5 = require('./config.test.js');

var _config6 = _interopRequireDefault(_config5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {};
var env = 'dev';
if (env === 'dev') {
  config = _config2.default;
} else if (env === 'test') {
  config = _config6.default;
} else if (env === 'prod') {
  config = _config4.default;
}
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImVudiIsImRldkNvbmYiLCJ0ZXN0Q29uZiIsInByb0NvbmYiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxFQUFiO0FBQ0EsSUFBSUMsV0FBSjtBQUNBLElBQUlBLFFBQVEsS0FBWixFQUFtQjtBQUNqQkQsV0FBU0UsZ0JBQVQ7QUFDRCxDQUZELE1BRU8sSUFBSUQsUUFBUSxNQUFaLEVBQW9CO0FBQ3pCRCxXQUFTRyxnQkFBVDtBQUNELENBRk0sTUFFRCxJQUFJRixRQUFRLE1BQVosRUFBb0I7QUFDeEJELFdBQVNJLGdCQUFUO0FBQ0Q7a0JBQ2NKLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGV2Q29uZiBmcm9tICcuL2NvbmZpZy5kZXYnXG5pbXBvcnQgcHJvQ29uZiBmcm9tICcuL2NvbmZpZy5wcm9kJ1xuaW1wb3J0IHRlc3RDb25mIGZyb20gJy4vY29uZmlnLnRlc3QnXG5cbmxldCBjb25maWcgPSB7fVxubGV0IGVudiA9IF9fTk9ERV9FTlZfX1xuaWYgKGVudiA9PT0gJ2RldicpIHtcbiAgY29uZmlnID0gZGV2Q29uZlxufSBlbHNlIGlmIChlbnYgPT09ICd0ZXN0Jykge1xuICBjb25maWcgPSB0ZXN0Q29uZlxufWVsc2UgaWYgKGVudiA9PT0gJ3Byb2QnKSB7XG4gIGNvbmZpZyA9IHByb0NvbmZcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xuIl19