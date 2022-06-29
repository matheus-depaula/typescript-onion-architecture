import { injectable } from 'inversify';
import { apiHandler } from './api/api.handler';

@injectable()
export class MainHandler {
  constructor(private _apiHandler: Promise<void> = apiHandler()) {}

  public async start() {
    await this._apiHandler;
  }
}
