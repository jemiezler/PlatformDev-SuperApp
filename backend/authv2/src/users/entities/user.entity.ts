import { Exclude, Expose } from 'class-transformer';
import { IdTransform } from 'src/app/lib/id.transform';

export class UserEntity extends IdTransform {
  @Exclude()
  name?: {
    first: string;
    last: string;
  };

  @Exclude()
  password: string;

  @Exclude()
  refreshToken: string;

  @Expose()
  get fullName(): string {
    if (!this.name) return undefined;
    return `${this.name.first} ${this.name.last}`;
  }

  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}
