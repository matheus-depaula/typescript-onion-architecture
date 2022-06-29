import { ExtendableEntity } from './extendable.entity';

// EXAMPLE ENTITY
export class User extends ExtendableEntity {
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  constructor(data: User) {
    super(data);

    this.firstName = data.firstName.trim();
    this.lastName = data.lastName.trim();
    this.email = data.email.trim();
  }
}
