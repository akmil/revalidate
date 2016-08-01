'use strict';

exports.__esModule = true;
exports.default = createValidatorWithMultipleErrors;

var _isValueValidator = require('./isValueValidator');

var _isValueValidator2 = _interopRequireDefault(_isValueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createValidatorWithMultipleErrors(validators, sharedConfig) {
  return function composedValidator(value, allValues) {
    return validators.reduce(function (errors, validator) {
      var errorMessage = void 0;

      if ((0, _isValueValidator2.default)(validator)) {
        errorMessage = validator(value, allValues);
      } else {
        errorMessage = validator(sharedConfig, value, allValues);
      }

      if (errorMessage) {
        errors.push(errorMessage);
      }

      return errors;
    }, []);
  };
}