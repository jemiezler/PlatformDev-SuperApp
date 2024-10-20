import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type Agent_AssignmentDocument = Agent_Assignment & Document;

@Schema()
export class Agent_Assignment {
  @Prop({ type: Types.ObjectId, required: true })
  agent_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  department_id: Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  assigned_at: Date;
}

export const Agent_AssignmentSchema =
  SchemaFactory.createForClass(Agent_Assignment);
