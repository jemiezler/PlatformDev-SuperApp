import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LanguageDTO {
  @ApiProperty({ description: 'Value in Thai' })
  @IsString()
  @IsNotEmpty()
  th: string;

  @ApiProperty({ description: 'Value in English' })
  @IsString()
  @IsNotEmpty()
  en: string;
}
