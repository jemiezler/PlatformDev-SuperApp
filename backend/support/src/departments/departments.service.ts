import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department, DepartmentDocument } from './schemas/departments.schema';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name)
    private departmentModel: Model<DepartmentDocument>,
  ) {}

  // Create a new department in MongoDB
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const newDepartment = new this.departmentModel(createDepartmentDto);
    return await newDepartment.save();
  }

  // Fetch all departments
  async findAll(): Promise<Department[]> {
    return await this.departmentModel.find().lean();
  }

  // Fetch a single department by ID
  async findOne(id: string): Promise<Department> {
    const department = await this.departmentModel.findById(id).lean();
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    return department;
  }

  // Update a department by ID
  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const updatedDepartment = await this.departmentModel
      .findByIdAndUpdate(id, updateDepartmentDto, { new: true })
      .lean();

    if (!updatedDepartment) {
      throw new NotFoundException(`Department #${id} not found`);
    }

    return updatedDepartment;
  }

  // Remove a department by ID
  async remove(id: string): Promise<string> {
    const result = await this.departmentModel.findByIdAndDelete(id).lean();

    if (!result) {
      throw new NotFoundException(`Department #${id} not found`);
    }

    return `Department #${id} removed successfully`;
  }
}
