import cors from 'cors';
import { Express } from 'express';
import { injectable } from 'inversify';
import { IMiddleware } from './middleware.interface';

@injectable()
export class CorsMiddleware implements IMiddleware {
  configure(app: Express): void {
    app.use(cors());
  }
}
