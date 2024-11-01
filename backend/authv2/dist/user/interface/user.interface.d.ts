export declare class NameDto {
    first: string;
    last: string;
}
export declare enum UserRole {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    AGENT = "AGENT",
    LECTURER = "LECTURER"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export interface UserLogin {
    userId: string;
    password: string;
}
