"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    PORT: parseInt(process.env.PORT, 10) || 3000,
    MONGO_URI: process.env.MONGO_URI,
});
//# sourceMappingURL=configuration.js.map