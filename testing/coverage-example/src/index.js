const utils = require('./utils');

function myFunction1() {
  return 1;
}
function myFunction2() {
  return 2;
}
function myFunction3() {
  return utils.help1();
}

const index = {
  myFunction1,
  myFunction2,
  myFunction3
};

module.exports = index;