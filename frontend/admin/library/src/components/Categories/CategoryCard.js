"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryCard;
function CategoryCard(_a) {
    var category = _a.category, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (React.createElement("div", { className: "max-w-sm w-full h-85 rounded overflow-hidden shadow-lg m-2" },
        React.createElement("div", { className: "px-4 py-2" },
            React.createElement("div", { className: "font-bold text-lg mb-1" }, category.name.th),
            React.createElement("p", { className: "text-gray-700 text-sm" }, category.name.en)),
        React.createElement("div", { className: "px-4 pt-2 pb-2" }),
        React.createElement("div", { className: "flex justify-between px-4 py-2" },
            React.createElement("button", { onClick: function () { return onEdit(category); }, className: "bg-yellow-500 text-white px-2 py-1 rounded" }, "Edit"),
            React.createElement("button", { onClick: function () { return onDelete(category.id); }, className: "bg-red-500 text-white px-2 py-1 rounded" }, "Delete"))));
}
