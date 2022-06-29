import 'reflect-metadata';
import { container } from './infrastructure/configurations/container';
import { MainHandler } from './main.handler';

container.get(MainHandler).start();
