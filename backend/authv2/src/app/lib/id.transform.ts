import { Exclude, Expose } from 'class-transformer';
import { Types } from 'mongoose';
import { TransformId } from '../decorators/transform.id.decorator';

export abstract class IdTransform {
  @Exclude()
  __v: string;

  @Expose({ name: 'id' })
  @TransformId((v) => {
    return v._id.toString();
  })
  _id: string | Types.ObjectId | unknown;
}
