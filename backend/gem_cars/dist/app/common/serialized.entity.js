"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializedEntity = void 0;
const class_transformer_1 = require("class-transformer");
const transform_id_decorator_1 = require("../decorator/transform-id.decorator");
class SerializedEntity {
}
exports.SerializedEntity = SerializedEntity;
__decorate([
    (0, class_transformer_1.Expose)({ name: 'id' }),
    (0, transform_id_decorator_1.TransformId)((v) => {
        return v._id.toString();
    }),
    __metadata("design:type", Object)
], SerializedEntity.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], SerializedEntity.prototype, "__v", void 0);
//# sourceMappingURL=serialized.entity.js.map