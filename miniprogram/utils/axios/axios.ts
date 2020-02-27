/**
 *  @author  zhanglijie
 *  @version 1.0.0
 */
import { setting } from "../util"
import { toast } from "../base/base";

/** axios 请求
 *  @param url     路径 
 *  @param params  参数
 */
export const axios = async (url: string, params: any) => {
    console.log(setting + url, 'url');
    const data = await wx.request({
        url: setting + url,
        data: {
            ...params
        },
        method: "POST",
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },  
        success: (res: WechatMiniprogram.RequestSuccessCallbackResult) => {
            console.log(res.data);
            return res.data;
        },
        fail: () => {
            toast("showToast",{
                icon: "none",
                title: "网络错误",
                success() {},
                fail() {},
            })
        }
    });
    return data;
}