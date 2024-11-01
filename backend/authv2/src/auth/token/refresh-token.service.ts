import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IRefreshTokenPayload } from '../interfaces/refresh-token.interface';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generate(payload: IRefreshTokenPayload): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async verify(token: string): Promise<IRefreshTokenPayload> {
    try {
      const payload =
        await this.jwtService.verifyAsync<IRefreshTokenPayload>(token);
      return payload;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
