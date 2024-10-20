import { Module } from '@nestjs/common';
import { TicketTagsService } from './ticket_tags.service';
import { TicketTagsController } from './ticket_tags.controller';

@Module({
  controllers: [TicketTagsController],
  providers: [TicketTagsService],
})
export class TicketTagsModule {}
