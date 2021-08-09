"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../action-creators/types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  wishLists: [],
  shoppingLists: [],
  selectedList: {},
  didSelectList: false
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    //Payload: array of list objects
    case _types.FETCH_LISTS:
      //console.log('FETCH_LISTS action called')
      var lists = action.payload; //Split Lists into wishlists and shoppinglists

      var wishListsData = lists.filter(function (list) {
        return list.listType === 0;
      });
      var shoppingListsData = lists.filter(function (list) {
        return list.listType !== 0;
      });
      return _objectSpread({}, state, {
        wishLists: wishListsData,
        shoppingLists: shoppingListsData
      });
    //Payload: list object

    case _types.POST_LIST:
      var postList = action.payload;
      var afterPostLists = undefined; //push list to wishlists or shoppinglists depending on listType

      if (postList.listType === 0) {
        afterPostLists = _toConsumableArray(state.wishLists);
        afterPostLists.push(postList);
        return _objectSpread({}, state, {
          wishLists: afterPostLists
        });
      } else {
        afterPostLists = _toConsumableArray(state.shoppingLists);
        afterPostLists.push(postList);
        return _objectSpread({}, state, {
          shoppingLists: afterPostLists
        });
      }

    //Payload: list id

    case _types.DELETE_LIST:
      var afterDeleteLists = undefined;
      var listToDelete = action.payload;
      var deleteIndex = undefined;

      if (listToDelete.listType === 0) {
        afterDeleteLists = _toConsumableArray(state.wishLists);
        deleteIndex = afterDeleteLists.findIndex(function (obj) {
          return obj.id === listToDelete.id;
        }); //console.log('DELETE_INDEX',deleteIndex);

        afterDeleteLists.splice(deleteIndex, 1);
        return _objectSpread({}, state, {
          wishLists: afterDeleteLists
        });
      } else {
        afterDeleteLists = _toConsumableArray(state.shoppingLists);
        deleteIndex = afterDeleteLists.findIndex(function (obj) {
          return obj.id === listToDelete.id;
        });
        afterDeleteLists.splice(deleteIndex, 1);
        return _objectSpread({}, state, {
          shoppingLists: afterDeleteLists
        });
      }

    case _types.UPDATE_LIST:
      //Wishlist or Shopping
      var afterUpdateList = undefined;
      var updatedItem = action.payload;
      var updateIndex = undefined;

      if (updatedItem.listType === 0) {
        afterUpdateList = _toConsumableArray(state.wishLists);
        updateIndex = afterUpdateList.findIndex(function (obj) {
          return obj.id === updatedItem.id;
        }); //console.log('DELETE_INDEX',updateIndex);

        afterUpdateList.splice(updateIndex, 1, updatedItem);
        return _objectSpread({}, state, {
          wishLists: afterUpdateList
        });
      } else {
        afterUpdateList = _toConsumableArray(state.shoppingLists);
        updateIndex = afterUpdateList.findIndex(function (obj) {
          return obj.id === updatedItem.id;
        });
        afterUpdateList.splice(updateIndex, 1, updatedItem);
        return _objectSpread({}, state, {
          shoppingLists: afterUpdateList
        });
      }

    case _types.SELECT_LIST:
      var selectedListId = action.payload;
      var selectedListIndex = state.wishLists.findIndex(function (list) {
        return list.id === selectedListId;
      });
      var selectedList = state.wishLists[selectedListIndex];
      return _objectSpread({}, state, {
        selectedList: selectedList,
        didSelectList: true
      });

    case _types.REMOVE_SELECT_LIST:
      return _objectSpread({}, state, {
        selectedList: {},
        didSelectList: false
      });

    default:
      return state;
  }
};

exports["default"] = _default;