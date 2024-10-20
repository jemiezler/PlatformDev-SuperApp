import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<import("./schemas/departments.schema").Department>;
    findAll(): Promise<import("./schemas/departments.schema").Department[]>;
    findOne(id: string): Promise<import("./schemas/departments.schema").Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<import("./schemas/departments.schema").Department>;
    remove(id: string): Promise<string>;
}
