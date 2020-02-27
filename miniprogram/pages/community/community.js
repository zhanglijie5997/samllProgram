"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        console.log(util_1.setting, 'setting');
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (_) {
                return 123;
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbXVuaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EseUNBQTBDO0FBQzFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxNQUFNLEVBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFTO2dCQUNwRCxPQUFPLEdBQUcsQ0FBQTtZQUNaLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciAgemhhbmdsaWppZVxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICovXHJcblxyXG5pbXBvcnQgeyBzZXR0aW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbG9nczogW10sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzZXR0aW5nLCAnc2V0dGluZycpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChfOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gMTIzXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG4iXX0=