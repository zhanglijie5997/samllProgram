"use strict";var __awaiter=this&&this.__awaiter||function(e,s,i,u){return new(i=i||Promise)(function(n,t){function a(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,r)}o((u=u.apply(e,s||[])).next())})},__generator=this&&this.__generator||function(n,a){var r,o,s,e,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,o=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(s=0<(s=i.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){i.label=t[1];break}if(6===t[0]&&i.label<s[1]){i.label=s[1],s=t;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(t);break}s[2]&&i.ops.pop(),i.trys.pop();continue}t=a.call(n,i)}catch(e){t=[6,e],o=0}finally{r=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0});var axios_1=require("../../utils/axios/axios"),app=getApp(),MD5=require("../../utils/md5/md5"),base64=require("../../utils/base64/base64").Base64;Page({data:{motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo")},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},click:function(){wx.navigateTo({url:"../test/test"})},onLoad:function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return[4,axios_1.axios("/test",{a:1})];case 1:return e.sent(),app.globalData.userInfo?this.setData({userInfo:app.globalData.userInfo,hasUserInfo:!0}):this.data.canIUse?app.userInfoReadyCallback=function(e){t.setData({userInfo:e.userInfo,hasUserInfo:!0})}:wx.getUserInfo({success:function(e){app.globalData.userInfo=e.userInfo,t.setData({userInfo:e.userInfo,hasUserInfo:!0})}}),[2]}})})},getUserInfo:function(e){app.globalData.userInfo=e.detail.userInfo,this.setData({userInfo:e.detail.userInfo,hasUserInfo:!0})}});