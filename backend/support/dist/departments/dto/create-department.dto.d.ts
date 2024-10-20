import { ObjectId } from 'mongoose';
declare class LanguageDTO {
    th: string;
    en: string;
}
export declare class CreateDepartmentDto {
    readonly name: LanguageDTO;
    readonly acronym: LanguageDTO;
    readonly description: LanguageDTO;
    readonly manager_id?: ObjectId;
}
export {};
