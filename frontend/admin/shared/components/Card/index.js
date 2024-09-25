"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
var react_1 = __importDefault(require("react"));
function Card(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: "card p-8 rounded-3xl glass gap-8" }, children);
}
