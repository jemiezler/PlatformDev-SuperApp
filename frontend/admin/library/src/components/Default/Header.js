"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
var link_1 = __importDefault(require("next/link"));
function Header() {
    return (React.createElement("header", { className: "w-full fixed top-0 left-0 h-16 bg-white text-gray-800 shadow-md z-50 flex items-center justify-between px-8" },
        React.createElement("div", { className: "flex items-center" },
            React.createElement("div", { className: "text-lg font-semibold" },
                React.createElement("h3", null,
                    React.createElement(link_1.default, { href: "/" },
                        React.createElement("img", { src: "library.png", alt: "logo", className: "h-8" }))))),
        React.createElement("nav", { className: "flex items-center gap-6" }),
        React.createElement("div", { className: "flex items-center gap-4" })));
}
