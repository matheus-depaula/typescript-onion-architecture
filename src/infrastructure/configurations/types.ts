const Infrastructure = {
  Container: Symbol.for('Container'),
};

const Application = {
  Mediator: Symbol.for('Mediator'),
};

const Handler = {
  FindUserByIdHandler: Symbol.for('FindUserByIdHandler'),
};

export const Types = { Infrastructure, Application, Handler };
