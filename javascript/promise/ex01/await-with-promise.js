// =============== Promise and await Style =================
function delay11() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
    }, 2000);
  });
}
function delay22() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(2);
    }, 0);
  });
}
function delay33() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(3);
    }, 1000);
  });
}

function delay44(x, y, z) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(x + y + z);
    }, 1000);
  });
}

async function useAsyncAwaitStyle() {
  console.time('useAsyncAwaitStyle');
  let promises = [delay11(), delay22(), delay33()];
  let [x, y, z] = await Promise.all(promises);
  let sum = await delay44(x, y, z);
  console.log(sum);
  console.timeEnd('useAsyncAwaitStyle');
}

// =============== callback Style =================

function delay1(next) {
  setTimeout(next, 2000, 1);
}
function delay2(next) {
  setTimeout(next, 0, 2);
}
function delay3(next) {
  setTimeout(next, 1000, 3);
}

function delay4(next, x, y, z) {
  setTimeout(next, 1000, x + y + z);
}

function useCallbackStyle() {
  console.time('useCallbackStyle');
  var after = (next, done, c = 0) => (fn, i, r) => fn(x => (r[i] = x, c += 1) < r.length || next(...r, done))
  function x2(next) { delay1(next) }
  function y2(next) { delay2(next) }
  function z2(next) { delay3(next) }
  function foo2(x, y, z, next) { delay4(next, x, y, z) };
  [x2, y2, z2].forEach(after(foo2, sum => {
    console.log(sum);
    console.timeEnd('useCallbackStyle');
  }));
}


useAsyncAwaitStyle()
useCallbackStyle()