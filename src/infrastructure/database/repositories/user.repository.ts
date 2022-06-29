import { injectable } from 'inversify';
import { User } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository.interface';

@injectable()
export class UserRepository implements IUserRepository {
  exists(key: string, value: string): Promise<boolean> {
    // implement save method
    return new Promise(resolve => resolve(true));
  }

  save(data: Partial<User>): Promise<void> {
    // implement save method
    return new Promise(resolve => resolve());
  }

  list(args: unknown): Promise<User[]> {
    // implement save method
    return new Promise(resolve => resolve([]));
  }

  findById(id: number): Promise<User | undefined> {
    // implement save method
    return new Promise(resolve => resolve(undefined));
  }
}
