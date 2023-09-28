import { describe, expect, test } from '@jest/globals';
import { BaseError } from './error';

describe('TestError', () => {
  class MyError extends BaseError<'TestError' | 'ValidationError'> {}

  test('properties', () => {
    const error = new MyError({
      name: 'TestError',
      message: 'Test Error',
      cause: [],
    });

    expect(error.name).toEqual('TestError');
    expect(error.message).toEqual('Test Error');
    expect(error.cause).toEqual([]);
  });
});
