import { IdTransform } from 'src/app/lib/id.transform';
export declare class UserEntity extends IdTransform {
    name?: {
        first: string;
        last: string;
    };
    password: string;
    refreshToken: string;
    get fullName(): string;
    constructor(partial: Partial<UserEntity>);
}
