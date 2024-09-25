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
exports.default = RoomPage;
var react_1 = require("react");
var RoomForm_1 = __importDefault(require("../../components/Rooms/RoomForm"));
function RoomPage() {
    var _this = this;
    var _a = (0, react_1.useState)([]), rooms = _a[0], setRooms = _a[1];
    var _b = (0, react_1.useState)(null), selectedRoom = _b[0], setSelectedRoom = _b[1];
    var _c = (0, react_1.useState)(false), isFormOpen = _c[0], setIsFormOpen = _c[1];
    (0, react_1.useEffect)(function () {
        fetchRooms();
    }, []);
    var fetchRooms = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:8082/api/rooms")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setRooms(data.data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching rooms:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleCreate = function () {
        setSelectedRoom(null);
        setIsFormOpen(true);
    };
    var handleEdit = function (room) {
        setSelectedRoom(room);
        setIsFormOpen(true);
    };
    var handleDelete = function (roomId) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:8082/api/rooms/".concat(roomId), {
                            method: "DELETE",
                        })];
                case 1:
                    _a.sent();
                    fetchRooms();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error deleting room:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var method, endpoint, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    method = data.id ? "PATCH" : "POST";
                    endpoint = data.id
                        ? "http://localhost:8082/api/rooms/".concat(data.id)
                        : "http://localhost:8082/api/rooms";
                    return [4 /*yield*/, fetch(endpoint, {
                            method: method,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    _a.sent();
                    fetchRooms(); // Refresh the room list after submission
                    setIsFormOpen(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error submitting room data:", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement("h1", { className: "text-2xl font-bold mb-4" }, "Room Management"),
        React.createElement("button", { onClick: handleCreate, className: "bg-blue-500 text-white px-4 py-2 rounded mb-4" }, "Create New Room"),
        React.createElement("ul", null, rooms.map(function (room) { return (React.createElement("li", { key: room.id, className: "mb-2 flex justify-between items-center" },
            React.createElement("div", null,
                "Room ",
                room.room,
                ", Floor ",
                room.floor,
                " - ",
                room.status,
                " (",
                room.type.name.en,
                ")"),
            React.createElement("div", null,
                React.createElement("button", { onClick: function () { return handleEdit(room); }, className: "bg-yellow-500 text-white px-4 py-2 rounded mr-2" }, "Edit"),
                React.createElement("button", { onClick: function () { return handleDelete(room.id); }, className: "bg-red-500 text-white px-4 py-2 rounded" }, "Delete")))); })),
        isFormOpen && (React.createElement(RoomForm_1.default, { room: selectedRoom, onSubmit: handleSubmit, onClose: function () { return setIsFormOpen(false); } }))));
}
