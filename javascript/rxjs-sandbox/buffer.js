const Rx = require('rxjs');
var source = Rx.Observable.interval(300);
var source2 = Rx.Observable.interval(1000);
var example = source.buffer(source2);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});