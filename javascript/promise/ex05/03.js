// independent function

function getAlinProfile() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let person = {
        nickname: 'Alin',
        github: 'https://github.com/alincode'
      }
      resolve(person);
    }, 2000);
  });
}
function getNinaProfile(wallet) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let person = {
        nickname: 'Nina',
        github: 'https://github.com/ninabreznik'
      }
      resolve(person);
    }, 0);
  });
}
function getAlexProfile(wallet) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let person = {
        nickname: 'Alex',
        github: 'https://github.com/serapath'
      }
      resolve(person);
    }, 1000);
  });
}


let promises = [getAlinProfile(), getNinaProfile(), getAlexProfile()];
Promise.all(promises).then((results) => {
  console.log(results);
});