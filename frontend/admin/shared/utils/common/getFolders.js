"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolders = getFolders;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function getFolders() {
    var appDirectory = path_1.default.join(process.cwd(), 'app');
    var folders = fs_1.default.readdirSync(appDirectory, { withFileTypes: true })
        .filter(function (dirent) { return dirent.isDirectory(); }) // Only get directories
        .map(function (dirent) { return dirent.name; });
    return folders;
}
