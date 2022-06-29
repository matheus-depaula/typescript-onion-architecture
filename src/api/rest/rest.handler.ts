import { Rest } from './rest';
import { container } from '../../infrastructure/configurations/container';

export const RestHandler = () => container.get(Rest);
