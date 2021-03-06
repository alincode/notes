const Rx = require('rxjs');
var source = Rx.Observable.from(['a', 'b', 'c', 'a', 'b'])
  .zip(Rx.Observable.interval(300), (x, y) => x);
var example = source.distinct()

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});