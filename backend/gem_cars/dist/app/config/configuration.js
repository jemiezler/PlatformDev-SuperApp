"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: process.env.MONGODB_URI,
});
//# sourceMappingURL=configuration.js.map