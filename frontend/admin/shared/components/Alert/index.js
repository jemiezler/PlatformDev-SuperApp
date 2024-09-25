"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = Alert;
exports.GlobalAlert = GlobalAlert;
var Icons = __importStar(require("@heroicons/react/24/outline"));
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var GlobalContext_1 = require("@/context/GlobalContext");
var alertStyles = {
    success: {
        backgroundColor: '#d4edda',
        color: '#155724',
    },
    error: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
    },
    info: {
        backgroundColor: '#cce5ff',
        color: '#004085',
    },
    warning: {
        backgroundColor: '#fff3cd',
        color: '#856404',
    },
    default: {
        backgroundColor: '#e2e3e5',
        color: '#383d41',
    },
};
function Alert(_a) {
    var title = _a.title, message = _a.message, buttonText = _a.buttonText, iconName = _a.iconName, onClose = _a.onClose, type = _a.type;
    var Icon = Icons[iconName];
    var _b = (0, react_1.useState)(false), isExiting = _b[0], setIsExiting = _b[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setIsExiting(true);
            setTimeout(onClose, 300);
        }, 3000);
        return function () { return clearTimeout(timer); };
    }, [onClose]);
    var handleClose = function () {
        setIsExiting(true);
        setTimeout(onClose, 300);
    };
    var alertStyle = alertStyles[type] || alertStyles.default;
    return (React.createElement(framer_motion_1.motion.div, { role: "alert", className: 'alert shadow-lg max-w-md w-screen', style: alertStyle, initial: { opacity: 0, translateX: 100 }, animate: { opacity: isExiting ? 0 : 1, translateX: isExiting ? 100 : 0 }, exit: { opacity: 0, translateX: 100 }, transition: { duration: 0.3, ease: "easeInOut" } },
        React.createElement("div", { className: "w-6" }, Icon && React.createElement(Icon, { className: "h-6 w-6" })),
        React.createElement("div", null,
            React.createElement("h3", { className: "font-bold" }, title),
            React.createElement("div", { className: "text-xs" }, message)),
        React.createElement("button", { className: 'btn btn-ghost btn-sm', onClick: handleClose }, buttonText)));
}
function GlobalAlert() {
    var _a = (0, GlobalContext_1.useGlobalContext)(), alerts = _a.alerts, removeAlert = _a.removeAlert;
    return (React.createElement("div", { className: "fixed top-4 right-4 z-50 flex flex-col space-y-2" }, alerts.map(function (alert) { return (React.createElement(Alert, { key: alert.id, title: alert.title, message: alert.message, buttonText: alert.buttonText, iconName: alert.iconName, onClose: function () { return removeAlert(alert.id); }, id: alert.id, type: alert.type })); })));
}
