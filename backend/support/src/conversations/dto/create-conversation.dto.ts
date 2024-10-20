import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateConversationDto {
  @ApiProperty({ description: 'ID of the sender (agent, customer, or bot)' })
  @IsInt()
  readonly sender_id: Types.ObjectId;

  @ApiProperty({ description: 'Content of the message' })
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @ApiProperty({
    description: 'Timestamp when the message was created',
    required: false,
  })
  @IsDate()
  readonly created_at?: Date;

  @ApiProperty({
    description: 'Indicates if the message is sent by the bot',
    required: false,
  })
  @IsBoolean()
  readonly is_bot_message?: boolean;
}
