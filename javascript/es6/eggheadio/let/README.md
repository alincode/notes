# The let keyword

### ex01

```js
var message = 'hi';

{
  var message = 'bye';
  console.log(message);   // output: bye  
}

console.log(message);   // output: bye
```

### ex02

```js
let message = 'hi';

{
  let message = 'bye';
  console.log(message); // output: 
}

console.log(message); // output: hi
```

### ex03

```js
var message = 'hi';

function greet() {
  var message = 'bye';
  console.log(message); // output: bye
}

greet();
console.log(message);   // output: hi
```

### ex04

```js
var fs = [];

for (var i = 0; i < 10; i++){
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})
```

### ex05

```js
var fs = [];

for (let i = 0; i < 10; i++){
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})

```