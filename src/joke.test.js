const joke = require('./joke.js');

it('test it is joke', () => {
  expect(joke()).toBe('i don\'t trust stairs because they are always upto something');
});