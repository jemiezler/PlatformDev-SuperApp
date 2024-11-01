import { JwtService } from '@nestjs/jwt';
import { IRefreshTokenPayload } from '../interfaces/refresh-token.interface';
export declare class RefreshTokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generate(payload: IRefreshTokenPayload): Promise<string>;
    verify(token: string): Promise<IRefreshTokenPayload>;
}
