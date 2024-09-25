"use strict";
"server client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TransactionForm = function (_a) {
    var transaction = _a.transaction, onSubmit = _a.onSubmit, onClose = _a.onClose;
    var _b = (0, react_1.useState)({
        user: { id: "", email: "", username: "", password: "" },
        book: {
            id: "",
            name: { th: "", en: "" },
            description: { th: "", en: "" },
            ISBN: "",
            bookImage: "",
            category: { id: "", name: { th: "", en: "" } },
            status: "",
            quantity: 0,
        },
        status: "borrow" || "return",
        dueDate: "",
        borrowDate: "",
        returnDate: null,
    }), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = (0, react_1.useState)(null), error = _d[0], setError = _d[1];
    (0, react_1.useEffect)(function () {
        if (transaction) {
            setFormData(transaction);
        }
    }, [transaction]);
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var isEditing, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setIsSubmitting(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    isEditing = !!(transaction === null || transaction === void 0 ? void 0 : transaction.id);
                    // Send form data with `username` and `ISBN` as strings, along with the id if editing
                    return [4 /*yield*/, onSubmit({
                            id: isEditing ? transaction.id : undefined, // Include the id for update
                            user: formData.user.username, // Send username as string
                            book: formData.book.ISBN, // Send ISBN as string
                            status: formData.status,
                            dueDate: new Date(formData.dueDate).toISOString(),
                            borrowDate: new Date(formData.borrowDate).toISOString(),
                            returnDate: formData.returnDate
                                ? new Date(formData.returnDate).toISOString()
                                : null,
                        })];
                case 2:
                    // Send form data with `username` and `ISBN` as strings, along with the id if editing
                    _a.sent(); // Type-cast if necessary to avoid TypeScript errors
                    // Reset form data after submission
                    setFormData({
                        user: { id: "", email: "", username: "", password: "" },
                        book: {
                            id: "",
                            name: { th: "", en: "" },
                            description: { th: "", en: "" },
                            ISBN: "",
                            bookImage: "",
                            category: { id: "", name: { th: "", en: "" } },
                            status: "",
                            quantity: 0,
                        },
                        status: "borrow" || "return",
                        dueDate: "",
                        borrowDate: "",
                        returnDate: null,
                    });
                    onClose();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError("Failed to submit transaction. Please check the form inputs.");
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        if (name === "username") {
            setFormData(__assign(__assign({}, formData), { user: __assign(__assign({}, formData.user), { username: value }) }));
        }
        else if (name === "ISBN") {
            setFormData(__assign(__assign({}, formData), { book: __assign(__assign({}, formData.book), { ISBN: value }) }));
        }
        else {
            setFormData(__assign(__assign({}, formData), (_a = {}, _a[name] = value, _a)));
        }
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto" },
        react_1.default.createElement("h2", { className: "text-2xl font-bold text-gray-800 mb-4" }, transaction ? "Edit Transaction" : "Create Transaction"),
        error && react_1.default.createElement("p", { className: "text-red-500" }, error),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "Username"),
            react_1.default.createElement("input", { type: "text", name: "username" // Adjusted name
                , value: formData.user.username, onChange: handleChange, placeholder: "Enter username", required: true, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" })),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "ISBN"),
            react_1.default.createElement("input", { type: "text", name: "ISBN" // Adjusted name
                , value: formData.book.ISBN, onChange: handleChange, placeholder: "Enter ISBN", required: true, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" })),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "Status"),
            react_1.default.createElement("select", { name: "status", value: formData.status, onChange: handleChange, required: true, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" },
                react_1.default.createElement("option", { value: "" }, "Select status"),
                react_1.default.createElement("option", { value: "borrow" }, "Borrow"),
                react_1.default.createElement("option", { value: "return" }, "Return"))),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "Due Date"),
            react_1.default.createElement("input", { type: "datetime-local", name: "dueDate", value: formData.dueDate, onChange: handleChange, required: true, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" })),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "Borrow Date"),
            react_1.default.createElement("input", { type: "datetime-local", name: "borrowDate", value: formData.borrowDate, onChange: handleChange, required: true, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" })),
        formData.status === "return" && (react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("label", { className: "block text-gray-700 font-medium" }, "Return Date"),
            react_1.default.createElement("input", { type: "datetime-local", name: "returnDate", value: formData.returnDate || "", onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500" }))),
        react_1.default.createElement("div", { className: "flex justify-between mt-4" },
            react_1.default.createElement("button", { type: "submit", disabled: isSubmitting, className: "bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" }, isSubmitting ? "Submitting..." : "Submit"),
            react_1.default.createElement("button", { type: "button", onClick: onClose, className: "bg-gray-500 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" }, "Cancel"))));
};
exports.default = TransactionForm;
