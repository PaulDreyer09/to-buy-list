"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../action-creators/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  items: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newItemsList = _toConsumableArray(state.items);

  switch (action.type) {
    //Fetch items from api and update state
    case _types.FETCH_ITEMS:
      return _objectSpread({}, state, {
        items: action.payload
      });
    //Toggle item important in api and update state

    case _types.POST_ITEM:
      var createdItem = action.payload;

      var listAfterPost = _toConsumableArray(state.items);

      listAfterPost.push(createdItem);
      console.log("created item reducer", action);
      return _objectSpread({}, state, {
        items: listAfterPost
      });

    case _types.TOGGLE_ITEM_IMPORTANT:
      //initialise new state data
      var _newItemsList = _toConsumableArray(state.items);

      var index = _newItemsList.findIndex(function (element) {
        return element.id == action.payload.id;
      });

      _newItemsList[index] = action.payload;
      return _objectSpread({}, state, {
        items: _newItemsList
      });

    case _types.DELETE_ITEM:
      //delete item from list            
      var deleteItemsList = _toConsumableArray(state.items);

      var itemIndex = deleteItemsList.findIndex(function (item) {
        return item.id == action.payload;
      });

      if (itemIndex > -1) {
        deleteItemsList.splice(itemIndex, 1);
      }

      return _objectSpread({}, state, {
        items: deleteItemsList
      });

    default:
      return state;
  }
};

exports["default"] = _default;