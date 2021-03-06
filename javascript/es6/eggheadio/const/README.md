# const Declarations

### ex01

```js
var VALUE = 'hello world';
VALUE = 'alincode';
console.log(VALUE); // output: alincode
```

### ex02

```js
const VALUE = 'hello world';
VALUE = 'alincode';

// output: TypeError: Assignment to constant variable.
console.log(VALUE);
```

### ex03

```js
const USER = {};
USER.nickname = 'alincode';

// output: { nickname: 'alincode' }
console.log(USER);
```

### ex04

```js
if(true){
    const USER = 'alincode';
    // output: alincode
    console.log(USER);
}

// output: ReferenceError: USER is not defined
console.log(USER);
```