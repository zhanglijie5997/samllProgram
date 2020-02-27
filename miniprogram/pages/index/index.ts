/**
 * @author  zhanglijie
 * @version 1.0
 */
// index.ts
// import { wxGetsysteminfo } from '../../utils/base/base'
// import { setting } from '../../utils/util'

// import base64 from '../../utils/base64/base64'
import { axios } from "../../utils/axios/axios";
// 获取应用实例
const app = getApp<IAppOption>()
const MD5 = require("../../utils/md5/md5");
const base64 = require("../../utils/base64/base64").Base64;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  click() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  async onLoad() {
    const data = await axios("/test", {
      a: 1
    });
    console.log(data, 'data---');
    console.log(data, '9999');
    console.log(MD5.hex_md5("zxc"),base64,';;;;;')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
})
