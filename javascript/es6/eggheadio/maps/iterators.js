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