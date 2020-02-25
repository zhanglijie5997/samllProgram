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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbXVuaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EseUNBQTBDO0FBQzFDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxNQUFNLEVBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFTO2dCQUNwRCxPQUFPLEdBQUcsQ0FBQTtZQUNaLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIHpoYW5nbGlqaWVcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG5cbmltcG9ydCB7IHNldHRpbmcgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKHNldHRpbmcsICdzZXR0aW5nJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgoXzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAxMjNcbiAgICAgIH0pLFxuICAgIH0pXG4gIH0sXG59KVxuIl19