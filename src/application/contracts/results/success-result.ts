import { HttpSuccessStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class SuccessResult<T = any> implements IResult<T> {
  public data?: T;
  public message?: string;
  public status!: HttpSuccessStatusCode;

  constructor(data: Omit<SuccessResult<T>, 'status'>) {
    this.data = data?.data;
    this.message = data?.message;
    this.status = HttpSuccessStatusCode.SUCCESS;
  }
}
