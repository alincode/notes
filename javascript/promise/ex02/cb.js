// People should know the "error first callback style", when they write callback.
// http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
function later(text, cb) {
  setTimeout(function () {
    let flow = true;
    if(flow) {
      cb(null, `Hello ${text}`);
    } else {
      cb(new Error('Ops'));
    }
  }, 2000);
}

function main() {
  console.log('=== now function start ===');
  console.log('do something...');
  try {
    function cb(err, text) {
      if (err) throw err;
      console.log(text);
    }
    later('World', cb);  
  } catch (err) {
    console.error(err);
  }
}
main();