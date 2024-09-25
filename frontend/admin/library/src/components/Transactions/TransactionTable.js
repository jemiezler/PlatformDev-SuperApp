"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransactionTable;
function TransactionTable(_a) {
    var transactions = _a.transactions, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "min-w-full bg-white border border-gray-200 rounded-lg shadow-md" },
            React.createElement("thead", { className: "bg-gray-100 text-gray-600 uppercase text-xs" },
                React.createElement("tr", null,
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "User"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Book"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Status"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Due Date"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Borrow Date"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Return Date"),
                    React.createElement("th", { className: "px-6 py-3 text-center" }, "Actions"))),
            React.createElement("tbody", { className: "text-gray-700" }, transactions.map(function (transaction) {
                var _a, _b, _c, _d, _e;
                var bookName = ((_b = (_a = transaction.book) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.en) || ((_d = (_c = transaction.book) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.th) || "No Data";
                var username = ((_e = transaction.user) === null || _e === void 0 ? void 0 : _e.username) || "Unknown User";
                return (React.createElement("tr", { key: transaction.id, className: "border-b hover:bg-gray-50" },
                    React.createElement("td", { className: "px-6 py-4 text-center" }, username),
                    React.createElement("td", { className: "px-6 py-4 text-center" }, bookName),
                    React.createElement("td", { className: "px-6 py-4 capitalize text-center" }, transaction.status || "-"),
                    React.createElement("td", { className: "px-6 py-4 text-center" }, transaction.dueDate ? new Date(transaction.dueDate).toLocaleDateString() : "-"),
                    React.createElement("td", { className: "px-6 py-4 text-center" }, transaction.borrowDate ? new Date(transaction.borrowDate).toLocaleDateString() : "-"),
                    React.createElement("td", { className: "px-6 py-4 text-center" }, transaction.returnDate ? new Date(transaction.returnDate).toLocaleDateString() : "-"),
                    React.createElement("td", { className: "px-6 py-4 flex space-x-2 text-center" },
                        React.createElement("button", { onClick: function () { return onEdit(transaction); }, className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none" }, "Edit"),
                        React.createElement("button", { onClick: function () { return transaction.id && onDelete(transaction.id); }, className: "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none" }, "Delete"))));
            })))));
}
