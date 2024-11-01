import { UserRole } from 'src/user/interface/user.interface';
export interface IAccessTokenPayload {
    id: string;
    username: string;
    role: UserRole;
}
