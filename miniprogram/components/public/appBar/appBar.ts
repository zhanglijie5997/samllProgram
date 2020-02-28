
/**
 *  @author  zhanglijie
 *  @version 1.0.0
 */
import { selectFnType } from "./appBarType";
import { setStorageSync } from "../../../utils/base/base";

Component({
    properties: {
        // 选中的索引
        select: {
            type: Number,
            value: -1,
            observer: function (newVal: number) { 
                this.setData({
                    isActive: newVal
                })
            }
        },

    },
    data: {
        list: [{
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/images/shouyeweixuanzhong_20.2.27@2x.png",
            "selectedIconPath": "/images/shouyexuanzhong_20.2.27@2x.png",
            "selectedColor": "#e81844",
            "id": 0
        },
        {
            "pagePath": "/pages/community/community",
            "text": "社群",
            "iconPath": "/images/shequnweixuanzhong_20.2.26@2x.png",
            "selectedIconPath": "/images/shequnxuanzhong_20.2.26@2x.png",
            "selectedColor": "#e81844",
            "id": 1
        },
        {
            "pagePath": "/pages/service/service",
            "text": "维修",
            "iconPath": "/images/weixiuweixuanzhong_20.2.26@2x.png",
            "selectedIconPath": "/images/weixiuxuanzhong_20.2.26@2x.png",
            "selectedColor": "#e81844",
            "id": 2
        },
        {
            "pagePath": "/pages/user/user",
            "text": "订单",
            "iconPath": "/images/dingdanweixuanz_20.2.26@2x.png",
            "selectedIconPath": "/images/dingdanxuanze_20.2.26@2x.png",
            "selectedColor": "#e81844",
            "id": 3
        }],
        isActive: 0, // 选择的tab
    },
    methods: {
        /** 选择的tabbar
         *  @param event 点击回掉
         */
        selectFn(event: selectFnType) {
            console.log(event.currentTarget.dataset.index);
            const index: number = event.currentTarget.dataset.index;
            this.setData({
                isActive: index
            });
            setStorageSync("tabIndex", JSON.stringify(index));
            // 0 => 首页
            // 1 => 社群
            // 3 => 维修
            // 4 => 订单 
            this.triggerEvent("changeTabFn", {
                index: index
            });
            switch (index) {
                case 2:
                    break;
                default:
                    break;
            }
        }
    },
    created: function () {
        
    },
    attached: function () {

    },
    ready: function () {
        
        // this.setData({
        //     isActive
        // })
    },
    moved: function () {

    },
    detached: function () {

    },
});
