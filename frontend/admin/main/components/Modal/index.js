"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Modal = function (_a) {
    var isOpen = _a.isOpen, title = _a.title, children = _a.children, actions = _a.actions;
    (0, react_1.useEffect)(function () {
        var modal = document.getElementById('global_modal');
        if (isOpen) {
            modal === null || modal === void 0 ? void 0 : modal.showModal();
        }
        else {
            modal === null || modal === void 0 ? void 0 : modal.close();
        }
    }, [isOpen]);
    return (React.createElement("dialog", { id: "global_modal", className: "modal modal-bottom sm:modal-middle" },
        React.createElement("div", { className: "modal-box" },
            React.createElement("h3", { className: "font-bold text-lg" }, title),
            React.createElement("div", { className: "py-4" }, children),
            React.createElement("div", { className: "modal-action" }, actions))));
};
exports.default = Modal;
