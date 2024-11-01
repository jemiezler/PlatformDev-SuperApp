import { IsString, IsNotEmpty, IsOptional, IsIn } from 'class-validator';
import { UserRole } from 'src/user/interface/user.interface';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsIn(Object.values(UserRole))
  role: UserRole;
}
