export interface ErrorPayload<T> {
  name: T
  message: string
  cause?: any
}

export abstract class BaseError<ErrorNames extends string> extends Error {
  name: ErrorNames;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: ErrorPayload<ErrorNames>) {
    super();

    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
