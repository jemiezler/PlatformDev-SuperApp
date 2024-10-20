import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(createTicketDto: CreateTicketDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTicketDto: UpdateTicketDto): string;
    remove(id: string): string;
}
