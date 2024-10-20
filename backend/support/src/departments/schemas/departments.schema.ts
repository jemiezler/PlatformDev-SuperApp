import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop({ type: Object, required: true })
  name: {
    th: string;
    en: string;
  };

  @Prop({ type: Object, required: true })
  acronym: {
    th: string;
    en: string;
  };

  @Prop({ type: Object, required: true })
  description: {
    th: string;
    en: string;
  };

  @Prop({ type: Types.ObjectId })
  manager_id: Types.ObjectId;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
