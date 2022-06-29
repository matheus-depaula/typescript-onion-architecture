import { Result } from './contracts/results/result.handler';

export interface DtoHandler<D, R = undefined> {
  handle(dto: D): Promise<Result<R>>;
}
