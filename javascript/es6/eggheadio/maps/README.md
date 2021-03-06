# Maps and WeakMaps with ES6

* [Learn ES2015 · Babel - Map + Set + WeakMap + WeakSet](https://babeljs.io/learn-es2015/#ecmascript-2015-features-map-set-weak-map-weak-set)
* [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### basic

* set()
* get()
* size
* clear()
* has()

```js
var myMap = new Map();

myMap.set('firstName', 'Ailin');
myMap.set('lastName', 'Liou');

console.log('=== get ===');

// output: Map { 'firstName' => 'Ailin', 'lastName' => 'Liou' }
console.log(myMap);

// output: Ailin
console.log(myMap.get('firstName'));

// output: undefined
console.log(myMap.get('nickname'));

console.log('=== has ===');

// output: true
console.log(myMap.has('firstName'));

// output: false
console.log(myMap.has('nickname'));

console.log('=== size and clear ===');

// output: 2
console.log(myMap.size);

myMap.clear();

// output: 0
console.log(myMap.size);
```

### Iterators

* keys()
* values()
* entries()

```js
var myMap = new Map();

myMap.set('firstName', 'Ailin');
myMap.set('lastName', 'Liou');

console.log('=== keys ===');
for(var key of myMap.keys()) {
    console.log(key);
}

console.log('=== values ===');
for(var value of myMap.values()) {
    console.log(value);
}

console.log('=== entries ===');
for(var [key, value] of myMap.entries()){
    console.log(`${key} = ${value}`);
}
```

