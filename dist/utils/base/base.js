"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var baseType_1=require("./baseType");exports.wxGetsysteminfo=wx.getSystemInfoSync(),exports.updateManagerFn=function(){var e=wx.getUpdateManager();e.onCheckForUpdate(function(t){}),e.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})}),e.onUpdateFailed(function(){wx.showToast({title:"更新失败",icon:"none",duration:1500,mask:!1})})},exports.getLaunchOptionsSync=function(){var t=wx.getLaunchOptionsSync(),e="";try{e=JSON.stringify(t.query)}catch(t){}return e},exports.routerPush=function(t,e,n){return void 0===n&&(n=1),new Map([[baseType_1.routerEnumPushNameType.switchTab,function(){return wx.switchTab({url:e})}],[baseType_1.routerEnumPushNameType.reLaunch,function(){return wx.reLaunch({url:e})}],[baseType_1.routerEnumPushNameType.redirectTo,function(){return wx.redirectTo({url:e})}],[baseType_1.routerEnumPushNameType.navgateTo,function(){return wx.navigateTo({url:e})}],[baseType_1.routerEnumPushNameType.navigateBack,function(){return wx.navigateBack({delta:n})}]]).get(t)()},exports.toast=function(t,e){return new Map([[baseType_1.toastEnumType.showToast,function(){return wx.showToast(__assign({},e))}],[baseType_1.toastEnumType.showModel,function(){return wx.showModal(__assign({},e))}],[baseType_1.toastEnumType.showLoading,function(){return wx.showLoading(__assign({},e))}],[baseType_1.toastEnumType.hideLoading,function(){return wx.hideLoading(__assign({},e))}],[baseType_1.toastEnumType.hideToast,function(){return wx.hideToast(__assign({},e))}]]).get(t)()},exports.showActionSheet=function(t){return wx.showActionSheet(__assign({},t))},exports.showNavigationBarLoading=function(t){return wx.showNavigationBarLoading(__assign({},t))},exports.setNavigationBarTitle=function(t){return wx.setNavigationBarTitle(__assign({},t))},exports.setNavigationBarColor=function(t){return wx.setNavigationBarColor(__assign({},t))},exports.hideNavigationBarLoading=function(t){return wx.hideNavigationBarLoading(__assign({},t))},exports.hideHomeButton=function(t){return wx.hideHomeButton(__assign({},t))},exports.stopPullDownRefresh=function(t){return wx.stopPullDownRefresh(__assign({},t))},exports.startPullDownRefresh=function(t){return wx.startPullDownRefresh(__assign({},t))},exports.pageScrollTo=function(t){return wx.pageScrollTo(__assign({},t))},exports.setStorageSync=function(t,e){try{wx.setStorageSync(t,e)}catch(t){exports.toast("showToast",{title:"存储失败",icon:"none",duration:1500,mask:!0,success:function(){},fail:function(){}})}},exports.removeStorageSync=function(t){wx.removeStorageSync(t)},exports.getStorageSync=function(t){try{return wx.getStorageSync(t)||!1}catch(t){return!1}};