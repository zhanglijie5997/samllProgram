"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../../../utils/base/base");
Component({
    properties: {
        select: {
            type: Number,
            value: -1,
            observer: function (newVal) {
                this.setData({
                    isActive: newVal
                });
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
        isActive: 0,
    },
    methods: {
        selectFn: function (event) {
            console.log(event.currentTarget.dataset.index);
            var index = event.currentTarget.dataset.index;
            this.setData({
                isActive: index
            });
            base_1.setStorageSync("tabIndex", JSON.stringify(index));
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
    },
    moved: function () {
    },
    detached: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsaURBQTBEO0FBRTFELFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUVSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVLE1BQWM7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07aUJBQ25CLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDSjtLQUVKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLENBQUM7Z0JBQ0gsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLDJDQUEyQztnQkFDdkQsa0JBQWtCLEVBQUUsd0NBQXdDO2dCQUM1RCxlQUFlLEVBQUUsU0FBUztnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDVjtZQUNEO2dCQUNJLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFVBQVUsRUFBRSwyQ0FBMkM7Z0JBQ3ZELGtCQUFrQixFQUFFLHdDQUF3QztnQkFDNUQsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRDtnQkFDSSxVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsMkNBQTJDO2dCQUN2RCxrQkFBa0IsRUFBRSx3Q0FBd0M7Z0JBQzVELGVBQWUsRUFBRSxTQUFTO2dCQUMxQixJQUFJLEVBQUUsQ0FBQzthQUNWO1lBQ0Q7Z0JBQ0ksVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLHdDQUF3QztnQkFDcEQsa0JBQWtCLEVBQUUsc0NBQXNDO2dCQUMxRCxlQUFlLEVBQUUsU0FBUztnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDVixDQUFDO1FBQ0YsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUNELE9BQU8sRUFBRTtRQUlMLFFBQVEsRUFBUixVQUFTLEtBQW1CO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBTSxLQUFLLEdBQVcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gscUJBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBS2xELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO2dCQUM3QixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILFFBQVEsS0FBSyxFQUFFO2dCQUNYLEtBQUssQ0FBQztvQkFDRixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtRQUNMLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRTtJQUVULENBQUM7SUFDRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBQ0QsS0FBSyxFQUFFO0lBS1AsQ0FBQztJQUNELEtBQUssRUFBRTtJQUVQLENBQUM7SUFDRCxRQUFRLEVBQUU7SUFFVixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqICBAYXV0aG9yICB6aGFuZ2xpamllXG4gKiAgQHZlcnNpb24gMS4wLjBcbiAqL1xuaW1wb3J0IHsgc2VsZWN0Rm5UeXBlIH0gZnJvbSBcIi4vYXBwQmFyVHlwZVwiO1xuaW1wb3J0IHsgc2V0U3RvcmFnZVN5bmMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYmFzZS9iYXNlXCI7XG5cbkNvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyDpgInkuK3nmoTntKLlvJVcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbDogbnVtYmVyKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBuZXdWYWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3Nob3V5ZXdlaXh1YW56aG9uZ18yMC4yLjI3QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy9zaG91eWV4dWFuemhvbmdfMjAuMi4yN0AyeC5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNlODE4NDRcIixcbiAgICAgICAgICAgIFwiaWRcIjogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHlcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuekvue+pFwiLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pbWFnZXMvc2hlcXVud2VpeHVhbnpob25nXzIwLjIuMjZAMngucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaW1hZ2VzL3NoZXF1bnh1YW56aG9uZ18yMC4yLjI2QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2U4MTg0NFwiLFxuICAgICAgICAgICAgXCJpZFwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvc2VydmljZS9zZXJ2aWNlXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLnu7Tkv65cIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3dlaXhpdXdlaXh1YW56aG9uZ18yMC4yLjI2QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy93ZWl4aXV4dWFuemhvbmdfMjAuMi4yNkAyeC5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNlODE4NDRcIixcbiAgICAgICAgICAgIFwiaWRcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL3VzZXIvdXNlclwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6K6i5Y2VXCIsXG4gICAgICAgICAgICBcImljb25QYXRoXCI6IFwiL2ltYWdlcy9kaW5nZGFud2VpeHVhbnpfMjAuMi4yNkAyeC5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9pbWFnZXMvZGluZ2Rhbnh1YW56ZV8yMC4yLjI2QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2U4MTg0NFwiLFxuICAgICAgICAgICAgXCJpZFwiOiAzXG4gICAgICAgIH1dLFxuICAgICAgICBpc0FjdGl2ZTogMCwgLy8g6YCJ5oup55qEdGFiXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8qKiDpgInmi6nnmoR0YWJiYXJcbiAgICAgICAgICogIEBwYXJhbSBldmVudCDngrnlh7vlm57mjolcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdEZuKGV2ZW50OiBzZWxlY3RGblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0U3RvcmFnZVN5bmMoXCJ0YWJJbmRleFwiLCBKU09OLnN0cmluZ2lmeShpbmRleCkpO1xuICAgICAgICAgICAgLy8gMCA9PiDpppbpobVcbiAgICAgICAgICAgIC8vIDEgPT4g56S+576kXG4gICAgICAgICAgICAvLyAzID0+IOe7tOS/rlxuICAgICAgICAgICAgLy8gNCA9PiDorqLljZUgXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChcImNoYW5nZVRhYkZuXCIsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgICAgLy8gICAgIGlzQWN0aXZlXG4gICAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBtb3ZlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbn0pO1xuIl19