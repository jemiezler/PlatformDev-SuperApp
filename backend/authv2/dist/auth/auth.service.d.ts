import { LoginDto } from './dto/login.dto';
import { Tokens } from './interfaces/login.interface';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import { AccessTokenService } from './token/access-token.service';
import { RefreshTokenService } from './token/refresh-token.service';
export declare class AuthService {
    private readonly accessTokenService;
    private readonly refreshTokenService;
    private readonly userModel;
    constructor(accessTokenService: AccessTokenService, refreshTokenService: RefreshTokenService, userModel: Model<User>);
    generateToken(user: UserDocument): Promise<Tokens>;
    login(loginDto: LoginDto): Promise<Tokens>;
}
