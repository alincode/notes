const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});