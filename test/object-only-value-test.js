var assert = require('assert');
var onlyValue = require('../');

var obj = {
  foo: 42
};
var theValue;

assert.doesNotThrow(function() {
  theValue = onlyValue(obj);
});

assert.equal(theValue, obj[Object.keys(obj)[0]]);

obj = {};
assert.throws(function() {
  theValue = onlyValue(obj);
});

obj = {
  foo: 42,
  bar: 24
};
assert.throws(function() {
  theValue = onlyValue(obj);
});
