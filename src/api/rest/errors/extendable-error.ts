import { HttpClientErrorStatusCode, HttpServerErrorStatusCode } from '../../http-status-code.enum';

type HttpErrorStatusCode = HttpClientErrorStatusCode | HttpServerErrorStatusCode;

export abstract class ExtendableError<T extends HttpErrorStatusCode> {
  message!: string;
  status!: T;
}
