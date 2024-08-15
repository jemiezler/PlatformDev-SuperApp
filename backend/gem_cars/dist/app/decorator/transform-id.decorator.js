"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformId = TransformId;
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("mongoose");
function transformer(value, transform) {
    if ((0, mongoose_1.isObjectIdOrHexString)(value)) {
        if (value instanceof mongoose_1.Types.ObjectId)
            return value.toHexString();
        return value;
    }
    return transform(value);
}
function TransformId(transform) {
    return (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return value;
        if (Array.isArray(value)) {
            return value.map((child) => transformer(child, transform));
        }
        return transformer(value, transform);
    });
}
//# sourceMappingURL=transform-id.decorator.js.map