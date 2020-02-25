import { routerPushNameType, routerEnumPushNameType, toastType, toastEnumType, toastNameType} from './baseType'

/** wx.getSystemInfo 的同步版本 */
export const wxGetsysteminfo = wx.getSystemInfoSync();

/** 新版本更新提示 */
export const updateManagerFn = () => {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate)
      })
      
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
      
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        wx.showToast({
            title: '更新失败',
            icon: 'none',
            duration: 1500,
            mask: false,
        });
      })
}

/** 获取小程序启动时的参数 
 * @returns  query 进入小程序返回的参数
*/
export const getLaunchOptionsSync = (): string => {
    const data = wx.getLaunchOptionsSync();
    // 启动参数
    let query: string = "";
    try {
        query = JSON.stringify(data.query); 
    } catch (error) {
        
    }
    return query;
} 

/** 路由跳转 
 *  @param name  路由跳转类型
 *  @param path  路由名称, 可以带参数跳转
 *  @param delta 返回的层数 默认1
 *  @returns 返回值为路由方法
 */
export const routerPush = (name: routerPushNameType, path: string, delta: number = 1) => {
    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    const routerMap: Map<routerPushNameType, () => void> = new Map([
        // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
        [routerEnumPushNameType.switchTab, () => wx.switchTab({ url: path })],
        // 关闭所有页面，打开到应用内的某个页面
        [routerEnumPushNameType.reLaunch, () => wx.reLaunch({ url: path })],
        // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
        [routerEnumPushNameType.redirectTo, () => wx.redirectTo({ url: path })],
        // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面, 使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
        [routerEnumPushNameType.navgateTo, () => wx.navigateTo({ url: path })],
        // 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
        [routerEnumPushNameType.navigateBack, () => wx.navigateBack({ delta })]
    ]);
    return routerMap.get(name)!();
}

/** toast提示 
 *  @param name 提示名称
 *  @param obj  提示参数
 *  @returns 提示函数
*/
export const toast = (name: toastNameType, obj: toastType) => {
    const toastMap: Map<toastNameType, () => void> = new Map([
        [toastEnumType.showToast, () => wx.showToast({...obj})],
        [toastEnumType.showModel, () => wx.showModal({...obj})],
        [toastEnumType.showLoading, () => wx.showLoading({...obj})],
        [toastEnumType.hideLoading, () => wx.hideLoading({...obj})],
        [toastEnumType.hideToast, () => wx.hideToast({...obj})],
    ]);
    return toastMap.get(name)!();
}

/** 显示操作菜单
 *  @param obj 参数
 */
export const showActionSheet = (obj: WechatMiniprogram.ShowActionSheetOption) => {
    return wx.showActionSheet({...obj})
}

/** 在当前页面显示导航条加载动画
 *  @param obj 参数
 */
export const showNavigationBarLoading = (obj:WechatMiniprogram.ShowNavigationBarLoadingOption) => {
    return wx.showNavigationBarLoading({...obj})
}

/** 动态设置当前页面的标题
 *  @param obj 参数
 */
export const setNavigationBarTitle = (obj: WechatMiniprogram.SetNavigationBarTitleOption) => {
    return wx.setNavigationBarTitle({...obj})
}

/** 设置页面导航条颜色
 *  @param obj 参数
 */
export const setNavigationBarColor = (obj: WechatMiniprogram.SetNavigationBarColorOption) => {
    return wx.setNavigationBarColor({...obj})
}

/** 在当前页面隐藏导航条加载动画
 *  @param obj 参数
 */
export const hideNavigationBarLoading = (obj: WechatMiniprogram.HideNavigationBarLoadingOption) => {
    return wx.hideNavigationBarLoading({...obj})
}

/** 隐藏返回首页按钮 可在页面 onShow 中调用
 *  @param obj 参数
 */
export const hideHomeButton = (obj: WechatMiniprogram.HideHomeButtonOption) => {
    return wx.hideHomeButton({...obj})
}

/** 停止当前页面下拉刷新
 *  @param obj 参数
 */
export const stopPullDownRefresh = (obj: WechatMiniprogram.StopPullDownRefreshOption) => {
    return wx.stopPullDownRefresh({...obj})
}

/** 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 *  @param obj 参数
 */
export const startPullDownRefresh = (obj: WechatMiniprogram.StartPullDownRefreshOption) => {
    return wx.startPullDownRefresh({...obj})
}

/** 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位 
 *  @param obj 参数
 *  selector 语法
    selector类似于 CSS 的选择器，但仅支持下列语法。
    ID选择器：#the-id
    class选择器（可以连续指定多个）：.a-class.another-class
    子元素选择器：.the-parent > .the-child
    后代选择器：.the-ancestor .the-descendant
    跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
    多选择器的并集：#a-node, .some-other-nodes
*/
export const pageScrollTo = (obj: WechatMiniprogram.PageScrollToOption) => {
    return wx.pageScrollTo({...obj})
}

/** 本地存储 
 *  @param key   键值
 *  @param value 存储参数
*/
export const setStorageSync = (key: string, value: any) => {
    try {
        wx.setStorageSync(key, value);
    } catch (error) {
        toast("showToast", {
            title: "存储失败",
            icon: "none",
            duration: 1500,
            mask: true,
            success: () => {},
            fail: () => {}
        })
    }
}

/** 清除本地缓存值 */
export const removeStorageSync = (key: string) => {
    wx.removeStorageSync(key);
}

/** 获取本地存储的值
 *  @param key 键值
 *  @returns res --- 获取结果   false ---- 获取失败
 */
export const getStorageSync = (key: string) => {
    try {
        const res = wx.getStorageSync(key)
        if(res) {
            return res;
        }else {
            return false
        }
    } catch (error) {
        return false
    }
}