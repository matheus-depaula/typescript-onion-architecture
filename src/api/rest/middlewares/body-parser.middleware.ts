import { Express, json, NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';
import { IMiddleware } from './middleware.interface';

@injectable()
export class BodyParserMiddleware implements IMiddleware {
  public configure(app: Express) {
    app.use((req: Request, _: Response, next: NextFunction): void => {
      if (req.headers['content-type'] === '') {
        req.headers['content-type'] = 'application/json';
      }

      next();
    });

    app.use(json({ limit: '10mb' }));
  }
}
