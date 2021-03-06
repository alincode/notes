const Rx = require('rxjs');

var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000).take(3));

var example = source.concatAll();
example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});