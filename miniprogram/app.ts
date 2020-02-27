import { getStorageSync } from "./utils/base/base";

// app.ts
App<IAppOption>({
  globalData: {
    userMsg: [],
    // 用户地理信息位置
    local: {
      accuracy: 0,
      altitude: 0,
      horizontalAccuracy: 0,
      latitude: 0,
      speed: 0,
      longitude: 0,
      verticalAccuracy: 0,
      errMsg: ""
    },
    isActive: 0
  },
  onLaunch() {
    const self = this;
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log(res, '定位信息');
        self.globalData.local = res;
      }
    });
    // 本地存储的底部导航索引
    let tabIndex: number = 0;
    try {
      tabIndex = JSON.parse(getStorageSync("tabIndex")!)
    } catch (error) {
      tabIndex = 0;
    };
    console.log(tabIndex, 'tabIndex')
    this.globalData.isActive = tabIndex;
    
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
          })
        }
      },
    })
  },
})