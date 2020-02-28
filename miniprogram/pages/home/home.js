"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../../utils/base/base");
var app = getApp();
Page({
    data: {
        isActive: 0,
    },
    onLoad: function () {
        var isActive = app.globalData.isActive;
        console.log(isActive, '???isActive11');
        this.setData({
            isActive: isActive
        });
        this.setTitleFn(isActive);
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
        return {};
    },
    onPageScroll: function () {
    },
    onTabItemTap: function () {
    },
    changeTabFn: function (event) {
        var index = event.detail.index;
        this.setData({
            isActive: index
        });
        this.setTitleFn(index);
    },
    setTitleFn: function (isActive) {
        switch (isActive) {
            case 0:
                base_1.setNavigationBarTitle({
                    title: "来赏小店"
                });
                break;
            case 1:
                base_1.setNavigationBarTitle({
                    title: "社群"
                });
                break;
            case 2:
                base_1.setNavigationBarTitle({
                    title: "维修"
                });
                break;
            case 3:
                base_1.setNavigationBarTitle({
                    title: "订单"
                });
                break;
            default:
                break;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSw4Q0FBOEQ7QUFFOUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUVELE1BQU0sRUFBRTtRQUNJLElBQUEsa0NBQVEsQ0FBb0I7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFFBQVEsVUFBQTtTQUNYLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUNELE9BQU8sRUFBRTtJQUVULENBQUM7SUFDRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBQ0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBQ0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUNELGlCQUFpQixFQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0QsWUFBWSxFQUFFO0lBRWQsQ0FBQztJQUVELFlBQVksRUFBQztJQUViLENBQUM7SUFJRCxXQUFXLEVBQVgsVUFBWSxLQUFzQjtRQUN0QixJQUFBLDBCQUFLLENBQWtCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTFCLENBQUM7SUFJRCxVQUFVLEVBQVYsVUFBVyxRQUFnQjtRQUN2QixRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssQ0FBQztnQkFDRiw0QkFBcUIsQ0FBQztvQkFDbEIsS0FBSyxFQUFFLE1BQU07aUJBQ2hCLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLDRCQUFxQixDQUFDO29CQUNsQixLQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRiw0QkFBcUIsQ0FBQztvQkFDbEIsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFBO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsNEJBQXFCLENBQUM7b0JBQ2xCLEtBQUssRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQTtnQkFDRixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogIEBhdXRob3IgIHpoYW5nbGlqaWUgXG4gKiAgQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5pbXBvcnQgeyBjaGFuZ2VUYWJGblR5cGUgfSBmcm9tIFwiLi9ob21lVHlwZVwiO1xuaW1wb3J0IHsgc2V0TmF2aWdhdGlvbkJhclRpdGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2UvYmFzZVwiO1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlzQWN0aXZlOiAwLFxuICAgIH0sXG4gICAgLy9vcHRpb25zKE9iamVjdClcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHsgaXNBY3RpdmUgfSA9IGFwcC5nbG9iYWxEYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhpc0FjdGl2ZSwgJz8/P2lzQWN0aXZlMTEnKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0VGl0bGVGbihpc0FjdGl2ZSlcbiAgICB9LFxuICAgIG9uUmVhZHk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIH0sXG4gICAgb25TaG93OiBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9LFxuICAgIG9uSGlkZTogZnVuY3Rpb24oKXtcblxuICAgIH0sXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIC8vaXRlbShpbmRleCxwYWdlUGF0aCx0ZXh0KVxuICAgIG9uVGFiSXRlbVRhcDpmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICAvKiog5pS55Y+Y6YCJ5oup5YC8IFxuICAgICAqICBAcGFyYW0gZXZlbnQg6YCJ5oup55qE57Si5byVXG4gICAgKi9cbiAgICBjaGFuZ2VUYWJGbihldmVudDogY2hhbmdlVGFiRm5UeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGlzQWN0aXZlOiBpbmRleFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFRpdGxlRm4oaW5kZXgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC5pbmRleCwgJ2luZGV4JylcbiAgICB9LFxuICAgIC8qKiDliqjmgIHorr7nva7lpLTpg6jkv6Hmga9cbiAgICAgKiAgQHBhcmFtIGlzQWN0aXZlIOmAieaLqeeahOe0ouW8lVxuICAgICAqL1xuICAgIHNldFRpdGxlRm4oaXNBY3RpdmU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5p2l6LWP5bCP5bqXXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLnpL7nvqRcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIue7tOS/rlwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLorqLljZVcIlxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdfQ==