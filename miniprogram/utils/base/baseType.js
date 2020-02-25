"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routerEnumPushNameType;
(function (routerEnumPushNameType) {
    routerEnumPushNameType["switchTab"] = "switchTab";
    routerEnumPushNameType["reLaunch"] = "reLaunch";
    routerEnumPushNameType["redirectTo"] = "redirectTo";
    routerEnumPushNameType["navgateTo"] = "navgateTo";
    routerEnumPushNameType["navigateBack"] = "navigateBack";
})(routerEnumPushNameType = exports.routerEnumPushNameType || (exports.routerEnumPushNameType = {}));
var toastEnumType;
(function (toastEnumType) {
    toastEnumType["showToast"] = "showToast";
    toastEnumType["showModel"] = "showModel";
    toastEnumType["showLoading"] = "showLoading";
    toastEnumType["showActionSheet"] = "showActionSheet";
    toastEnumType["hideToast"] = "hideToast";
    toastEnumType["hideLoading"] = "hideLoading";
})(toastEnumType = exports.toastEnumType || (exports.toastEnumType = {}));
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQVksc0JBTVg7QUFORCxXQUFZLHNCQUFzQjtJQUM5QixpREFBeUIsQ0FBQTtJQUN6QiwrQ0FBdUIsQ0FBQTtJQUN2QixtREFBMkIsQ0FBQTtJQUMzQixpREFBeUIsQ0FBQTtJQUN6Qix1REFBK0IsQ0FBQTtBQUNuQyxDQUFDLEVBTlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFNakM7QUFJRCxJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIsd0NBQXlCLENBQUE7SUFDekIsd0NBQXlCLENBQUE7SUFDekIsNENBQTZCLENBQUE7SUFDN0Isb0RBQXFDLENBQUE7SUFDckMsd0NBQXlCLENBQUE7SUFDekIsNENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQVBXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBT3hCO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDot6/nlLHot7PovaznsbvlnosgKi9cbmV4cG9ydCBlbnVtIHJvdXRlckVudW1QdXNoTmFtZVR5cGUge1xuICAgIFwic3dpdGNoVGFiXCIgPSBcInN3aXRjaFRhYlwiLFxuICAgIFwicmVMYXVuY2hcIiA9IFwicmVMYXVuY2hcIixcbiAgICBcInJlZGlyZWN0VG9cIiA9IFwicmVkaXJlY3RUb1wiLFxuICAgIFwibmF2Z2F0ZVRvXCIgPSBcIm5hdmdhdGVUb1wiLFxuICAgIFwibmF2aWdhdGVCYWNrXCIgPSBcIm5hdmlnYXRlQmFja1wiXG59XG5leHBvcnQgdHlwZSByb3V0ZXJQdXNoTmFtZVR5cGUgPSBcInN3aXRjaFRhYlwiIHwgXCJyZUxhdW5jaFwiIHwgXCJyZWRpcmVjdFRvXCIgfCBcIm5hdmdhdGVUb1wiIHwgXCJuYXZpZ2F0ZUJhY2tcIjsgXG5cbi8qKiB0b2FzdOaPkOekum5hbWXlgLwgKi9cbmV4cG9ydCBlbnVtIHRvYXN0RW51bVR5cGUge1xuICAgIFwic2hvd1RvYXN0XCIgPSBcInNob3dUb2FzdFwiLFxuICAgIFwic2hvd01vZGVsXCIgPSBcInNob3dNb2RlbFwiLFxuICAgIFwic2hvd0xvYWRpbmdcIiA9IFwic2hvd0xvYWRpbmdcIixcbiAgICBcInNob3dBY3Rpb25TaGVldFwiID0gXCJzaG93QWN0aW9uU2hlZXRcIixcbiAgICBcImhpZGVUb2FzdFwiID0gXCJoaWRlVG9hc3RcIixcbiAgICBcImhpZGVMb2FkaW5nXCIgPSBcImhpZGVMb2FkaW5nXCJcbn07XG5cbmV4cG9ydCB0eXBlIHRvYXN0TmFtZVR5cGUgPSBcInNob3dUb2FzdFwiIHwgXCJzaG93TW9kZWxcIiB8IFwic2hvd0xvYWRpbmdcIiB8IFwic2hvd0FjdGlvblNoZWV0XCIgfCBcImhpZGVUb2FzdFwiIHwgXCJoaWRlTG9hZGluZ1wiO1xuXG5leHBvcnQgdHlwZSB0b2FzdEljb25UeXBlID0gXCJzdWNjZXNzXCIgfCBcIm5vbmVcIiAgfCBcImxvYWRpbmdcIlxuXG4vLyB3eC5zaG93TG9hZGluZyDlkowgd3guc2hvd1RvYXN0IOWQjOaXtuWPquiDveaYvuekuuS4gOS4qlxuLy8gd3guc2hvd1RvYXN0IOW6lOS4jiB3eC5oaWRlVG9hc3Qg6YWN5a+55L2/55SoXG5leHBvcnQgaW50ZXJmYWNlIHRvYXN0VHlwZSB7XG4gICAgaWNvbj86IHRvYXN0SWNvblR5cGUsXG4gICAgZHVyYXRpb24/OiBudW1iZXIsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtYXNrPzogYm9vbGVhbiwgLy8g5piv5ZCm5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPXG4gICAgc3VjY2VzczogKHJlczogYW55KSA9PiB2b2lkLCAvLyDmiJDlip/lm57osINcbiAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHZvaWQsIC8vIOWksei0peWbnuiwg1xuICAgIGNvbnRlbnQ/OiBzdHJpbmcsIC8vIHNob3dNb2RhbCDmj5DnpLrnmoTlhoXlrrlcbiAgICBzaG93Q2FuY2VsPzogYm9vbGVhbiwgLy8gc2hvd01vZGFsIOaYr+WQpuaYvuekuuWPlua2iOaMiemSrlxuICAgIGNhbmNlbFRleHQ/OiBzdHJpbmcsIC8vIHNob3dNb2RhbOWPlua2iOaMiemSrueahOaWh+Wtl++8jOacgOWkmiA0IOS4quWtl+esplxuICAgIGNhbmNlbENvbG9yPzogc3RyaW5nLCAvLyBzaG93TW9kYWwg5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6Imy77yM5b+F6aG75pivIDE2IOi/m+WItuagvOW8j+eahOminOiJsuWtl+espuS4slxuICAgIGNvbmZpcm1UZXh0Pzogc3RyaW5nLCAvLyBzaG93TW9kYWwg56Gu6K6k5oyJ6ZKu55qE5paH5a2X77yM5pyA5aSaIDQg5Liq5a2X56ymXG4gICAgY29uZmlybUNvbG9yPzogc3RyaW5nLCAvLyBzaG93TW9kYWwg56Gu6K6k5oyJ6ZKu55qE5paH5a2X6aKc6Imy77yM5b+F6aG75pivIDE2IOi/m+WItuagvOW8j+eahOminOiJsuWtl+espuS4slxufVxuXG4iXX0=