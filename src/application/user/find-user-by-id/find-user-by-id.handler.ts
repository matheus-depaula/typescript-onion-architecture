import { inject, injectable } from 'inversify';
import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../infrastructure/database/repositories/user.repository';
import { NotFoundResult } from '../../contracts/results/not-found-result';
import { Result } from '../../contracts/results/result.handler';
import { SuccessResult } from '../../contracts/results/success-result';
import { DtoHandler } from '../../dto.handler';
import { FindUserByIdDto } from './find-user-by-id.dto';

@injectable()
export class FindUserByIdHandler implements DtoHandler<FindUserByIdDto> {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async handle(dto: FindUserByIdDto): Promise<Result<User>> {
    const user = await this.userRepository.findById(dto.id);

    if (!user) return new NotFoundResult('User not found');

    return new SuccessResult({ data: user });
  }
}
