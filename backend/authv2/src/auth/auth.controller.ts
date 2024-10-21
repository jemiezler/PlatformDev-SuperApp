import {
  Controller,
  Post,
  Body,
  ClassSerializerInterceptor,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  MessageBuilder,
  ResponseBuilder,
  ResponseMethod,
} from 'src/app/common/utils/response.util';

@Controller('auth')
export class AuthController {
  private readonly messageBuilder = new MessageBuilder('User');
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Public()
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
}
