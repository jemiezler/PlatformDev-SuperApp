import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LanguageDTO } from 'src/app/helper/language.dto';
import { TicketPriority, TicketStatus } from '../dto/create-ticket.dto';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ type: LanguageDTO, required: true })
  subject: LanguageDTO;

  @Prop({ type: LanguageDTO, required: true })
  description: LanguageDTO;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Date })
  updated_at?: Date;

  @Prop({ type: String, enum: TicketStatus, default: TicketStatus.OPEN })
  status: TicketStatus;

  @Prop({ type: String, enum: TicketPriority, default: TicketPriority.MEDIUM })
  priority: TicketPriority;

  @Prop({ type: Number, required: true })
  assigned_to: number;

  @Prop({ type: Number, required: true })
  customer_id: number;

  @Prop({ type: Number, required: true })
  department_id: number;

  @Prop({ type: Boolean, default: false })
  is_bot_handled: boolean;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
