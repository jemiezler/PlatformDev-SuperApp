"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    MONGODB_URI: process.env.MONGO_URI,
});
//# sourceMappingURL=configuration.js.map