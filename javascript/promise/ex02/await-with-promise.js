function later(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let flow = true;
      if (flow) {
        resolve(`Hello ${text}`);
      } else {
        reject(new Error('Ops'));
      }
    }, 2000);
  });
}

async function main(){
  console.log('=== now function start ===');
  console.log('do something...');
  try {
    let text = await later('World');
    console.log(text);  
  } catch (err) {
    console.error(err);
  }
}
main();
