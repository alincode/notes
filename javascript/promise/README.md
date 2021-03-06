# Promise Example

### uninversion of control

callbacks themselves represent an inversion of control. So inverting the callback pattern is actually an inversion of inversion, or an uninversion of control -- restoring control back to the calling code where we wanted it to be in the first place.

#### Don't pass the callback function to someone couldn't trustable.

You could just use Promise.

#### separation of concerns

* Don't need to know "error first callback style", you could do this, it is more readable.

```js
Promise.resolve('Hello World')
  .then(
    function fulfilled(val) {
      console.log(val); 
    },
    function rejected(err) {
      console.error(err);
    }
  );

Promise.reject('Ops')
  .then(
    function fulfilled(val) {
      console.log(val);
    },
    function rejected(err) {
      console.error(err);
    }
  );
```

### Trustable Promise

When you pass a callback to a utility foo(..), it might:

* Call the callback too early
* Call the callback too late (or never)
* Call the callback too few or too many times
* Fail to pass along any necessary environment/parameters
* Swallow any errors/exceptions that may happen

The characteristics of Promises are intentionally designed to provide useful, repeatable answers to all these concerns.

### Chain Flow

It help async flow look like sequence.


## More

* [getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/fb60634c558fd4b77200204bdbd7a92d042d95bb/async%20%26%20performance/ch3.md)