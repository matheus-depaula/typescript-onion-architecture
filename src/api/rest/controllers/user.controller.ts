import { injectable } from 'inversify';
import { Get, Path, Response, Route, Tags } from 'tsoa';
import { IErrorMessage, resultHandler } from '../../../application/contracts/results/result.handler';
import { FindUserByIdDto } from '../../../application/user/find-user-by-id/find-user-by-id.dto';
import { User } from '../../../domain/entities/user.entity';
import { HttpClientErrorStatusCode, HttpServerErrorStatusCode } from '../../http-status-code.enum';
import { ExtendableController } from './extendable.controller';

@injectable()
@Tags('User')
@Route('/user')
export class UserController extends ExtendableController {
  /**
   * @summary Find user by id
   */
  @Get('{id}')
  @Response<IErrorMessage>(HttpClientErrorStatusCode.NOT_FOUND)
  @Response<IErrorMessage>(HttpServerErrorStatusCode.INTERNAL_SERVER_ERROR)
  public async findById(@Path() id: number): Promise<User | undefined> {
    const dto = new FindUserByIdDto({ id });
    const mediatorResult = await this.mediator.send(dto);

    const { data, statusCode } = resultHandler(mediatorResult);

    this.setStatus(statusCode);

    return data as any;
  }
}
