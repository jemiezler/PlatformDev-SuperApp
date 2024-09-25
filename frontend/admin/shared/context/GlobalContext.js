"use strict";
"use client";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalContext = exports.GlobalProvider = void 0;
var react_1 = __importStar(require("react"));
var GlobalContext = (0, react_1.createContext)(undefined);
var GlobalProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), alerts = _b[0], setAlerts = _b[1];
    var addAlert = function (alert) {
        var newAlert = __assign(__assign({}, alert), { id: Math.random().toString(36).substring(2, 9) });
        setAlerts(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newAlert], false); });
    };
    var removeAlert = function (id) {
        setAlerts(function (prev) { return prev.filter(function (alert) { return alert.id !== id; }); });
    };
    return (react_1.default.createElement(GlobalContext.Provider, { value: { alerts: alerts, setAlerts: setAlerts, addAlert: addAlert, removeAlert: removeAlert } }, children));
};
exports.GlobalProvider = GlobalProvider;
var useGlobalContext = function () {
    var context = (0, react_1.useContext)(GlobalContext);
    if (!context)
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    return context;
};
exports.useGlobalContext = useGlobalContext;
