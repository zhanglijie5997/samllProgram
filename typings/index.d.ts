/// <reference path="./types/index.d.ts" />
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo, // 用户信息
    userMsg?: any[],
    local: WechatMiniprogram.GetLocationSuccessCallbackResult, // 用户地理信息位置
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

