"use strict";

exports.__esModule = true;

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

exports.default = fillObjectFromPath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fillObjectFromPath(object, path, finalValue) {
  var _extends2;

  if (path.length <= 0) {
    return finalValue;
  }

  var head = path[0];
  var tail = path.slice(1);


  return (0, _extends4.default)({}, object, (_extends2 = {}, _extends2[head] = fillObjectFromPath(object[head] || {}, tail, finalValue), _extends2));
}