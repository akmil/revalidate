'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ensureNestedValidators;

var _fillObjectFromPath = require('./fillObjectFromPath');

var _fillObjectFromPath2 = _interopRequireDefault(_fillObjectFromPath);

var _internalCombineNestedValidators = require('./internalCombineNestedValidators');

var _internalCombineNestedValidators2 = _interopRequireDefault(_internalCombineNestedValidators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureNestedValidators(validators) {
  var baseShape = Object.keys(validators).reduce(function (root, path) {
    return (0, _extends3.default)({}, root, (0, _fillObjectFromPath2.default)(root, path.split('.'), validators[path]));
  }, {});

  return (0, _internalCombineNestedValidators2.default)(baseShape);
}