import { NameDto, UserRole, UserStatus } from '../interface/user.interface';

export class CreateUserDto {
  readonly name: NameDto;
  readonly username: string;
  readonly password: string;
  readonly refreshToken: string;
  readonly status: UserStatus;
  readonly role: UserRole;
}
