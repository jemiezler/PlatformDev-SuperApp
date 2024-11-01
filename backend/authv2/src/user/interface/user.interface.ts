import { IsString, IsNotEmpty } from 'class-validator';

export class NameDto {
  @IsString()
  @IsNotEmpty()
  first: string;

  @IsString()
  @IsNotEmpty()
  last: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  AGENT = 'AGENT',
  LECTURER = 'LECTURER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface UserLogin {
  userId: string;
  password: string;
}
