export abstract class BaseError<ErrorNames extends string> extends Error {
  name: ErrorNames;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: ErrorNames;
    message: string;
    cause?: any;
  }) {
    super();

    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
