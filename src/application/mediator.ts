import { Container as ContainerInstance, inject, injectable } from 'inversify';
import { Types } from '../infrastructure/configurations/types';
import { Result } from './contracts/results/result.handler';
import { DtoHandler } from './dto.handler';

@injectable()
export class Mediator {
  @inject(Types.Infrastructure.Container)
  private readonly container!: ContainerInstance;

  public async send<D extends object, R = undefined>(dto: D): Promise<Result<R>> {
    const dtoName = dto.constructor.name.replace('Dto', '');
    const handlerName = Symbol.for(`${dtoName}Handler`);

    const handler = this.container.get<DtoHandler<D, R>>(handlerName);

    return handler.handle(dto);
  }
}
