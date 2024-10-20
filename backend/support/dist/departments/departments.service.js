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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const departments_schema_1 = require("./schemas/departments.schema");
let DepartmentsService = class DepartmentsService {
    constructor(departmentModel) {
        this.departmentModel = departmentModel;
    }
    async create(createDepartmentDto) {
        const newDepartment = new this.departmentModel(createDepartmentDto);
        return await newDepartment.save();
    }
    async findAll() {
        return await this.departmentModel.find().exec();
    }
    async findOne(id) {
        const department = await this.departmentModel.findById(id).exec();
        if (!department) {
            throw new common_1.NotFoundException(`Department #${id} not found`);
        }
        return department;
    }
    async update(id, updateDepartmentDto) {
        const updatedDepartment = await this.departmentModel
            .findByIdAndUpdate(id, updateDepartmentDto, { new: true })
            .exec();
        if (!updatedDepartment) {
            throw new common_1.NotFoundException(`Department #${id} not found`);
        }
        return updatedDepartment;
    }
    async remove(id) {
        const result = await this.departmentModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Department #${id} not found`);
        }
        return `Department #${id} removed successfully`;
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(departments_schema_1.Department.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map