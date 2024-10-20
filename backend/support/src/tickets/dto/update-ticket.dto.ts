import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';
import { IsDate } from 'class-validator';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @ApiProperty({
    description: 'Timestamp when the ticket was last updated',
    required: false,
  })
  @IsDate()
  readonly updated_at?: Date;
}
