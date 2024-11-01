import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserRole, UserStatus } from 'src/user/interface/user.interface';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop(
    raw({
      first: { type: String, required: true, uppercase: true },
      last: { type: String, uppercase: true, default: '' },
    }),
  )
  name: { first: string; last: string };

  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, default: '' })
  password: string;

  @Prop({ type: String, default: '' })
  refreshToken: string;

  @Prop({ type: String, default: '' })
  status: UserStatus;

  @Prop({
    type: String,
    default: 'NORMAL',
    enum: UserRole,
  })
  role: UserRole;

  _id: Types.ObjectId | string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
UserSchema.set('toObject', { flattenObjectIds: true, versionKey: false });

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
