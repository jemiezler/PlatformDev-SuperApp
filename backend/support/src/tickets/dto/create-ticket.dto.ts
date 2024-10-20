import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ValidateNested,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
} from 'class-validator';
import { LanguageDTO } from 'src/app/helper/language.dto';

export enum TicketStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  IN_PROGRESS = 'in progress',
}

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTicketDto {
  @ApiProperty({ description: 'Ticket subject in both Thai and English' })
  @ValidateNested()
  @Type(() => LanguageDTO)
  readonly subject: LanguageDTO;

  @ApiProperty({
    description: 'Detailed description of the issue in both Thai and English',
  })
  @ValidateNested()
  @Type(() => LanguageDTO)
  readonly description: LanguageDTO;

  @ApiProperty({ description: 'Timestamp when the ticket was created' })
  @IsDate()
  readonly created_at: Date;

  @ApiProperty({ description: 'Ticket status (open, closed, in progress)' })
  @IsEnum(TicketStatus)
  readonly status: TicketStatus;

  @ApiProperty({
    description: 'Priority level of the ticket (low, medium, high)',
  })
  @IsEnum(TicketPriority)
  readonly priority: TicketPriority;

  @ApiProperty({ description: 'ID of the agent assigned to the ticket' })
  @IsInt()
  readonly assigned_to: number;

  @ApiProperty({ description: 'ID of the customer who created the ticket' })
  @IsInt()
  readonly customer_id: number;

  @ApiProperty({
    description: 'ID of the department the ticket is assigned to',
  })
  @IsInt()
  readonly department_id: number;

  @ApiProperty({
    description: 'Indicates if the bot handled the ticket (true/false)',
  })
  @IsBoolean()
  readonly is_bot_handled: boolean;
}
