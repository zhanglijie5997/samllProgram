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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQVksc0JBTVg7QUFORCxXQUFZLHNCQUFzQjtJQUM5QixpREFBeUIsQ0FBQTtJQUN6QiwrQ0FBdUIsQ0FBQTtJQUN2QixtREFBMkIsQ0FBQTtJQUMzQixpREFBeUIsQ0FBQTtJQUN6Qix1REFBK0IsQ0FBQTtBQUNuQyxDQUFDLEVBTlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFNakM7QUFJRCxJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIsd0NBQXlCLENBQUE7SUFDekIsd0NBQXlCLENBQUE7SUFDekIsNENBQTZCLENBQUE7SUFDN0Isb0RBQXFDLENBQUE7SUFDckMsd0NBQXlCLENBQUE7SUFDekIsNENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQVBXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBT3hCO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiDot6/nlLHot7PovaznsbvlnosgKi9cclxuZXhwb3J0IGVudW0gcm91dGVyRW51bVB1c2hOYW1lVHlwZSB7XHJcbiAgICBcInN3aXRjaFRhYlwiID0gXCJzd2l0Y2hUYWJcIixcclxuICAgIFwicmVMYXVuY2hcIiA9IFwicmVMYXVuY2hcIixcclxuICAgIFwicmVkaXJlY3RUb1wiID0gXCJyZWRpcmVjdFRvXCIsXHJcbiAgICBcIm5hdmdhdGVUb1wiID0gXCJuYXZnYXRlVG9cIixcclxuICAgIFwibmF2aWdhdGVCYWNrXCIgPSBcIm5hdmlnYXRlQmFja1wiXHJcbn1cclxuZXhwb3J0IHR5cGUgcm91dGVyUHVzaE5hbWVUeXBlID0gXCJzd2l0Y2hUYWJcIiB8IFwicmVMYXVuY2hcIiB8IFwicmVkaXJlY3RUb1wiIHwgXCJuYXZnYXRlVG9cIiB8IFwibmF2aWdhdGVCYWNrXCI7IFxyXG5cclxuLyoqIHRvYXN05o+Q56S6bmFtZeWAvCAqL1xyXG5leHBvcnQgZW51bSB0b2FzdEVudW1UeXBlIHtcclxuICAgIFwic2hvd1RvYXN0XCIgPSBcInNob3dUb2FzdFwiLFxyXG4gICAgXCJzaG93TW9kZWxcIiA9IFwic2hvd01vZGVsXCIsXHJcbiAgICBcInNob3dMb2FkaW5nXCIgPSBcInNob3dMb2FkaW5nXCIsXHJcbiAgICBcInNob3dBY3Rpb25TaGVldFwiID0gXCJzaG93QWN0aW9uU2hlZXRcIixcclxuICAgIFwiaGlkZVRvYXN0XCIgPSBcImhpZGVUb2FzdFwiLFxyXG4gICAgXCJoaWRlTG9hZGluZ1wiID0gXCJoaWRlTG9hZGluZ1wiXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSB0b2FzdE5hbWVUeXBlID0gXCJzaG93VG9hc3RcIiB8IFwic2hvd01vZGVsXCIgfCBcInNob3dMb2FkaW5nXCIgfCBcInNob3dBY3Rpb25TaGVldFwiIHwgXCJoaWRlVG9hc3RcIiB8IFwiaGlkZUxvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIHRvYXN0SWNvblR5cGUgPSBcInN1Y2Nlc3NcIiB8IFwibm9uZVwiICB8IFwibG9hZGluZ1wiXHJcblxyXG4vLyB3eC5zaG93TG9hZGluZyDlkowgd3guc2hvd1RvYXN0IOWQjOaXtuWPquiDveaYvuekuuS4gOS4qlxyXG4vLyB3eC5zaG93VG9hc3Qg5bqU5LiOIHd4LmhpZGVUb2FzdCDphY3lr7nkvb/nlKhcclxuZXhwb3J0IGludGVyZmFjZSB0b2FzdFR5cGUge1xyXG4gICAgaWNvbj86IHRvYXN0SWNvblR5cGUsXHJcbiAgICBkdXJhdGlvbj86IG51bWJlcixcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBtYXNrPzogYm9vbGVhbiwgLy8g5piv5ZCm5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPXHJcbiAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHZvaWQsIC8vIOaIkOWKn+Wbnuiwg1xyXG4gICAgZmFpbDogKGVycjogYW55KSA9PiB2b2lkLCAvLyDlpLHotKXlm57osINcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmcsIC8vIHNob3dNb2RhbCDmj5DnpLrnmoTlhoXlrrlcclxuICAgIHNob3dDYW5jZWw/OiBib29sZWFuLCAvLyBzaG93TW9kYWwg5piv5ZCm5pi+56S65Y+W5raI5oyJ6ZKuXHJcbiAgICBjYW5jZWxUZXh0Pzogc3RyaW5nLCAvLyBzaG93TW9kYWzlj5bmtojmjInpkq7nmoTmloflrZfvvIzmnIDlpJogNCDkuKrlrZfnrKZcclxuICAgIGNhbmNlbENvbG9yPzogc3RyaW5nLCAvLyBzaG93TW9kYWwg5Y+W5raI5oyJ6ZKu55qE5paH5a2X6aKc6Imy77yM5b+F6aG75pivIDE2IOi/m+WItuagvOW8j+eahOminOiJsuWtl+espuS4slxyXG4gICAgY29uZmlybVRleHQ/OiBzdHJpbmcsIC8vIHNob3dNb2RhbCDnoa7orqTmjInpkq7nmoTmloflrZfvvIzmnIDlpJogNCDkuKrlrZfnrKZcclxuICAgIGNvbmZpcm1Db2xvcj86IHN0cmluZywgLy8gc2hvd01vZGFsIOehruiupOaMiemSrueahOaWh+Wtl+minOiJsu+8jOW/hemhu+aYryAxNiDov5vliLbmoLzlvI/nmoTpopzoibLlrZfnrKbkuLJcclxufVxyXG5cclxuIl19