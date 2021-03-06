# Rx.js

* [Functional Programming in Javascript](http://reactivex.io/learnrx/)
* [ichpuchtli/awesome-rxjs - GitHub](https://github.com/ichpuchtli/awesome-rxjs)
* [RxJS-CN/awesome-rxjs - GitHub](https://github.com/RxJS-CN/awesome-rxjs)

### Article
* [RxJS Observable interop with Promises and Async-Await](https://medium.com/@benlesh/rxjs-observable-interop-with-promises-and-async-await-bebb05306875)

### 建立 Observable (CREATION OBSERVABLES)
* create
* of (arguments)
* from (list)
* fromPromise
* fromEvent
* interval
* timer
* empty

### 轉換(TRANSFORMATION OPERATORS)
* scan
* buffer
* bufferTime
* bufferCount
* concatMap
* switchMap
* mergeMap
* flatMap
  
### 過濾(FILTERING OPERATORS)
* take
* first
* skip
* throttle
* debounce
* distinct
* filter

### 合併(COMBINATION OPERATORS) 
* concatAll
* mergeAll
* switchAll
* zip
* zipAll

### Marble Diagrams
* [Interactive diagrams of Rx Observables](https://rxmarbles.com/)

* rxjs
  * EMPTY
  * Observable
    * subscribe
  * range
  * pipe
  * combineLatest
  * race

* rxjs/operators
  * map
  * mapTo
  * combineAll
  * take
  * takeUntil
  * tap
  * toArray
  * delay
  * delayWhen
  * first
  * groupBy
  * distinct
  * refCount
  * catchError
  * finalize
  * debounceTime
  * onErrorResumeNexts