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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUVSLE9BQU8sRUFBQztZQUNKLElBQUksRUFBQyxNQUFNO1lBQ1gsS0FBSyxFQUFDLHVCQUF1QjtZQUM3QixRQUFRLEVBQUUsVUFBUyxNQUFjLEVBQUUsTUFBYztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQztTQUNKO0tBRUo7SUFDRCxJQUFJLEVBQUUsRUFFTDtJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsWUFBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFDRCxLQUFLLEVBQUU7SUFFUCxDQUFDO0lBQ0QsS0FBSyxFQUFFO0lBRVAsQ0FBQztJQUNELFFBQVEsRUFBRTtJQUVWLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciAgemhhbmdsaWppZVxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICovXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gd2VidmlldyB1cmxcclxuICAgICAgICB3ZWJ2aWV3OntcclxuICAgICAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOidodHRwczovL3d3dy5iYWlkdS5jb20nLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24obmV3VmFsOiBzdHJpbmcsIG9sZFZhbDogc3RyaW5nKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbCwgb2xkVmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJpbmRNZXNzYWdlKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgJ+aOpeaUtuWAvCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpe1xyXG5cclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9LFxyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgfSxcclxuICAgIG1vdmVkOiBmdW5jdGlvbigpe1xyXG5cclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9LFxyXG59KTsiXX0=