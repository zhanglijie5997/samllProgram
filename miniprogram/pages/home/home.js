"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        isActive: 0,
    },
    onLoad: function () {
        var isActive = app.globalData.isActive;
        console.log(isActive, '???isActive');
        this.setData({
            isActive: isActive
        });
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBRUQsTUFBTSxFQUFFO1FBQ0ksSUFBQSxrQ0FBUSxDQUFvQjtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxVQUFBO1NBQ1gsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE9BQU8sRUFBRTtJQUVULENBQUM7SUFDRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBQ0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBQ0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUNELGlCQUFpQixFQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0QsWUFBWSxFQUFFO0lBRWQsQ0FBQztJQUVELFlBQVksRUFBQztJQUViLENBQUM7SUFJRCxXQUFXLEVBQVgsVUFBWSxLQUFzQjtRQUN0QixJQUFBLDBCQUFLLENBQWtCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUE7SUFFTixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgQGF1dGhvciAgemhhbmdsaWppZSBcbiAqICBAdmVyc2lvbiAxLjAuMFxuICovXG5cbmltcG9ydCB7IGNoYW5nZVRhYkZuVHlwZSB9IGZyb20gXCIuL2hvbWVUeXBlXCI7XG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgaXNBY3RpdmU6IDAsXG4gICAgfSxcbiAgICAvL29wdGlvbnMoT2JqZWN0KVxuICAgIG9uTG9hZDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgeyBpc0FjdGl2ZSB9ID0gYXBwLmdsb2JhbERhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzQWN0aXZlLCAnPz8/aXNBY3RpdmUnKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIG9uUmVhZHk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgIH0sXG4gICAgb25TaG93OiBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICB9LFxuICAgIG9uSGlkZTogZnVuY3Rpb24oKXtcblxuICAgIH0sXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIC8vaXRlbShpbmRleCxwYWdlUGF0aCx0ZXh0KVxuICAgIG9uVGFiSXRlbVRhcDpmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICAvKiog5pS55Y+Y6YCJ5oup5YC8IFxuICAgICAqICBAcGFyYW0gZXZlbnQg6YCJ5oup55qE57Si5byVXG4gICAgKi9cbiAgICBjaGFuZ2VUYWJGbihldmVudDogY2hhbmdlVGFiRm5UeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGlzQWN0aXZlOiBpbmRleFxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwuaW5kZXgsICdpbmRleCcpXG4gICAgfVxufSk7Il19