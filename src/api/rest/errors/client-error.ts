import { HttpClientErrorStatusCode } from '../../http-status-code.enum';
import { ExtendableError } from './extendable-error';

export class ClientError extends ExtendableError<HttpClientErrorStatusCode> {
  constructor(result: ClientError) {
    super();

    Object.assign(this, result);
  }
}
