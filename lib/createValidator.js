'use strict';

exports.__esModule = true;
exports.default = createValidator;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _markAsValueValidator = require('./internal/markAsValueValidator');

var _markAsValueValidator2 = _interopRequireDefault(_markAsValueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createValidator(curriedDefinition, defaultMessageCreator) {
  var messageCreatorIsString = typeof defaultMessageCreator === 'string';

  (0, _invariant2.default)(messageCreatorIsString || typeof defaultMessageCreator === 'function', 'Please provide a message string or message creator function');

  return function validator(config, value, allValues) {
    var configIsObject = (0, _lodash2.default)(config);

    if (!messageCreatorIsString) {
      (0, _invariant2.default)(typeof config === 'string' || configIsObject, 'Please provide a string or configuration object with a `field` or ' + '`message` property');

      if (configIsObject) {
        (0, _invariant2.default)('field' in config || 'message' in config, 'Please provide a `field` or `message` property');
      }
    }

    var message = void 0;

    if (configIsObject && 'message' in config) {
      message = config.message;
    } else if (messageCreatorIsString) {
      message = defaultMessageCreator;
    } else if (configIsObject) {
      message = defaultMessageCreator(config.field);
    } else {
      message = defaultMessageCreator(config);
    }

    var valueValidator = curriedDefinition(message);

    if (arguments.length <= 1) {
      return (0, _markAsValueValidator2.default)(valueValidator);
    }

    return valueValidator(value, allValues);
  };
}