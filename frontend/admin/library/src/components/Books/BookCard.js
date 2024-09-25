"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookCard;
function BookCard(_a) {
    var _b, _c;
    var book = _a.book, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (React.createElement("div", { className: "max-w-sm w-full h-85 rounded overflow-hidden shadow-lg m-2" },
        React.createElement("img", { className: "w-full h-40 object-cover", src: book.bookImage, alt: "".concat(book.name.en, " cover") }),
        React.createElement("div", { className: "px-4 py-2" },
            React.createElement("div", { className: "font-bold text-lg mb-1" }, book.name.en),
            React.createElement("p", { className: "text-gray-700 text-sm" }, book.description.en)),
        React.createElement("div", { className: "px-4 pt-2 pb-2" },
            React.createElement("span", { className: "inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1" }, ((_c = (_b = book.category) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.en) || "Unknown Category"),
            React.createElement("span", { className: "inline-block rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 ".concat(book.status === "not ready"
                    ? "bg-red-200 text-red-700"
                    : "bg-green-200 text-green-700") },
                "Status: ",
                book.status),
            React.createElement("span", { className: "inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-blue-700" },
                "Quantity: ",
                book.quantity),
            React.createElement("span", { className: "inline-block bg-blue-200 rounded-full px-2 py-1 text-xs font-semibold text-blue-700" },
                "ISBN: ",
                book.ISBN)),
        React.createElement("div", { className: "flex justify-between px-4 py-2" },
            React.createElement("button", { onClick: function () { return onEdit(book); }, className: "bg-yellow-500 text-white px-2 py-1 rounded" }, "Edit"),
            React.createElement("button", { onClick: function () { return onDelete(book.id); }, className: "bg-red-500 text-white px-2 py-1 rounded" }, "Delete"))));
}
