"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./utils/base/base");
App({
    globalData: {
        userMsg: [],
        local: {
            accuracy: 0,
            altitude: 0,
            horizontalAccuracy: 0,
            latitude: 0,
            speed: 0,
            longitude: 0,
            verticalAccuracy: 0,
            errMsg: ""
        },
        isActive: 0
    },
    onLaunch: function () {
        var _this = this;
        var self = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.getLocation({
            type: "wgs84",
            success: function (res) {
                console.log(res, '定位信息');
                self.globalData.local = res;
            }
        });
        var tabIndex = 0;
        try {
            tabIndex = JSON.parse(base_1.getStorageSync("tabIndex")) ? JSON.parse(base_1.getStorageSync("tabIndex")) : 0;
        }
        catch (error) {
            tabIndex = 0;
        }
        ;
        console.log(tabIndex, 'tabIndex');
        this.globalData.isActive = tabIndex;
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQW1EO0FBR25ELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFO1FBRVgsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLGtCQUFrQixFQUFFLENBQUM7WUFDckIsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixNQUFNLEVBQUUsRUFBRTtTQUNYO1FBQ0QsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUNELFFBQVEsRUFBUjtRQUFBLGlCQWlEQztRQWhEQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzlCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSTtZQUNGLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFjLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBYyxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNkO1FBQUEsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUdwQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV2QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUd2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBOzZCQUNoQzt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RvcmFnZVN5bmMgfSBmcm9tIFwiLi91dGlscy9iYXNlL2Jhc2VcIjtcblxuLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlck1zZzogW10sXG4gICAgLy8g55So5oi35Zyw55CG5L+h5oGv5L2N572uXG4gICAgbG9jYWw6IHtcbiAgICAgIGFjY3VyYWN5OiAwLFxuICAgICAgYWx0aXR1ZGU6IDAsXG4gICAgICBob3Jpem9udGFsQWNjdXJhY3k6IDAsXG4gICAgICBsYXRpdHVkZTogMCxcbiAgICAgIHNwZWVkOiAwLFxuICAgICAgbG9uZ2l0dWRlOiAwLFxuICAgICAgdmVydGljYWxBY2N1cmFjeTogMCxcbiAgICAgIGVyck1zZzogXCJcIlxuICAgIH0sXG4gICAgaXNBY3RpdmU6IDBcbiAgfSxcbiAgb25MYXVuY2goKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG4gICAgd3guZ2V0TG9jYXRpb24oe1xuICAgICAgdHlwZTogXCJ3Z3M4NFwiLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAn5a6a5L2N5L+h5oGvJyk7XG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS5sb2NhbCA9IHJlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDmnKzlnLDlrZjlgqjnmoTlupXpg6jlr7zoiKrntKLlvJVcbiAgICBsZXQgdGFiSW5kZXg6IG51bWJlciA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIHRhYkluZGV4ID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlU3luYyhcInRhYkluZGV4XCIpISkgPyBKU09OLnBhcnNlKGdldFN0b3JhZ2VTeW5jKFwidGFiSW5kZXhcIikhKSA6IDA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRhYkluZGV4ID0gMDtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHRhYkluZGV4LCAndGFiSW5kZXgnKVxuICAgIHRoaXMuZ2xvYmFsRGF0YS5pc0FjdGl2ZSA9IHRhYkluZGV4O1xuICAgIFxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfSxcbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59KSJdfQ==