import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole, UserStatus } from 'src/app/types/user';

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  userId: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: Object,
  })
  name: {
    first: string;
    last: string;
  };

  @Prop({ required: true, enum: UserRole })
  role: string;

  @Prop({ default: 'ACTIVE', enum: UserStatus })
  status: string;

  @Prop({ type: String, default: null })
  refreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
