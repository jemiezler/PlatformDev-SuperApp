"use strict";
"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = NavBar;
exports.SideBar = SideBar;
var navigation_1 = require("next/navigation");
var Icons = __importStar(require("@heroicons/react/24/outline"));
function NavBar() {
    var router = (0, navigation_1.useRouter)();
    return (React.createElement("div", { className: "navbar h-1 border-b dark:border-neutral-800 backdrop-blur-md" },
        React.createElement("div", { className: "flex-1" },
            React.createElement("a", { className: "btn btn-ghost text-xl", onClick: function () { return router.push('/'); } }, "University Management")),
        React.createElement("div", { className: "flex-none" },
            React.createElement("div", { className: "dropdown dropdown-end" },
                React.createElement("div", { tabIndex: 0, role: "button", className: "btn btn-ghost btn-circle avatar" },
                    React.createElement("div", { className: "w-10 rounded-full" },
                        React.createElement("img", { alt: "Tailwind CSS Navbar component", src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }))),
                React.createElement("ul", { tabIndex: 0, className: "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" },
                    React.createElement("li", null,
                        React.createElement("a", { className: "justify-between" },
                            "Profile",
                            React.createElement("span", { className: "badge" }, "New"))),
                    React.createElement("li", null,
                        React.createElement("a", null, "Settings")),
                    React.createElement("li", null,
                        React.createElement("a", null, "Logout")))))));
}
function SideBar(_a) {
    var _b = _a.folders, folders = _b === void 0 ? [] : _b;
    var pathname = (0, navigation_1.usePathname)(); // Get the current pathname
    return (React.createElement("div", { style: { height: 'calc(100vh - 4rem)' }, className: "menu border-r dark:border-neutral-800 backdrop-blur-md overflow-y-auto" },
        React.createElement("div", { className: "text-2xl font-semibold py-4 mx-4" }, "Menu"),
        React.createElement("ul", { className: "font-medium" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: pathname === '/' ? 'active' : '' },
                    React.createElement("div", { className: "p-2 border rounded-full" },
                        React.createElement(Icons.HomeIcon, { width: 20, strokeWidth: 1.5 })),
                    " Home")),
            folders.length > 0 ? (folders.map(function (folder) {
                // Capitalize the first letter for display
                var capitalizedFolder = folder.charAt(0).toUpperCase() + folder.slice(1);
                var iconName = "".concat(capitalizedFolder, "Icon"); // Cast to IconNames
                var IconComponent = Icons[iconName]; // Access the icon
                return (React.createElement("li", { key: folder },
                    React.createElement("a", { href: "/".concat(folder), className: pathname === "/".concat(folder) ? 'active' : '' },
                        React.createElement("div", { className: "p-2 border rounded-full" }, IconComponent ? React.createElement(IconComponent, { width: 20, strokeWidth: 1.5 }) : React.createElement(Icons.EllipsisVerticalIcon, { width: 20, strokeWidth: 1.5 })),
                        capitalizedFolder,
                        " ")));
            })) : (React.createElement("li", null, "No folders available")))));
}
