/**
 *  @author  zhanglijie 
 *  @version 1.0.0
 */

import { changeTabFnType } from "./homeType";
import { setNavigationBarTitle } from "../../utils/base/base";

const app = getApp<IAppOption>()

Page({
    data: {
        isActive: 0,
    },
    //options(Object)
    onLoad: function(){
        const { isActive } = app.globalData;
        console.log(isActive, '???isActive11')
        this.setData({
            isActive
        });
        this.setTitleFn(isActive)
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
        this.setTitleFn(index)
        // console.log(event.detail.index, 'index')
    },
    /** 动态设置头部信息
     *  @param isActive 选择的索引
     */
    setTitleFn(isActive: number) {
        switch (isActive) {
            case 0:
                setNavigationBarTitle({
                    title: "来赏小店"
                });
                break;
            case 1:
                setNavigationBarTitle({
                    title: "社群"
                });
                break;
            case 2:
                setNavigationBarTitle({
                    title: "维修"
                })
                break;
            case 3:
                setNavigationBarTitle({
                    title: "订单"
                }) 
                break;
            default:
                break;
        }
    }
});