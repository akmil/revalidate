'use strict';

exports.__esModule = true;
exports.default = isOneOf;

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _createValidator = require('../createValidator');

var _createValidator2 = _interopRequireDefault(_createValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultComparer = function (value, optionValue) {
  return value === optionValue;
};

function isOneOf(values) {
  var comparer = arguments.length <= 1 || arguments[1] === undefined ? defaultComparer : arguments[1];

  var valuesClone = values.slice(0);

  return (0, _createValidator2.default)(function (message) {
    return function (value) {
      if (value === undefined) {
        return;
      }

      var valueIndex = (0, _lodash2.default)(valuesClone, function (optionValue) {
        return comparer(value, optionValue);
      });

      if (valueIndex === -1) {
        return message;
      }
    };
  }, function (field) {
    return field + ' must be one of ' + JSON.stringify(valuesClone);
  });
}