import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Tokens } from './interfaces/login.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import { AccessTokenService } from './token/access-token.service';
import { RefreshTokenService } from './token/refresh-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly accessTokenService: AccessTokenService,
    private readonly refreshTokenService: RefreshTokenService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async generateToken(user: UserDocument): Promise<Tokens> {
    // console.log(user);
    const accessToken = await this.accessTokenService.generate({
      id: user._id.toString(),
      username: user.username,
      role: user.role,
    });

    const refreshToken = await this.refreshTokenService.generate({
      token: accessToken,
      id: user._id.toString(),
    });
    return { accessToken, refreshToken };
  }

  async login(loginDto: LoginDto): Promise<Tokens> {
    const { username, password } = loginDto;
    const user = await this.userModel.findOne(
      { username },
      { password: true, username: true, refreshToken: true, role: true },
    );

    if (!user || !user.password || !user.refreshToken) {
      throw new UnauthorizedException('Invalid user credentials');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid user credentials');
    }

    const { accessToken, refreshToken } = await this.generateToken(user);
    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  }
}
