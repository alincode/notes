const Rx = require('rxjs');
let source = Rx.Observable.of('Jerry', 'Anna');

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