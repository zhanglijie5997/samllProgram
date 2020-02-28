"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var util_1 = require("../util");
var base_1 = require("../base/base");
exports.axios = function (url, params) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(util_1.setting + url, 'url');
                return [4, wx.request({
                        url: util_1.setting + url,
                        data: __assign({}, params),
                        method: "POST",
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: function (res) {
                            console.log(res.data);
                            return res.data;
                        },
                        fail: function () {
                            base_1.toast("showToast", {
                                icon: "none",
                                title: "网络错误",
                                success: function () { },
                                fail: function () { },
                            });
                        }
                    })];
            case 1:
                data = _a.sent();
                return [2, data];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJheGlvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsZ0NBQWlDO0FBQ2pDLHFDQUFxQztBQU14QixRQUFBLEtBQUssR0FBRyxVQUFPLEdBQVcsRUFBRSxNQUFXOzs7OztnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFPLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixXQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLEdBQUcsRUFBRSxjQUFPLEdBQUcsR0FBRzt3QkFDbEIsSUFBSSxlQUNHLE1BQU0sQ0FDWjt3QkFDRCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxNQUFNLEVBQUU7NEJBQ0osY0FBYyxFQUFFLG1DQUFtQzt5QkFDdEQ7d0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBbUQ7NEJBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUN0QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ3BCLENBQUM7d0JBQ0QsSUFBSSxFQUFFOzRCQUNGLFlBQUssQ0FBQyxXQUFXLEVBQUM7Z0NBQ2QsSUFBSSxFQUFFLE1BQU07Z0NBQ1osS0FBSyxFQUFFLE1BQU07Z0NBQ2IsT0FBTyxnQkFBSSxDQUFDO2dDQUNaLElBQUksZ0JBQUksQ0FBQzs2QkFDWixDQUFDLENBQUE7d0JBQ04sQ0FBQztxQkFDSixDQUFDLEVBQUE7O2dCQXJCSSxJQUFJLEdBQUcsU0FxQlg7Z0JBQ0YsV0FBTyxJQUFJLEVBQUM7OztLQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBAYXV0aG9yICB6aGFuZ2xpamllXG4gKiAgQHZlcnNpb24gMS4wLjBcbiAqL1xuaW1wb3J0IHsgc2V0dGluZyB9IGZyb20gXCIuLi91dGlsXCJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIi4uL2Jhc2UvYmFzZVwiO1xuXG4vKiogYXhpb3Mg6K+35rGCXG4gKiAgQHBhcmFtIHVybCAgICAg6Lev5b6EIFxuICogIEBwYXJhbSBwYXJhbXMgIOWPguaVsFxuICovXG5leHBvcnQgY29uc3QgYXhpb3MgPSBhc3luYyAodXJsOiBzdHJpbmcsIHBhcmFtczogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coc2V0dGluZyArIHVybCwgJ3VybCcpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBzZXR0aW5nICsgdXJsLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XG4gICAgICAgIH0sICBcbiAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdChcInNob3dUb2FzdFwiLHtcbiAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLnvZHnu5zplJnor69cIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge30sXG4gICAgICAgICAgICAgICAgZmFpbCgpIHt9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufSJdfQ==