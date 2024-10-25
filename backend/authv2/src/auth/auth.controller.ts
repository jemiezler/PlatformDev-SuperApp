import {
  Controller,
  Post,
  Body,
  ClassSerializerInterceptor,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  MessageBuilder,
  ResponseBuilder,
  ResponseMethod,
} from 'src/app/common/utils/response.util';
import { LoginDto } from './dto/login.dto';
import { Roles } from 'src/app/decorators/roles.decorator';
import { UserRole } from 'src/app/types/user';
import { Public } from 'src/app/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  private readonly messageBuilder = new MessageBuilder('User');
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Roles(UserRole.ADMIN)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return ResponseBuilder(
      HttpStatus.CREATED,
      this.messageBuilder.build(ResponseMethod.create),
      new UserEntity(user),
    );
  }

  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto);
    return ResponseBuilder(HttpStatus.OK, 'OK', {
      token,
    });
  }
}
