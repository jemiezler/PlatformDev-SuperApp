import { MongoEntity } from 'src/app/common/lib/mongo.entiy';

export class BookEntity extends MongoEntity {
  name: string;
  constructor(partial: Partial<BookEntity>) {
    super();
    Object.assign(this, partial);
  }
}
