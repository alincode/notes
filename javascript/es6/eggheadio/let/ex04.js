var fs = [];

for (var i = 0; i < 10; i++){
  // console.log(`for:${i}`);
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  // console.log('fs.forEach');
  f();
})
