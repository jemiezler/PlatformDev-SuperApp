import { JwtService } from '@nestjs/jwt';
import { IAccessTokenPayload } from '../interfaces/access-token.interface';
export declare class AccessTokenService {
    private readonly jwtService;
    private readonly secretKey;
    constructor(jwtService: JwtService);
    generate(payload: IAccessTokenPayload): Promise<string>;
    verify(token: string): Promise<IAccessTokenPayload>;
}
