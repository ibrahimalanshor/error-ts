# galat

```ts
import { BaseError } from 'galat';

class MyError extends BaseError<'TestError' | 'ValidationError'> {}

throw new MyError({
  name: 'ValidationError',
  message: 'Validation Error',
  cause: [],
});
```
