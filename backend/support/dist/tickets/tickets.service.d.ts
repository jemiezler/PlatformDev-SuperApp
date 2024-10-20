import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsService {
    create(createTicketDto: CreateTicketDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTicketDto: UpdateTicketDto): string;
    remove(id: number): string;
}
