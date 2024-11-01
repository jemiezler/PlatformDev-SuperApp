import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAccessTokenPayload } from '../interfaces/access-token.interface';

@Injectable()
export class AccessTokenService {
  private readonly secretKey: string = process.env.JWT_SECRET;
  constructor(private readonly jwtService: JwtService) {}

  async generate(payload: IAccessTokenPayload): Promise<string> {
    const token = await this.jwtService.signAsync(payload, {
      secret: this.secretKey,
    });
    return token;
  }

  async verify(token: string): Promise<IAccessTokenPayload> {
    try {
      const payload = await this.jwtService.verifyAsync<IAccessTokenPayload>(
        token,
        {
          secret: this.secretKey,
        },
      );
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
