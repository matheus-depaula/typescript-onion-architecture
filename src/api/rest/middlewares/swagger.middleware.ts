import { Express, NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';
import { RegisterRoutes } from '../routes/swagger.routes';
import { IMiddleware } from './middleware.interface';
import swagger from 'swagger-ui-express';

@injectable()
export class SwaggerMiddleware implements IMiddleware {
  public configure(app: Express) {
    RegisterRoutes(app);

    app.use('/api', swagger.serve, async (_: Request, res: Response) => {
      return res.send(swagger.generateHTML(await import('../../../../swagger.json')));
    });

    app.use((req: Request, res: Response, next: NextFunction) => {
      console.log('Route not found', { path: req.path });

      res.status(404).send({ message: 'Route not found' }).end();

      next();
    });
  }
}
