const { should, expect, assert } = require('chai');
const { add, mul } = require('../src/main.js');

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3), 5);
    })

    // it.only('should return 6 when 3 + 3', () => {
    //   expect(add(3, 3), 6)
    // })

    it.skip('should return 8 when 4 + 4', () => {
      expect(add(4, 4), 8)
    })
  });

  describe('mul', () => {
    it('should return 2 when 1 * 2', () => {
      expect(mul(1, 2), 2);
    })
  });
});