"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer;

var _index = require("../../npm/redux-immutablejs/lib/index.js");

var _immutable = require("../../npm/immutable/dist/immutable.js");

var _demo = require("../../constants/demo.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _index.createReducer)((0, _immutable.fromJS)({
  num: 0
}), (_createReducer = {}, _defineProperty(_createReducer, _demo.ADD, function (state) {
  var counterState = state.toJS();
  return state.merge({
    num: counterState.num + 1
  });
}), _defineProperty(_createReducer, _demo.MINUS, function (state) {
  var counterState = state.toJS();
  return state.merge({
    num: counterState.num - 1
  });
}), _createReducer));