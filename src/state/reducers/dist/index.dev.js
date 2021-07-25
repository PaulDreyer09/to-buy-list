"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _itemsReducer = _interopRequireDefault(require("./itemsReducer"));

var _listReducer = _interopRequireDefault(require("./listReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  lists: _listReducer["default"],
  items: _itemsReducer["default"]
});

exports["default"] = _default;