import { Injectable } from '@nestjs/common';
import { CreateTicketTagDto } from './dto/create-ticket_tag.dto';
import { UpdateTicketTagDto } from './dto/update-ticket_tag.dto';

@Injectable()
export class TicketTagsService {
  create(createTicketTagDto: CreateTicketTagDto) {
    return 'This action adds a new ticketTag';
  }

  findAll() {
    return `This action returns all ticketTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketTag`;
  }

  update(id: number, updateTicketTagDto: UpdateTicketTagDto) {
    return `This action updates a #${id} ticketTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketTag`;
  }
}
