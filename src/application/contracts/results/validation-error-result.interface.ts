import { FieldErrors } from 'tsoa';
import { ErrorResult } from './error-result';

export interface ValidationErrorResult extends ErrorResult {
  details: FieldErrors;
}
