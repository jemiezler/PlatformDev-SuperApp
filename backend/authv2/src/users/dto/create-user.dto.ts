import {
  IsString,
  IsNotEmpty,
  MinLength,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserFullnameDto, UserRole } from 'src/app/types/user';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ValidateNested()
  @Type(() => UserFullnameDto)
  name: UserFullnameDto;

  @IsEnum(UserRole)
  role: UserRole;
}
