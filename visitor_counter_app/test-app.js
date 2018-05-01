var expect = require('chai').expect;

describe('Test Case', function() {
  describe('Sum function', function() {
    it('should sum two numbers', function() {
      let total = sum(1, 1);
      expect(total).to.equal(2);
    });
  });
});

function sum (x, y) {
  return x + y;
}