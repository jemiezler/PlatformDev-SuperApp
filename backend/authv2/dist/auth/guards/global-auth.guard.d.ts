import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccessTokenService } from '../token/access-token.service';
export declare class GlobalAuthGuard implements CanActivate {
    private readonly accessTokenService;
    constructor(accessTokenService: AccessTokenService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
