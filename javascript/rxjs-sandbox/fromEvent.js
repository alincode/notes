const Rx = require('rxjs');

// https://rxjs.dev/api/index/function/fromEvent
// https://jsbin.com/xerori/6/edit?js,console,output

// document.getElementById()
// document.querySelector()
// document.getElementsByTagName()
// document.getElementsByClassName()

var source = Rx.Observable.fromEvent(document.body, 'click');

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

// MouseEvent {...}