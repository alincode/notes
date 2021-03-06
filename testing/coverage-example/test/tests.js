const app = require('../src/index');
const chai = require('chai');
chai.should();

describe('index', () => {
  it('myFunction1', () => {
    let result = app.myFunction1();
    result.should.be.eq(1);
  });
  it('myFunction2', () => {
    let result = app.myFunction2();
    result.should.be.eq(2);
  });
  it('myFunction3', () => {
    let result = app.myFunction3();
    result.should.be.eq('ok');
  });
});