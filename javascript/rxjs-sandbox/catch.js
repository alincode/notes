const Rx = require('rxjs');
var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2])
  .zip(Rx.Observable.interval(500), (x, y) => x);

var example = source
  .map(x => x.toUpperCase())
  .catch(error => Rx.Observable.of('h'));

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});                