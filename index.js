'use strict';

var changeCase = require('change-case');
var _ = require('lodash');

function changeCaseObjectKeys(obj = {}, to = 'snake') {
  var nobj = {};

  Object.keys(obj).forEach(function(key) {
    var nkey = changeCase[to](key);
    if (Array.isArray(obj[key])) {
      nobj[nkey] = obj[key].map(function(sobj) {
        return changeCaseObjectKeys(sobj, to);
      });
    } else if (_.isPlainObject(obj[key])) {
      nobj[nkey] = changeCaseObjectKeys(obj[key], to);
    } else {
      nobj[nkey] = obj[key];
    }
  });

  return nobj;
}

module.exports = changeCaseObjectKeys;
