const { add } = require('../src/index');

describe('very limited test suite', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
