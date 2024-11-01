import { HydratedDocument, Types } from 'mongoose';
import { UserRole, UserStatus } from 'src/user/interface/user.interface';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: {
        first: string;
        last: string;
    };
    username: string;
    password: string;
    refreshToken: string;
    status: UserStatus;
    role: UserRole;
    _id: Types.ObjectId | string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string | Types.ObjectId;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string | Types.ObjectId;
}> & {
    __v?: number;
}>;
