import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, TicketDocument } from './schemas/tickets.schema';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name)
    private readonly ticketModel: Model<TicketDocument>,
  ) {}

  // Create a new ticket
  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const newTicket = new this.ticketModel(createTicketDto);
    return await newTicket.save();
  }

  // Get all tickets
  async findAll(): Promise<Ticket[]> {
    return await this.ticketModel.find().lean();
  }

  // Get a specific ticket by ID
  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id).lean();
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return ticket;
  }

  // Update a specific ticket by ID
  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const updatedTicket = await this.ticketModel
      .findByIdAndUpdate(id, updateTicketDto, {
        new: true, // return the updated document
      })
      .lean();
    if (!updatedTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return updatedTicket;
  }

  // Delete a specific ticket by ID
  async remove(id: string): Promise<void> {
    const result = await this.ticketModel.findByIdAndDelete(id).lean();
    if (!result) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
  }
}
