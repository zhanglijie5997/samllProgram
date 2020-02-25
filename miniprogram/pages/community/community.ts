/**
 * @author  zhanglijie
 * @version 1.0
 */

import { setting } from '../../utils/util'
Page({
  data: {
    logs: [],
  },
  onLoad() {
    console.log(setting, 'setting')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((_: string) => {
        return 123
      }),
    })
  },
})
