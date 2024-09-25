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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransactionsPage;
var react_1 = require("react");
var TransactionForm_1 = __importDefault(require("../../components/Transactions/TransactionForm"));
var TransactionTable_1 = __importDefault(require("../../components/Transactions/TransactionTable"));
var apiUrl = "http://localhost:8082/api/transactions";
var apiBookUrl = "http://localhost:8082/api/books";
var apiUserUrl = "http://localhost:8082/api/users";
function fetchTransaction() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch transactions");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiBookUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch books");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUserUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch users");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function TransactionsPage() {
    var _this = this;
    var _a = (0, react_1.useState)([]), transactions = _a[0], setTransactions = _a[1];
    var _b = (0, react_1.useState)([]), books = _b[0], setBooks = _b[1];
    var _c = (0, react_1.useState)([]), users = _c[0], setUsers = _c[1];
    var _d = (0, react_1.useState)(null), selectedTransaction = _d[0], setSelectedTransaction = _d[1];
    var _e = (0, react_1.useState)(false), showForm = _e[0], setShowForm = _e[1];
    var _f = (0, react_1.useState)("borrow"), activeTab = _f[0], setActiveTab = _f[1];
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var fetchedTransactions, fetchedBooks, fetchedUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchTransaction()];
                    case 1:
                        fetchedTransactions = _a.sent();
                        return [4 /*yield*/, fetchBooks()];
                    case 2:
                        fetchedBooks = _a.sent();
                        return [4 /*yield*/, fetchUsers()];
                    case 3:
                        fetchedUsers = _a.sent();
                        setTransactions(fetchedTransactions);
                        setBooks(fetchedBooks);
                        setUsers(fetchedUsers);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    var handleEdit = function (transaction) {
        setSelectedTransaction(transaction);
        setShowForm(true);
    };
    var handleDelete = function (transactionId) { return __awaiter(_this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("".concat(apiUrl, "/").concat(transactionId), {
                            method: "DELETE",
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to delete transaction");
                    }
                    setTransactions(transactions.filter(function (t) { return t.id !== transactionId; }));
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleFormSubmit = function (formData) { return __awaiter(_this, void 0, void 0, function () {
        var method, url, response, result_1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    method = formData.id ? "PATCH" : "POST";
                    url = apiUrl + (formData.id ? "/".concat(formData.id) : "");
                    return [4 /*yield*/, fetch(url, {
                            method: method,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to ".concat(method === "POST" ? "create" : "update", " transaction"));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result_1 = _a.sent();
                    if (method === "POST") {
                        setTransactions(__spreadArray(__spreadArray([], transactions, true), [result_1.data], false));
                    }
                    else {
                        setTransactions(transactions.map(function (t) { return (t.id === result_1.data.id ? result_1.data : t); }));
                    }
                    setShowForm(false);
                    setSelectedTransaction(null);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleFormClose = function () {
        setShowForm(false);
        setSelectedTransaction(null);
    };
    var handleTabClick = function (tab) {
        setActiveTab(tab);
    };
    // กรอง transactions ตาม status (borrow หรือ return)
    var filteredTransactions = transactions.filter(function (transaction) {
        return activeTab === "borrow" ? transaction.status === "borrow" : transaction.status === "return";
    });
    return (React.createElement("div", { className: "min-h-screen bg-gray-100 p-6" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h1", { className: "text-3xl font-bold mb-6 text-gray-800" }, "Transactions"),
            React.createElement("div", { className: "h-16" },
                React.createElement("nav", { className: "bg-blue-500 w-full h-12 flex flex-row gap-9 justify-center" },
                    React.createElement("button", { onClick: function () { return handleTabClick("borrow"); }, className: "item-center flex hover:bg-blue-700 text-white transition-colors px-4 py-2 ".concat(activeTab === "borrow" ? "bg-black text-white" : "") }, "Borrow"),
                    React.createElement("button", { onClick: function () { return handleTabClick("return"); }, className: "item-center flex hover:bg-blue-700 text-white transition-colors px-4 py-2 ".concat(activeTab === "return" ? "bg-black text-white" : "") }, "Return"))),
            React.createElement("button", { onClick: function () { return setShowForm(true); }, className: "bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6" }, "Create New Transaction"),
            showForm && (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
                React.createElement("div", { className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" },
                    React.createElement(TransactionForm_1.default, { transaction: selectedTransaction, onSubmit: handleFormSubmit, onClose: handleFormClose, books: books, users: users })))),
            filteredTransactions.length > 0 ? (React.createElement(TransactionTable_1.default, { transactions: filteredTransactions, onEdit: handleEdit, onDelete: handleDelete })) : (React.createElement("div", { className: "text-center text-gray-500" }, "No transactions available.")))));
}
