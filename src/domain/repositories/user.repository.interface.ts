import { User } from '../entities/user.entity';
import { IExtendableRepository } from './extendable.repository.interface';

export interface IUserRepository extends IExtendableRepository {
  save(data: Partial<User>): Promise<void>;
  list(args: unknown): Promise<User[]>;
  findById(id: number): Promise<User | undefined>;
}
