const Rx = require('rxjs');
var arr = ['Jerry', 'Anna', 2016, 2017, '30 days']
var source = Rx.Observable.from(arr);

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

// promise
var source2 = Rx.Observable
  .from(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello RxJS!');
    }, 3000)
  }))

source2.subscribe({
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
