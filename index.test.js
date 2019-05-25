'use strict';

var changeCaseObjectKeys = require('./');

test('flat object', function () {
  var before = {
    fooBar: '',
    BazQux: '',
    'boo-far': ''
  };

  var after = {
    foo_bar: '',
    baz_qux: '',
    boo_far: ''
  };

  expect(changeCaseObjectKeys(before, 'snakeCase')).toStrictEqual(after);
});

test('nested objects', function () {
  var before = {
    fooBar: '',
    BazQux: {
      fooBar: '',
      BazQux: ''
    },
  };

  var after = {
    foo_bar: '',
    baz_qux: {
      foo_bar: '',
      baz_qux: ''
    },
  };

  expect(changeCaseObjectKeys(before, 'snakeCase')).toStrictEqual(after);
});

test('nested objects with arrays', function () {
  var before = {
    fooBar: '',
    BazQux: [
      {
        fooBar: ''
      },
      {
        fooBar: ''
      }
    ]
  };

  var after = {
    foo_bar: '',
    baz_qux: [
      {
        foo_bar: ''
      },
      {
        foo_bar: ''
      }
    ]
  };

  expect(changeCaseObjectKeys(before, 'snakeCase')).toStrictEqual(after);
});
