import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  MessageBuilder,
  ResponseBuilder,
  ResponseMethod,
} from 'src/app/common/utils/response.util';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  private readonly messageBuilder = new MessageBuilder('User');
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return ResponseBuilder(
      HttpStatus.CREATED,
      this.messageBuilder.build(ResponseMethod.create),
      new UserEntity(user),
    );
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(id);
  // }
}
