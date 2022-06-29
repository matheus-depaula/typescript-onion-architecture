import { HttpClientErrorStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class BadRequestResult implements IResult {
  public message!: string;
  public status!: HttpClientErrorStatusCode;

  constructor(message: string) {
    this.message = message;
    this.status = HttpClientErrorStatusCode.BAD_REQUEST;
  }
}
