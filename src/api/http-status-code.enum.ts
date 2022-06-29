export enum HttpSuccessStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}

export enum HttpClientErrorStatusCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

export enum HttpServerErrorStatusCode {
  INTERNAL_SERVER_ERROR = 500,
}

export type HttpStatusCode = HttpSuccessStatusCode | HttpClientErrorStatusCode | HttpServerErrorStatusCode;
