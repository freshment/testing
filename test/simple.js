const { should, expect, assert } = require('chai');
const { add, mul } = require('../src/main.js');

// if(add(2, 3) === 5) {
//   console.log('add(2, 3) === 5')
// }else {
//   console.log('add(2, 3) !== 5, error')
// }

should();
add(2, 3).should.equal(5);
expect(add(2, 3)).to.be.a(6);
assert.equal(add(2, 3), 5);