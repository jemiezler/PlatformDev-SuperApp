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
exports.CreateDepartmentDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class LanguageDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value in Thai' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LanguageDTO.prototype, "th", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Value in English' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LanguageDTO.prototype, "en", void 0);
class CreateDepartmentDto {
}
exports.CreateDepartmentDto = CreateDepartmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department name in both Thai and English' }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LanguageDTO),
    __metadata("design:type", LanguageDTO)
], CreateDepartmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department acronym in both Thai and English' }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LanguageDTO),
    __metadata("design:type", LanguageDTO)
], CreateDepartmentDto.prototype, "acronym", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Department description in both Thai and English',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LanguageDTO),
    __metadata("design:type", LanguageDTO)
], CreateDepartmentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Manager ID for the department',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateDepartmentDto.prototype, "manager_id", void 0);
//# sourceMappingURL=create-department.dto.js.map