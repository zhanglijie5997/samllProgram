"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("../../utils/axios/axios");
var app = getApp();
var MD5 = require("../../utils/md5/md5");
var base64 = require("../../utils/base64/base64").Base64;
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    click: function () {
        wx.navigateTo({
            url: '../test/test',
        });
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.axios("/test", {
                            a: 1
                        })];
                    case 1:
                        data = _a.sent();
                        console.log(data, 'data---');
                        console.log(data, '9999');
                        console.log(MD5.hex_md5("zxc"), base64, ';;;;;');
                        if (app.globalData.userInfo) {
                            this.setData({
                                userInfo: app.globalData.userInfo,
                                hasUserInfo: true,
                            });
                        }
                        else if (this.data.canIUse) {
                            app.userInfoReadyCallback = function (res) {
                                _this.setData({
                                    userInfo: res.userInfo,
                                    hasUserInfo: true,
                                });
                            };
                        }
                        else {
                            wx.getUserInfo({
                                success: function (res) {
                                    app.globalData.userInfo = res.userInfo;
                                    _this.setData({
                                        userInfo: res.userInfo,
                                        hasUserInfo: true,
                                    });
                                },
                            });
                        }
                        return [2];
                }
            });
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLGlEQUFnRDtBQUVoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUNoQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMzQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0QsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNwRDtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNLLE1BQU07Ozs7Ozs0QkFDRyxXQUFNLGFBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ2hDLENBQUMsRUFBRSxDQUFDO3lCQUNMLENBQUMsRUFBQTs7d0JBRkksSUFBSSxHQUFHLFNBRVg7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFBO3dCQUM5QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0NBQ2pDLFdBQVcsRUFBRSxJQUFJOzZCQUNsQixDQUFDLENBQUE7eUJBQ0g7NkJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUEsR0FBRztnQ0FDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQ0FDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0NBQ3RCLFdBQVcsRUFBRSxJQUFJO2lDQUNsQixDQUFDLENBQUE7NEJBQ0osQ0FBQyxDQUFBO3lCQUNGOzZCQUFNOzRCQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0NBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQ0FDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29DQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO3dDQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3Q0FDdEIsV0FBVyxFQUFFLElBQUk7cUNBQ2xCLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTt5QkFDSDs7Ozs7S0FDRjtJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIHpoYW5nbGlqaWVcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG4vLyBpbmRleC50c1xuLy8gaW1wb3J0IHsgd3hHZXRzeXN0ZW1pbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmFzZS9iYXNlJ1xuLy8gaW1wb3J0IHsgc2V0dGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbi8vIGltcG9ydCBiYXNlNjQgZnJvbSAnLi4vLi4vdXRpbHMvYmFzZTY0L2Jhc2U2NCdcbmltcG9ydCB7IGF4aW9zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2F4aW9zL2F4aW9zXCI7XG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5jb25zdCBNRDUgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvbWQ1L21kNVwiKTtcbmNvbnN0IGJhc2U2NCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9iYXNlNjQvYmFzZTY0XCIpLkJhc2U2NDtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gIH0sXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncycsXG4gICAgfSlcbiAgfSxcbiAgY2xpY2soKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi90ZXN0L3Rlc3QnLFxuICAgIH0pXG4gIH0sXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MoXCIvdGVzdFwiLCB7XG4gICAgICBhOiAxXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEtLS0nKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnOTk5OScpO1xuICAgIGNvbnNvbGUubG9nKE1ENS5oZXhfbWQ1KFwienhjXCIpLGJhc2U2NCwnOzs7OzsnKVxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH0sXG59KVxuIl19