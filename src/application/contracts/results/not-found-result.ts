import { HttpClientErrorStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class NotFoundResult implements IResult {
  public message!: string;
  public status!: HttpClientErrorStatusCode;

  constructor(message: string) {
    this.message = message;
    this.status = HttpClientErrorStatusCode.NOT_FOUND;
  }
}
