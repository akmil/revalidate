'use strict';

exports.__esModule = true;

var _createValidator = require('../createValidator');

var _createValidator2 = _interopRequireDefault(_createValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createValidator2.default)(function (message) {
  return function (value) {
    if (value == null) {
      return message;
    }

    if (typeof value === 'string' && value.trim() === '') {
      return message;
    }
  };
}, function (field) {
  return field + ' is required';
});