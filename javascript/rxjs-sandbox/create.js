const Rx = require('rxjs');

let source = Rx.Observable
  .create(function (observer) {
    observer.next('Jerry');
    observer.next('Anna');
    observer.complete();
  });

source.subscribe({
  next: function (value) {
    console.log(value)
  },
  complete: function () {
    console.log('complete!');
  },
  error: function (error) {
    console.log(error)
  }
});