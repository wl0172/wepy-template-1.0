'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateManager = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateManager() {
  var updateManager = wx.getUpdateManager();
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    if (res.hasUpdate) {
      _wepy2.default.showLoading({
        title: '更新中...'
      });
      updateManager.onUpdateReady(function () {
        _wepy2.default.hideLoading();
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function success(res) {
            _wepy2.default.hideLoading();
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
    } else {
      _wepy2.default.hideLoading();
    }
  });
  updateManager.onUpdateFailed(function () {
    _wepy2.default.hideLoading();
    wx.showModal({
      title: '更新提示',
      content: '更新失败，请尝试重新打开程序！'
    });
  });
}

exports.updateManager = updateManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4LXVwZGF0ZS5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVNYW5hZ2VyIiwid3giLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsInJlcyIsImhhc1VwZGF0ZSIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwib25VcGRhdGVSZWFkeSIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJjb25maXJtIiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1BLGdCQUFnQkMsR0FBR0MsZ0JBQUgsRUFBdEI7QUFDQUYsZ0JBQWNHLGdCQUFkLENBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM1QztBQUNBLFFBQUlBLElBQUlDLFNBQVIsRUFBbUI7QUFDakJDLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBQU87QUFEUSxPQUFqQjtBQUdBUixvQkFBY1MsYUFBZCxDQUE0QixZQUFZO0FBQ3RDSCx1QkFBS0ksV0FBTDtBQUNBVCxXQUFHVSxTQUFILENBQWE7QUFDWEgsaUJBQU8sTUFESTtBQUVYSSxtQkFBUyxrQkFGRTtBQUdYQyxpQkFIVyxtQkFHSFQsR0FIRyxFQUdFO0FBQ1hFLDJCQUFLSSxXQUFMO0FBQ0EsZ0JBQUlOLElBQUlVLE9BQVIsRUFBaUI7QUFDZjtBQUNBZCw0QkFBY2UsV0FBZDtBQUNEO0FBQ0Y7QUFUVSxTQUFiO0FBV0QsT0FiRDtBQWNELEtBbEJELE1Ba0JPO0FBQ0xULHFCQUFLSSxXQUFMO0FBQ0Q7QUFDRixHQXZCRDtBQXdCQVYsZ0JBQWNnQixjQUFkLENBQTZCLFlBQVk7QUFDdkNWLG1CQUFLSSxXQUFMO0FBQ0FULE9BQUdVLFNBQUgsQ0FBYTtBQUNYSCxhQUFPLE1BREk7QUFFWEksZUFBUztBQUZFLEtBQWI7QUFJRCxHQU5EO0FBT0Q7O1FBR0NaLGEsR0FBQUEsYSIsImZpbGUiOiJ3eC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5mdW5jdGlvbiB1cGRhdGVNYW5hZ2VyKCkge1xuICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpXG4gIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XG4gICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgaWYgKHJlcy5oYXNVcGRhdGUpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+abtOaWsOS4rS4uLidcbiAgICAgIH0pXG4gICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpumHjeWQr+W6lOeUqO+8nycsXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cbiAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgfVxuICB9KVxuICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcbiAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxuICAgICAgY29udGVudDogJ+abtOaWsOWksei0pe+8jOivt+WwneivlemHjeaWsOaJk+W8gOeoi+W6j++8gSdcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQge1xuICB1cGRhdGVNYW5hZ2VyXG59XG4iXX0=