'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = composeValidators;

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _createValidatorWithMultipleErrors = require('./internal/createValidatorWithMultipleErrors');

var _createValidatorWithMultipleErrors2 = _interopRequireDefault(_createValidatorWithMultipleErrors);

var _createValidatorWithSingleError = require('./internal/createValidatorWithSingleError');

var _createValidatorWithSingleError2 = _interopRequireDefault(_createValidatorWithSingleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function composeValidators() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return function configurableValidators(sharedConfig) {
    var config = void 0;

    if (typeof sharedConfig === 'string') {
      config = { field: sharedConfig };
    } else {
      config = (0, _extends3.default)({}, sharedConfig);
    }

    if (config.multiple === true) {
      return (0, _createValidatorWithMultipleErrors2.default)(validators.slice(0), (0, _lodash2.default)(config, 'multiple'));
    }

    return (0, _createValidatorWithSingleError2.default)(validators.slice(0), config);
  };
}