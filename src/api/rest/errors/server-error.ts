import { HttpServerErrorStatusCode } from '../../http-status-code.enum';
import { ExtendableError } from './extendable-error';

export class ServerError extends ExtendableError<HttpServerErrorStatusCode> {
  constructor(result: ServerError) {
    super();

    Object.assign(this, result);
  }
}
