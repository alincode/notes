var message = 'hi';

function greet() {
  var message = 'bye';
  console.log(message); // output: bye
}

greet();
console.log(message);   // output: hi