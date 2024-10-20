import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation {
  @Prop({ type: Types.ObjectId, ref: 'Ticket', required: true })
  ticket_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  sender_id: Types.ObjectId;

  @Prop({ type: String, required: true })
  message: string;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Boolean, default: false })
  is_bot_message: boolean;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
