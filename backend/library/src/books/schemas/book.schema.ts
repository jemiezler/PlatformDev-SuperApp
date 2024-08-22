import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;
@Schema()
export class Book {
  @Prop({ type: String, required: true, unique: true })
  name: string;
}
export const BookSchema = SchemaFactory.createForClass(Book);
BookSchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
BookSchema.set('toObject', { flattenObjectIds: true, versionKey: false });
