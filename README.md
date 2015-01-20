# object-only-value
Assert that object has only one key and return its value.

For when you want to do `obj[Object.keys(obj)[0]]`, but know that if `obj`
somehow ended up with zero or more keys than one, it'd end in a disaster.

Literally:

```js
var assert = require('assert');

module.exports = function(obj) {
  var keys = Object.keys(obj);
  assert.equal(keys.length, 1, 'Object should have exactly one key');
  return obj[keys[0]];
};
```

## Installation

```sh
npm install object-only-value
```

## Usage

```js
var onlyValue = require('object-only-value');
var obj = { foo: 42 };
var theValue = onlyValue(obj); // => 42

obj = {};
theValue = onlyValue(obj); // => throws

obj = { foo: 42, bar: 24 };
theValue = onlyValue(obj); // => throws
```
