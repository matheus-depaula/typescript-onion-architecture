import { Types } from './types';
import { Controller } from 'tsoa';
import { Container, decorate, injectable } from 'inversify';
import { MainHandler } from '../../main.handler';
import { Settings } from './settings';
import { Rest } from '../../api/rest/rest';
import { HealthCheckController } from '../../api/rest/controllers/health-check.controller';
import { CorsMiddleware } from '../../api/rest/middlewares/cors.middleware';
import { ErrorMiddleware } from '../../api/rest/middlewares/error.middleware';
import { BodyParserMiddleware } from '../../api/rest/middlewares/body-parser.middleware';
import { SwaggerMiddleware } from '../../api/rest/middlewares/swagger.middleware';
import { Mediator } from '../../application/mediator';
import { FindUserByIdHandler } from '../../application/user/find-user-by-id/find-user-by-id.handler';
import { UserController } from '../../api/rest/controllers/user.controller';
import { UserRepository } from '../database/repositories/user.repository';

const container: Container = new Container();

decorate(injectable(), Controller);

// ENTRY POINT
container.bind(MainHandler).toSelf().inSingletonScope();

// INFRASTRUCTURE
container.bind(Types.Infrastructure.Container).toConstantValue(container);
container.bind(Settings).toSelf().inSingletonScope();

// REPOSITORIES
container.bind(UserRepository).toSelf().inSingletonScope();

// APPLICATION
container.bind(Types.Application.Mediator).to(Mediator).inSingletonScope();

// HANDLERS
container.bind(Types.Handler.FindUserByIdHandler).to(FindUserByIdHandler).inRequestScope();

// API
container.bind(Rest).toSelf().inSingletonScope();
container.bind(CorsMiddleware).toSelf().inSingletonScope();
container.bind(ErrorMiddleware).toSelf().inSingletonScope();
container.bind(BodyParserMiddleware).toSelf().inSingletonScope();
container.bind(SwaggerMiddleware).toSelf().inSingletonScope();

// CONTROLLERS
container.bind(HealthCheckController).toSelf().inSingletonScope();
container.bind(UserController).toSelf().inSingletonScope();

export { container, container as iocContainer };
