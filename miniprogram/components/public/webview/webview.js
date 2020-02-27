"use strict";
Component({
    properties: {
        webview: {
            type: String,
            value: 'https://www.baidu.com',
            observer: function (newVal, oldVal) {
                console.log(newVal, oldVal);
            }
        },
    },
    data: {},
    methods: {
        bindMessage: function (e) {
            console.log(e, '接收值');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUVSLE9BQU8sRUFBQztZQUNKLElBQUksRUFBQyxNQUFNO1lBQ1gsS0FBSyxFQUFDLHVCQUF1QjtZQUM3QixRQUFRLEVBQUUsVUFBUyxNQUFjLEVBQUUsTUFBYztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQztTQUNKO0tBRUo7SUFDRCxJQUFJLEVBQUUsRUFFTDtJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsWUFBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxLQUFLLEVBQUU7SUFFUCxDQUFDO0lBQ0QsS0FBSyxFQUFFO0lBRVAsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIHpoYW5nbGlqaWVcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG5Db21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gd2VidmlldyB1cmxcbiAgICAgICAgd2Vidmlldzp7XG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOidodHRwczovL3d3dy5iYWlkdS5jb20nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uKG5ld1ZhbDogc3RyaW5nLCBvbGRWYWw6IHN0cmluZyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsLCBvbGRWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBkYXRhOiB7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYmluZE1lc3NhZ2UoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgJ+aOpeaUtuWAvCcpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKXtcblxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIG1vdmVkOiBmdW5jdGlvbigpe1xuXG4gICAgfSxcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKXtcblxuICAgIH0sXG59KTsiXX0=