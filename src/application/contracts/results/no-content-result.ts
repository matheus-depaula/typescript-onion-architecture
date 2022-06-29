import { HttpSuccessStatusCode } from '../../../api/http-status-code.enum';
import { IResult } from './result.interface';

export class NoContentResult implements IResult {
  public status!: HttpSuccessStatusCode;

  constructor() {
    this.status = HttpSuccessStatusCode.NO_CONTENT;
  }
}
