import { Module } from '@nestjs/common';
import { AccessTokenService } from './access-token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('accessToken.secret'),
        signOptions: {
          expiresIn: configService.get<string>('accessToken.expiresIn'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AccessTokenService],
  exports: [AccessTokenService],
})
export class AccessTokenModule {}
