var assert = require('assert');
var onlyValue = require('../');

var obj = {
  foo: 42
};
var theKey;

assert.doesNotThrow(function() {
  theKey = onlyValue(obj);
});

assert.equal(onlyValue, obj[Object.keys(obj)[0]]);

obj = {};
assert.doesThrow(function() {
  theKey = onlyValue(obj);
});

obj = {
  foo: 42,
  bar: 24
};
assert.doesThrow(function() {
  theValue = onlyValue(obj);
});
