import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { LanguageDTO } from 'src/app/helper/language.dto';

export class CreateDepartmentDto {
  @ApiProperty({ description: 'Department name in both Thai and English' })
  @ValidateNested()
  @Type(() => LanguageDTO)
  readonly name: LanguageDTO;

  @ApiProperty({ description: 'Department acronym in both Thai and English' })
  @ValidateNested()
  @Type(() => LanguageDTO)
  readonly acronym: LanguageDTO;

  @ApiProperty({
    description: 'Department description in both Thai and English',
  })
  @ValidateNested()
  @Type(() => LanguageDTO)
  readonly description: LanguageDTO;

  @ApiProperty({
    description: 'Manager ID for the department',
    required: false,
  })
  @IsOptional()
  readonly manager_id?: ObjectId;
}
