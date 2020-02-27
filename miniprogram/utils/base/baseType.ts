/**
 *  @author  zhanglijie
 *  @version 1.0.0 
 */
/** 路由跳转类型 */
export enum routerEnumPushNameType {
    "switchTab" = "switchTab",
    "reLaunch" = "reLaunch",
    "redirectTo" = "redirectTo",
    "navgateTo" = "navgateTo",
    "navigateBack" = "navigateBack"
}
export type routerPushNameType = "switchTab" | "reLaunch" | "redirectTo" | "navgateTo" | "navigateBack"; 

/** toast提示name值 */
export enum toastEnumType {
    "showToast" = "showToast",
    "showModel" = "showModel",
    "showLoading" = "showLoading",
    "showActionSheet" = "showActionSheet",
    "hideToast" = "hideToast",
    "hideLoading" = "hideLoading"
};

export type toastNameType = "showToast" | "showModel" | "showLoading" | "showActionSheet" | "hideToast" | "hideLoading";

export type toastIconType = "success" | "none"  | "loading"

// wx.showLoading 和 wx.showToast 同时只能显示一个
// wx.showToast 应与 wx.hideToast 配对使用
export interface toastType {
    icon?: toastIconType,
    duration?: number,
    title: string,
    mask?: boolean, // 是否显示透明蒙层，防止触摸穿透
    success: (res: any) => void, // 成功回调
    fail: (err: any) => void, // 失败回调
    content?: string, // showModal 提示的内容
    showCancel?: boolean, // showModal 是否显示取消按钮
    cancelText?: string, // showModal取消按钮的文字，最多 4 个字符
    cancelColor?: string, // showModal 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
    confirmText?: string, // showModal 确认按钮的文字，最多 4 个字符
    confirmColor?: string, // showModal 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
}

