import { PartialType } from '@nestjs/swagger';
import { CreateTicketTagDto } from './create-ticket_tag.dto';

export class UpdateTicketTagDto extends PartialType(CreateTicketTagDto) {}
