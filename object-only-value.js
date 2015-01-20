var assert = require('assert');

module.exports = function(obj) {
  var keys = Object.keys(obj);
  assert.equal(keys.length, 1, 'Object should have exactly one key');
  return obj[keys[0]];
};
