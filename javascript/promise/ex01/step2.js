useAsyncAwaitStyle()
useCallbackStyle()

async function useAsyncAwaitStyle() {
  console.time('useAsyncAwaitStyle');
  var promisify = resolve => new Promise(resolve)
  async function x1() { return promisify(next => setTimeout(next, 2000, 1)) }
  async function y1() { return promisify(next => setTimeout(next, 0, 2)) }
  async function z1() { return promisify(next => setTimeout(next, 1000, 3)) }
  let promises = [x1(), y1(), z1()];
  async function foo1(x, y, z) { return promisify(next => setTimeout(next, 1000, x + y + z)) };
  await Promise.all(promises).then(([x, y, z]) => { foo1(x, y, z).then((sum) => {
      console.log(sum); console.timeEnd('useAsyncAwaitStyle');
    });
  });
}

function useCallbackStyle() {
  console.time('useCallbackStyle');
  var after = (next, done, c = 0) => (fn, i, r) => fn(x => (r[i] = x, c += 1) < r.length || next(...r, done));  // hard to understand
  function x2(next) { setTimeout(next, 2000, 1) }
  function y2(next) { setTimeout(next, 0, 2) }
  function z2(next) { setTimeout(next, 1000, 3) }
  function foo2(x, y, z, next) { setTimeout(next, 1000, x + y + z) };
  [x2, y2, z2].forEach(after(foo2, sum => { // hard to understand
    console.log(sum); console.timeEnd('useCallbackStyle');
  }));
}