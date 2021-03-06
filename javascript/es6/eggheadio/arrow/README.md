# Arrow Function

### ex01

```js
var createGreeting = function(message, name){
  return message + name;
}
```

to be

```js
var arrowGreeting = (message, name) => {
  return message + name;
}
```

```js
var arrowGreeting = (message, name) => message + name;
```

```js
var arrowGreeting = message => message;
```

### ex02

```js
var squared = x => x * x;
```

### ex03

```js
var deliveryBoy = {
  name: 'John',
  handleMessage: function (message, handler) {
    console.log(2)
    handler(message);
  },
  receive: function() {
    var that = this;
    console.log(1);
    this.handleMessage('Hello, ', function (message){
        console.log(3);
        that.name;
        console.log(message, that.name);
    });
  }
}

deliveryBoy.receive();
```

```js
var deliveryBoy = {
  name: 'John',
  handleMessage: function (message, handler) {
    handler(message);
  },
  receive: function() {
    this.handleMessage('Hello, ', message => console.log(message, this.name));
  }
}

deliveryBoy.receive();
```