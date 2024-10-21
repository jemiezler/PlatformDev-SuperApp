import { UserFullnameDto, UserRole } from 'src/app/types/user';
export declare class CreateUserDto {
    userId: string;
    password: string;
    name: UserFullnameDto;
    role: UserRole;
}
