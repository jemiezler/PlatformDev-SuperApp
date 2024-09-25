"use strict";
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
exports.default = RoomForm;
var react_1 = __importStar(require("react"));
function RoomForm(_a) {
    var _this = this;
    var room = _a.room, onSubmit = _a.onSubmit, onClose = _a.onClose;
    var _b = (0, react_1.useState)(0), roomNumber = _b[0], setRoomNumber = _b[1];
    var _c = (0, react_1.useState)(0), floor = _c[0], setFloor = _c[1];
    var _d = (0, react_1.useState)("ready"), status = _d[0], setStatus = _d[1];
    var _e = (0, react_1.useState)(""), type = _e[0], setType = _e[1]; // Changed to string to store MongoDB ID
    var _f = (0, react_1.useState)([]), roomTypes = _f[0], setRoomTypes = _f[1];
    (0, react_1.useEffect)(function () {
        if (room) {
            setRoomNumber(room.room);
            setFloor(room.floor);
            setStatus(room.status);
            setType(room.type.id); // Use ID as string
        }
    }, [room]);
    (0, react_1.useEffect)(function () {
        var fetchRoomTypes = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:8082/api/room-types")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setRoomTypes(data.data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching room types:", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchRoomTypes();
    }, []);
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            event.preventDefault();
            data = {
                id: (room === null || room === void 0 ? void 0 : room.id) || "",
                room: roomNumber,
                floor: floor,
                status: status,
                type: type,
            };
            onSubmit(data);
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" },
        react_1.default.createElement("div", { className: "bg-white p-6 rounded shadow-lg w-full max-w-md" },
            react_1.default.createElement("h2", { className: "text-xl font-bold mb-4" }, room ? "Edit Room" : "Create Room"),
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, "Room Number"),
                    react_1.default.createElement("input", { type: "number", value: roomNumber, onChange: function (e) { return setRoomNumber(Number(e.target.value)); }, className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true })),
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, "Floor"),
                    react_1.default.createElement("input", { type: "number", value: floor, onChange: function (e) { return setFloor(Number(e.target.value)); }, className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true })),
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, "Status"),
                    react_1.default.createElement("select", { value: status, onChange: function (e) { return setStatus(e.target.value); }, className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true },
                        react_1.default.createElement("option", { value: "ready" }, "Ready"),
                        react_1.default.createElement("option", { value: "not ready" }, "Not Ready"))),
                react_1.default.createElement("div", { className: "mb-4" },
                    react_1.default.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, "Room Type"),
                    react_1.default.createElement("select", { value: type, onChange: function (e) { return setType(e.target.value); }, className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true },
                        react_1.default.createElement("option", { value: "", disabled: true }, "Select a room type"),
                        roomTypes.map(function (roomType) { return (react_1.default.createElement("option", { key: roomType.id, value: roomType.id },
                            roomType.name.th,
                            " / ",
                            roomType.name.en)); }))),
                react_1.default.createElement("div", { className: "flex justify-end" },
                    react_1.default.createElement("button", { type: "button", onClick: onClose, className: "bg-gray-500 text-white px-4 py-2 rounded mr-2" }, "Cancel"),
                    react_1.default.createElement("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded" }, room ? "Update" : "Create"))))));
}
