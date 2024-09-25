"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var Button_1 = __importDefault(require("@/components/Button"));
var Modal_1 = __importDefault(require("@/components/Modal"));
var GlobalContext_1 = require("@/context/GlobalContext");
var Alert_1 = require("@/utils/types/Alert");
var react_1 = require("react");
function Home() {
    var addAlert = (0, GlobalContext_1.useGlobalContext)().addAlert;
    var handleAddAlert = function (iconName, title, message, type) {
        var newAlert = {
            title: title,
            message: message,
            buttonText: "X",
            iconName: iconName,
            type: type,
            id: Math.random().toString(36).substring(2, 9),
        };
        addAlert(newAlert);
    };
    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setModalOpen = _a[1];
    var handleOpenModal = function () { return setModalOpen(true); };
    var handleCloseModal = function () { return setModalOpen(false); };
    return (React.createElement("div", { className: "flex items-start justify-items-start gap-4" },
        React.createElement("div", { className: "flex flex-col items-center gap-2 border border-dashed border-2 rounded p-4" },
            React.createElement("h1", null, "Alert"),
            React.createElement("button", { className: "btn w-full", onClick: function () { return handleAddAlert("CheckIcon", "Success", "Example MessageExample MessageExample MessageExample MessageExample MessageExample MessageExample Message", Alert_1.tAlertType.SUCCESS); } }, "Success Alert"),
            React.createElement("button", { className: "btn w-full", onClick: function () { return handleAddAlert("InformationCircleIcon", "Warning", "Example Message", Alert_1.tAlertType.WARNING); } }, "Warning Alert"),
            React.createElement("button", { className: "btn w-full", onClick: function () { return handleAddAlert("XCircleIcon", "Example Message", "Error", Alert_1.tAlertType.ERROR); } }, "Error Alert")),
        React.createElement("div", { className: "flex flex-col items-center gap-2 border border-dashed border-2 rounded p-4" },
            React.createElement("h1", null, "Modal"),
            React.createElement("div", null,
                React.createElement("button", { className: "btn", onClick: handleOpenModal }, "Open Modal"),
                React.createElement(Modal_1.default, { isOpen: isModalOpen, onClose: handleCloseModal, title: "Hello!", actions: React.createElement(React.Fragment, null,
                        React.createElement(Button_1.default, { onClick: handleCloseModal }, "Submit"),
                        React.createElement(Button_1.default, { onClick: handleCloseModal }, "Cancel")) },
                    React.createElement("p", null, "click the button below to close"))))));
}
