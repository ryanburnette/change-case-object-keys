# [change-case-object-keys][1]

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/change-case-object-keys)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/change-case-object-keys)

Recursively change case of all keys in an object using [change-case][2].

```js
var changeCaseObjectKeys = require('@ryanburnette/change-case-object-keys');

var obj = {
  fooBar: 'foobar',
  BarBaz: 'barbaz'
};

console.log(changeCaseObjectKeys(obj));
```

[1]: https://github.com/ryanburnette/change-case-object-keys
[2]: https://github.com/blakeembrey/change-case
