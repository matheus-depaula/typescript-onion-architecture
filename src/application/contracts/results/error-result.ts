import { HttpServerErrorStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class ErrorResult implements IResult {
  public message!: string;
  public status?: HttpServerErrorStatusCode;

  constructor(message: string) {
    this.message = message;
    this.status = HttpServerErrorStatusCode.INTERNAL_SERVER_ERROR;
  }
}
