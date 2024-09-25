"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
function Button(_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement("button", { className: "btn rounded-full", onClick: onClick }, children));
}
