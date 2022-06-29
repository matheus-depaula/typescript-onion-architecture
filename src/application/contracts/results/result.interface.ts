import { HttpStatusCode } from '../../../api/http-status-code.enum';

export interface IResult<T = unknown> {
  data?: T;
  message?: string;
  status?: HttpStatusCode;
}
