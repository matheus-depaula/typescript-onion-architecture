import { HttpSuccessStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class CreatedResult<T = any> implements IResult<T> {
  public data?: T;
  public message?: string;
  public status!: HttpSuccessStatusCode;

  constructor(result?: Omit<CreatedResult<T>, 'status'>) {
    this.data = result?.data;
    this.message = result?.message;
    this.status = HttpSuccessStatusCode.CREATED;
  }
}
