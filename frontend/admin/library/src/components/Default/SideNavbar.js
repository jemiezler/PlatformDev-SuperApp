"use strict";
"use client";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SideNavbar;
var link_1 = __importDefault(require("next/link"));
var bi_1 = require("react-icons/bi");
var fa_1 = require("react-icons/fa");
var hi_1 = require("react-icons/hi");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var ri_1 = require("react-icons/ri");
var si_1 = require("react-icons/si");
function SideNavbar() {
    var _this = this;
    var handleLogout = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:8082/api/auth/logout", {
                            method: "POST",
                            credentials: "include",
                        })];
                case 1:
                    _a.sent();
                    // Force a full page reload to the login page
                    window.location.href = "/login";
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Logout failed:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("aside", { className: "w-[220px] max-w-xs h-[calc(100vh-4rem)] fixed left-0 top-16 z-40 bg-white text-gray border-r border-gray-200 shadow-lg flex flex-col" },
        React.createElement("div", { className: "px-4 py-4 flex-1 overflow-y-auto" },
            React.createElement("div", { className: "mt-8" },
                React.createElement("nav", { className: "flex flex-col gap-3" },
                    React.createElement(link_1.default, { href: "/", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(hi_1.HiChartPie, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Dashboard")),
                    React.createElement(link_1.default, { href: "/transactions", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(ri_1.RiCalendarTodoFill, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Transactions management")),
                    React.createElement(link_1.default, { href: "/books", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(io5_1.IoBook, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Books management")),
                    React.createElement(link_1.default, { href: "/rooms", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(md_1.MdMeetingRoom, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Rooms management")),
                    React.createElement(link_1.default, { href: "/reservations", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(ri_1.RiReservedFill, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Reservations management")),
                    React.createElement(link_1.default, { href: "/categories", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(bi_1.BiSolidCategory, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Categories management")),
                    React.createElement(link_1.default, { href: "/users", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(fa_1.FaUserCog, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Users management")),
                    React.createElement(link_1.default, { href: "/renews", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(md_1.MdAutorenew, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Renews management")),
                    React.createElement(link_1.default, { href: "/room-types", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(bi_1.BiSolidCategoryAlt, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Room-Type")),
                    React.createElement(link_1.default, { href: "/recommend-forms", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                        React.createElement(si_1.SiGoogleforms, { className: "text-lg" }),
                        React.createElement("span", { className: "text-base" }, "Recommend-Form"))))),
        React.createElement("div", { className: "p-4 border-t border-gray-200" },
            React.createElement(link_1.default, { href: "/profile", className: "flex items-center gap-3 p-3 rounded-md text-gray-400 hover:bg-red-700 hover:text-white transition-colors" },
                React.createElement(fa_1.FaRegUserCircle, { className: "text-lg" }),
                React.createElement("span", { className: "text-base" }, "Profile")),
            React.createElement("button", { onClick: handleLogout, className: "w-full text-gray-400 py-2 px-4 rounded-lg mt-2 hover:bg-gray-700 hover:text-white transition duration-300" }, "Logout"))));
}
