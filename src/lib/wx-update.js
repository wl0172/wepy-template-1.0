import wepy from 'wepy'

function updateManager() {
  const updateManager = wx.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    if (res.hasUpdate) {
      wepy.showLoading({
        title: '更新中...'
      })
      updateManager.onUpdateReady(function () {
        wepy.hideLoading()
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success(res) {
            wepy.hideLoading()
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    } else {
      wepy.hideLoading()
    }
  })
  updateManager.onUpdateFailed(function () {
    wepy.hideLoading()
    wx.showModal({
      title: '更新提示',
      content: '更新失败，请尝试重新打开程序！'
    })
  })
}

export {
  updateManager
}
