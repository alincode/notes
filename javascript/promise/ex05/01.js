// separation of concerns

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