function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Timeout!");
    }, delay);
  });
}

function later(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let flow = false;
      if (flow) {
        // resolve(`Hello ${text}`);
      } else {
        // reject(new Error('Ops'));
      }
    }, 2000);
  });
}

async function main(){
  console.log('=== now function start ===');
  console.log('do something...');
  try {
    Promise.race([
      later('World'),
      timeoutPromise(5000)
    ]).then(
      function (text) {
        console.log(text);
      },
      function (error) {
        console.error(error);
        throw error;
      }
    );
     
  } catch (err) {
    console.error(err);
  }
}
main();
