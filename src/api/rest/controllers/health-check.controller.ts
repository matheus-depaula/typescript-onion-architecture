import { injectable } from 'inversify';
import { Get, Response, Route, Tags } from 'tsoa';
import { IErrorMessage } from '../../../application/contracts/results/result.handler';
import { SuccessResult } from '../../../application/contracts/results/success-result';
import { HttpServerErrorStatusCode, HttpSuccessStatusCode } from '../../http-status-code.enum';
import { ExtendableController } from './extendable.controller';

@injectable()
@Tags('API')
@Route('/api/health-check')
export class HealthCheckController extends ExtendableController {
  /**
   * @summary Check API status
   */
  @Get()
  @Response<SuccessResult>(HttpSuccessStatusCode.SUCCESS)
  @Response<IErrorMessage>(HttpServerErrorStatusCode.INTERNAL_SERVER_ERROR)
  public async healthCheck(): Promise<SuccessResult> {
    this.setStatus(HttpSuccessStatusCode.SUCCESS);

    return new SuccessResult({ message: 'API Ok' });
  }
}
