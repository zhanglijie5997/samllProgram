/**
 *  @author  zhanglijie 
 *  @version 1.0.0
 */

import { changeTabFnType } from "./homeType";

const app = getApp<IAppOption>()

Page({
    data: {
        isActive: 0,
    },
    //options(Object)
    onLoad: function(){
        const { isActive } = app.globalData;
        console.log(isActive, '???isActive')
        this.setData({
            isActive
        })
    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){
        return {}
    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(){

    },
    /** 改变选择值 
     *  @param event 选择的索引
    */
    changeTabFn(event: changeTabFnType) {
        const { index } = event.detail;
        this.setData({
            isActive: index
        })
        // console.log(event.detail.index, 'index')
    }
});