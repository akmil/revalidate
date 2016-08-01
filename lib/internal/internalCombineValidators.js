'use strict';

exports.__esModule = true;
exports.default = internalCombineValidators;

var _parseFieldName = require('./parseFieldName');

var _parseFieldName2 = _interopRequireDefault(_parseFieldName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function internalCombineValidators(validators) {
  var atRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
  var isImmutable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  return function valuesValidator() {
    var rawValues = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var allValues = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var values = rawValues;
    if (isImmutable && rawValues.toJS) {
      values = rawValues.toJS();
    }
    return Object.keys(validators).reduce(function (errors, fieldName) {
      var parsedField = (0, _parseFieldName2.default)(fieldName);
      var validator = validators[parsedField.fullName];
      var value = values[parsedField.baseName];
      var finalAllValues = atRoot ? values : allValues;

      var errorMessage = parsedField.isArray ? (value || []).map(function (fieldValue) {
        return validator(fieldValue, finalAllValues);
      }) : validator(value, finalAllValues);

      if (errorMessage) {
        errors[parsedField.baseName] = errorMessage;
      }

      return errors;
    }, {});
  };
}