"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var base_1=require("../../../utils/base/base");Component({properties:{select:{type:Number,value:-1,observer:function(e){this.setData({isActive:e})}}},data:{list:[{pagePath:"/pages/index/index",text:"首页",iconPath:"/images/shouyeweixuanzhong_20.2.27@2x.png",selectedIconPath:"/images/shouyexuanzhong_20.2.27@2x.png",selectedColor:"#e81844",id:0},{pagePath:"/pages/community/community",text:"社群",iconPath:"/images/shequnweixuanzhong_20.2.26@2x.png",selectedIconPath:"/images/shequnxuanzhong_20.2.26@2x.png",selectedColor:"#e81844",id:1},{pagePath:"/pages/service/service",text:"维修",iconPath:"/images/weixiuweixuanzhong_20.2.26@2x.png",selectedIconPath:"/images/weixiuxuanzhong_20.2.26@2x.png",selectedColor:"#e81844",id:2},{pagePath:"/pages/user/user",text:"订单",iconPath:"/images/dingdanweixuanz_20.2.26@2x.png",selectedIconPath:"/images/dingdanxuanze_20.2.26@2x.png",selectedColor:"#e81844",id:3}],isActive:0},methods:{selectFn:function(e){var t=e.currentTarget.dataset.index;switch(this.setData({isActive:t}),base_1.setStorageSync("tabIndex",JSON.stringify(t)),t){case 0:case 1:case 3:this.triggerEvent("changeTabFn",{index:t})}}},created:function(){},attached:function(){},ready:function(){},moved:function(){},detached:function(){}});