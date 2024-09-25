"use strict";
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
exports.default = BookForm;
var react_1 = require("react");
function BookForm(_a) {
    var _b, _c, _d, _e, _f;
    var book = _a.book, onSubmit = _a.onSubmit, onClose = _a.onClose;
    var _g = (0, react_1.useState)({
        en: ((_b = book === null || book === void 0 ? void 0 : book.name) === null || _b === void 0 ? void 0 : _b.en) || "",
        th: ((_c = book === null || book === void 0 ? void 0 : book.name) === null || _c === void 0 ? void 0 : _c.th) || "",
    }), name = _g[0], setName = _g[1];
    var _h = (0, react_1.useState)({
        en: ((_d = book === null || book === void 0 ? void 0 : book.description) === null || _d === void 0 ? void 0 : _d.en) || "",
        th: ((_e = book === null || book === void 0 ? void 0 : book.description) === null || _e === void 0 ? void 0 : _e.th) || "",
    }), description = _h[0], setDescription = _h[1];
    var _j = (0, react_1.useState)((book === null || book === void 0 ? void 0 : book.ISBN) || ""), ISBN = _j[0], setISBN = _j[1];
    var _k = (0, react_1.useState)(null), bookImage = _k[0], setBookImage = _k[1];
    var _l = (0, react_1.useState)((book === null || book === void 0 ? void 0 : book.bookImage) || null), imagePreview = _l[0], setImagePreview = _l[1];
    var _m = (0, react_1.useState)(((_f = book === null || book === void 0 ? void 0 : book.category) === null || _f === void 0 ? void 0 : _f.id) || ""), category = _m[0], setCategory = _m[1];
    var _o = (0, react_1.useState)((book === null || book === void 0 ? void 0 : book.status) || "ready"), status = _o[0], setStatus = _o[1];
    var _p = (0, react_1.useState)((book === null || book === void 0 ? void 0 : book.quantity) || 1), quantity = _p[0], setQuantity = _p[1];
    var _q = (0, react_1.useState)([]), categories = _q[0], setCategories = _q[1];
    (0, react_1.useEffect)(function () {
        function fetchCategories() {
            return __awaiter(this, void 0, void 0, function () {
                var response, result, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("http://localhost:8082/api/book-categories")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            result = _a.sent();
                            console.log("Fetched categories:", result.data);
                            setCategories(result.data);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error("Failed to fetch categories", error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        fetchCategories();
    }, []);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e;
        if (book) {
            setName({
                en: ((_a = book.name) === null || _a === void 0 ? void 0 : _a.en) || "",
                th: ((_b = book.name) === null || _b === void 0 ? void 0 : _b.th) || "",
            });
            setDescription({
                en: ((_c = book.description) === null || _c === void 0 ? void 0 : _c.en) || "",
                th: ((_d = book.description) === null || _d === void 0 ? void 0 : _d.th) || "",
            });
            setISBN(book.ISBN || "");
            setImagePreview(book.bookImage || null);
            setCategory(((_e = book.category) === null || _e === void 0 ? void 0 : _e.id) || "");
            setStatus(book.status || "ready");
            setQuantity(book.quantity || 1);
        }
    }, [book]);
    var handleImageChange = function (e) {
        if (e.target.files && e.target.files[0]) {
            setBookImage(e.target.files[0]);
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };
    var handleCategoryChange = function (e) {
        console.log("Selected category ID:", e.target.value);
        setCategory(e.target.value);
    };
    var handleSubmit = function () {
        var formData = new FormData();
        if (book === null || book === void 0 ? void 0 : book.id) {
            formData.append("id", book.id);
        }
        formData.append("name[th]", name.th);
        formData.append("name[en]", name.en);
        formData.append("description[th]", description.th);
        formData.append("description[en]", description.en);
        if (ISBN) {
            formData.append("ISBN", ISBN);
        }
        else {
            alert("No ISBN");
        }
        if (category) {
            formData.append("category", category);
        }
        else {
            alert("Please select a category");
            return;
        }
        if (["ready", "not ready"].includes(status)) {
            formData.append("status", status);
        }
        else {
            alert("Invalid status value");
            return;
        }
        formData.append("quantity", quantity.toString());
        if (bookImage) {
            formData.append("bookImage", bookImage);
        }
        else if (book === null || book === void 0 ? void 0 : book.bookImage) {
            formData.append("bookImage", book.bookImage);
        }
        console.log("Submitting form data:", Object.fromEntries(formData.entries()));
        onSubmit(formData);
    };
    return (React.createElement("div", { className: "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" },
        React.createElement("div", { className: "bg-white p-6 rounded shadow-lg w-80" },
            React.createElement("h2", { className: "text-xl mb-4" }, book ? "Edit Book" : "Create Book"),
            imagePreview && (React.createElement("div", { className: "mb-4" },
                React.createElement("img", { src: imagePreview, alt: "Book preview", className: "w-full h-40 object-cover" }))),
            React.createElement("input", { type: "file", accept: "image/*", onChange: handleImageChange, className: "border p-2 mb-2 w-full" }),
            React.createElement("input", { type: "text", placeholder: "Name (EN)", value: name.en, onChange: function (e) { return setName(__assign(__assign({}, name), { en: e.target.value })); }, className: "border p-2 mb-2 w-full" }),
            React.createElement("input", { type: "text", placeholder: "Name (TH)", value: name.th, onChange: function (e) { return setName(__assign(__assign({}, name), { th: e.target.value })); }, className: "border p-2 mb-2 w-full" }),
            React.createElement("input", { type: "text", placeholder: "Description (EN)", value: description.en, onChange: function (e) {
                    return setDescription(__assign(__assign({}, description), { en: e.target.value }));
                }, className: "border p-2 mb-2 w-full" }),
            React.createElement("input", { type: "text", placeholder: "Description (TH)", value: description.th, onChange: function (e) {
                    return setDescription(__assign(__assign({}, description), { th: e.target.value }));
                }, className: "border p-2 mb-2 w-full" }),
            React.createElement("input", { type: "text", placeholder: "ISBN", value: ISBN, onChange: function (e) { return setISBN(e.target.value); }, className: "border p-2 mb-2 w-full" }),
            React.createElement("select", { value: category, onChange: handleCategoryChange, className: "border p-2 mb-2 w-full" },
                React.createElement("option", { value: "" }, "Select Category"),
                categories.map(function (cat) { return (React.createElement("option", { key: cat.id, value: cat.id }, cat.name.en)); })),
            React.createElement("select", { value: status, onChange: function (e) { return setStatus(e.target.value); }, className: "border p-2 mb-2 w-full" },
                React.createElement("option", { value: "ready" }, "Ready"),
                React.createElement("option", { value: "not ready" }, "Not Ready")),
            React.createElement("input", { type: "number", min: "1", value: quantity, onChange: function (e) { return setQuantity(parseInt(e.target.value, 10)); }, className: "border p-2 mb-4 w-full" }),
            React.createElement("div", { className: "flex justify-between" },
                React.createElement("button", { onClick: handleSubmit, className: "bg-blue-500 text-white px-4 py-2 rounded" }, "Submit"),
                React.createElement("button", { onClick: onClose, className: "bg-gray-500 text-white px-4 py-2 rounded" }, "Cancel")))));
}
