"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RoomTypeTable;
function RoomTypeTable(_a) {
    var roomType = _a.roomType, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "min-w-full bg-white border border-gray-200 rounded-lg shadow-md" },
            React.createElement("thead", { className: "bg-gray-100 text-gray-600 uppercase text-xs" },
                React.createElement("tr", null,
                    React.createElement("th", { className: "px-6 py-3 text-left" }, "TH"),
                    React.createElement("th", { className: "px-6 py-3 text-left" }, "EN"))),
            React.createElement("tbody", { className: "text-gray-700" },
                React.createElement("tr", { className: "border-b hover:bg-gray-50" },
                    React.createElement("td", { className: "px-6 py-4" }, roomType.name.th),
                    React.createElement("td", { className: "px-6 py-4" }, roomType.name.en),
                    React.createElement("td", { className: "px-6 py-4 flex space-x-2" },
                        React.createElement("button", { onClick: function () { return onEdit(roomType); }, className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" }, "Edit"),
                        React.createElement("button", { onClick: function () { return onDelete(roomType.id); }, className: "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" }, "Delete")))))));
}
