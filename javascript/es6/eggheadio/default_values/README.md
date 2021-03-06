# Default Values for Function Parameters

### ex01

```js
function greet(greeting, name='John'){
  console.log(`${greeting}, ${name}`);
}

greet('hello');
greet('hello', 'alin');
```

### ex02

```js
function receive(complete) {
  complete();
}

receive(() => {
  console.log('complete');  // output: complete
});

```

### ex03

```js
function receive(complete = () => console.log('complete')) {
  complete();
}

receive();
```

### ex04

```js
let receive = (complete = () => console.log('complete')) => complete();

receive();
```
