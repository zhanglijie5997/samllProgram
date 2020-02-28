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
            switch (index) {
                case 0:
                case 1:
                case 3:
                    this.triggerEvent("changeTabFn", {
                        index: index
                    });
                    break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsaURBQTBEO0FBRTFELFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUVSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVLE1BQWM7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07aUJBQ25CLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDSjtLQUVKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLENBQUM7Z0JBQ0gsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLDJDQUEyQztnQkFDdkQsa0JBQWtCLEVBQUUsd0NBQXdDO2dCQUM1RCxlQUFlLEVBQUUsU0FBUztnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDVjtZQUNEO2dCQUNJLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFVBQVUsRUFBRSwyQ0FBMkM7Z0JBQ3ZELGtCQUFrQixFQUFFLHdDQUF3QztnQkFDNUQsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRDtnQkFDSSxVQUFVLEVBQUUsd0JBQXdCO2dCQUNwQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsMkNBQTJDO2dCQUN2RCxrQkFBa0IsRUFBRSx3Q0FBd0M7Z0JBQzVELGVBQWUsRUFBRSxTQUFTO2dCQUMxQixJQUFJLEVBQUUsQ0FBQzthQUNWO1lBQ0Q7Z0JBQ0ksVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLHdDQUF3QztnQkFDcEQsa0JBQWtCLEVBQUUsc0NBQXNDO2dCQUMxRCxlQUFlLEVBQUUsU0FBUztnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDVixDQUFDO1FBQ0YsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUNELE9BQU8sRUFBRTtRQUlMLFFBQVEsRUFBUixVQUFTLEtBQW1CO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBTSxLQUFLLEdBQVcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gscUJBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBS2xELFFBQVEsS0FBSyxFQUFFO2dCQUNYLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTt3QkFDN0IsS0FBSyxFQUFFLEtBQUs7cUJBQ2YsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTTthQUNiO1FBQ0wsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxLQUFLLEVBQUU7SUFLUCxDQUFDO0lBQ0QsS0FBSyxFQUFFO0lBRVAsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogIEBhdXRob3IgIHpoYW5nbGlqaWVcbiAqICBAdmVyc2lvbiAxLjAuMFxuICovXG5pbXBvcnQgeyBzZWxlY3RGblR5cGUgfSBmcm9tIFwiLi9hcHBCYXJUeXBlXCI7XG5pbXBvcnQgeyBzZXRTdG9yYWdlU3luYyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9iYXNlL2Jhc2VcIjtcblxuQ29tcG9uZW50KHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOmAieS4reeahOe0ouW8lVxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsOiBudW1iZXIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IG5ld1ZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIummlumhtVwiLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pbWFnZXMvc2hvdXlld2VpeHVhbnpob25nXzIwLjIuMjdAMngucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaW1hZ2VzL3Nob3V5ZXh1YW56aG9uZ18yMC4yLjI3QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2U4MTg0NFwiLFxuICAgICAgICAgICAgXCJpZFwiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvY29tbXVuaXR5L2NvbW11bml0eVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi56S+576kXCIsXG4gICAgICAgICAgICBcImljb25QYXRoXCI6IFwiL2ltYWdlcy9zaGVxdW53ZWl4dWFuemhvbmdfMjAuMi4yNkAyeC5wbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9pbWFnZXMvc2hlcXVueHVhbnpob25nXzIwLjIuMjZAMngucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjZTgxODQ0XCIsXG4gICAgICAgICAgICBcImlkXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9zZXJ2aWNlL3NlcnZpY2VcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIue7tOS/rlwiLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pbWFnZXMvd2VpeGl1d2VpeHVhbnpob25nXzIwLjIuMjZAMngucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaW1hZ2VzL3dlaXhpdXh1YW56aG9uZ18yMC4yLjI2QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2U4MTg0NFwiLFxuICAgICAgICAgICAgXCJpZFwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvdXNlci91c2VyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCLorqLljZVcIixcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL2RpbmdkYW53ZWl4dWFuel8yMC4yLjI2QDJ4LnBuZ1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy9kaW5nZGFueHVhbnplXzIwLjIuMjZAMngucG5nXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjZTgxODQ0XCIsXG4gICAgICAgICAgICBcImlkXCI6IDNcbiAgICAgICAgfV0sXG4gICAgICAgIGlzQWN0aXZlOiAwLCAvLyDpgInmi6nnmoR0YWJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLyoqIOmAieaLqeeahHRhYmJhclxuICAgICAgICAgKiAgQHBhcmFtIGV2ZW50IOeCueWHu+WbnuaOiVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0Rm4oZXZlbnQ6IHNlbGVjdEZuVHlwZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBpbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdG9yYWdlU3luYyhcInRhYkluZGV4XCIsIEpTT04uc3RyaW5naWZ5KGluZGV4KSk7XG4gICAgICAgICAgICAvLyAwID0+IOmmlumhtVxuICAgICAgICAgICAgLy8gMSA9PiDnpL7nvqRcbiAgICAgICAgICAgIC8vIDMgPT4g57u05L+uXG4gICAgICAgICAgICAvLyA0ID0+IOiuouWNlSBcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJjaGFuZ2VUYWJGblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgICAgLy8gICAgIGlzQWN0aXZlXG4gICAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBtb3ZlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbn0pO1xuIl19