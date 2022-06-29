import { SuccessResult } from './success-result';
import { HttpStatusCode } from '../../../api/http-status-code.enum';
import { CreatedResult } from './created-result';
import { NoContentResult } from './no-content-result';
import { NotFoundResult } from './not-found-result';
import { BadRequestResult } from './bad-request-result';

interface IResultHandler<T = unknown> {
  data: T | IErrorMessage;
  statusCode: HttpStatusCode;
}

export interface IErrorMessage {
  message: string;
}

export type Result<T = undefined> = SuccessResult<T> | NoContentResult | CreatedResult | NotFoundResult | BadRequestResult;

export function resultHandler<T>(result: Result): IResultHandler<T> {
  if (result instanceof BadRequestResult) {
    return {
      data: { message: result.message },
      statusCode: result.status,
    };
  }

  if (result instanceof NotFoundResult) {
    return {
      data: { message: result.message },
      statusCode: result.status,
    };
  }

  if (result instanceof NoContentResult) {
    return {
      data: null as unknown as T,
      statusCode: result.status,
    };
  }

  if (result instanceof CreatedResult) {
    return {
      data: null as unknown as T,
      statusCode: result.status,
    };
  }

  return {
    data: (result?.data as unknown as T) ?? { message: result?.message as string },
    statusCode: result.status,
  };
}
