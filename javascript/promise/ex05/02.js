// full dependent function

function getWallet() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let wallet = {
        money: 200
      }
      resolve(wallet);
    }, 2000);
  });
}
function drinkCoffee(wallet) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let coffeePrice = 50;
      let result = {
        money: wallet.money - coffeePrice
      }
      resolve(result);
    }, 0);
  });
}
function eatDinner(wallet) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let dinnerPrice = 100;
      let result = {
        money: wallet.money - dinnerPrice
      }
      resolve(result);
    }, 1000);
  });
}

getWallet()
  .then(drinkCoffee)
  .then(eatDinner)
  .then(
  function fulfilled(wallet) {
    console.dir(wallet);
  },
  function rejected(err) {
    console.error(err);
  });