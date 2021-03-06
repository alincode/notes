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