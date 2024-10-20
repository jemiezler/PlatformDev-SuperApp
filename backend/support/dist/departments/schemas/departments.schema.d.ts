import { Document, ObjectId } from 'mongoose';
export type DepartmentDocument = Department & Document;
export declare class Department {
    name: {
        th: string;
        en: string;
    };
    acronym: {
        th: string;
        en: string;
    };
    description: {
        th: string;
        en: string;
    };
    manager_id: ObjectId;
}
export declare const DepartmentSchema: import("mongoose").Schema<Department, import("mongoose").Model<Department, any, any, any, Document<unknown, any, Department> & Department & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Department, Document<unknown, {}, import("mongoose").FlatRecord<Department>> & import("mongoose").FlatRecord<Department> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
