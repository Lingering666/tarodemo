"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../../npm/redux/lib/redux.js");

var _demoRedux = require("./demoRedux.js");

var _demoRedux2 = _interopRequireDefault(_demoRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  demo: _demoRedux2.default
});