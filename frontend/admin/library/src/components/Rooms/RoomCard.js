"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RoomCard = function (_a) {
    var _b, _c;
    var room = _a.room, onEdit = _a.onEdit, onDelete = _a.onDelete;
    var roomTypeName = ((_c = (_b = room.type) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.en) || "Unknown Type";
    return (react_1.default.createElement("div", { className: "border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-4" },
        react_1.default.createElement("div", { className: "bg-gray-200 p-4" },
            react_1.default.createElement("h2", { className: "text-xl font-bold text-gray-800" },
                "Room ",
                room.room)),
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement("table", { className: "w-full text-left" },
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", { className: "border-b border-gray-200" },
                        react_1.default.createElement("td", { className: "py-2 font-semibold text-gray-700" }, "Floor:"),
                        react_1.default.createElement("td", { className: "py-2" }, room.floor)),
                    react_1.default.createElement("tr", { className: "border-b border-gray-200" },
                        react_1.default.createElement("td", { className: "py-2 font-semibold text-gray-700" }, "Status:"),
                        react_1.default.createElement("td", { className: "py-2" }, room.status)),
                    react_1.default.createElement("tr", { className: "border-b border-gray-200" },
                        react_1.default.createElement("td", { className: "py-2 font-semibold text-gray-700" }, "Type:"),
                        react_1.default.createElement("td", { className: "py-2" }, roomTypeName))))),
        react_1.default.createElement("div", { className: "bg-gray-100 p-4 flex justify-end space-x-2" },
            react_1.default.createElement("button", { onClick: function () { return onEdit(room); }, className: "bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" }, "Edit"),
            react_1.default.createElement("button", { onClick: function () { return onDelete(room.id); }, className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" }, "Delete"))));
};
exports.default = RoomCard;
