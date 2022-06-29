import { RestHandler } from './rest/rest.handler';

export const apiHandler = async () => await RestHandler().start();
