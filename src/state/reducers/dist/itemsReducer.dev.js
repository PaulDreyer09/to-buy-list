"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SelectItemList = _interopRequireDefault(require("../../Components/SelectItemList"));

var _types = require("../action-creators/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  items: [],
  selectItemsList: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  //let newItemsList = [...state.items];
  switch (action.type) {
    //Fetch items from api and update state
    //Payload: array of listItem objects
    case _types.FETCH_ITEMS:
      return _objectSpread({}, state, {
        items: action.payload
      });
    //Payload: new created list item

    case _types.POST_ITEM:
      var createdItem = action.payload;

      var listAfterPost = _toConsumableArray(state.items);

      listAfterPost.push(createdItem);
      return _objectSpread({}, state, {
        items: listAfterPost
      });
    //Payload: listItem with needed changes applied to it

    case _types.UPDATE_ITEM:
      //initialise new state data
      var newItemsList = _toConsumableArray(state.items);

      var index = newItemsList.findIndex(function (element) {
        return element.id === action.payload.id;
      });
      newItemsList[index] = action.payload;
      return _objectSpread({}, state, {
        items: newItemsList
      });
    //Payload: listItem id that needs to be deleted

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
    //The following 3 actions are for the SelectItemsList for ShoppingList component to add item to a shopping list from a wishlist
    //Payload: list id to select as the selectItemsList
    //Select all items for the corresponding list and add a checked value for checking if the item is checked in a select list

    case _types.SELECT_ITEM_LIST_DATA:
      var selectItemList = state.items.filter(function (item) {
        return item.listId == action.payload;
      });
      selectItemList = selectItemList.map(function (item) {
        return {
          data: item,
          checked: false
        };
      });
      return _objectSpread({}, state, {
        selectItemsList: selectItemList
      });
    //Payload: none
    //Clear the selectItemsList so the data would be reinitialised as bugs were caused without reinitialisation

    case _types.REMOVE_ITEM_LIST_DATA:
      return _objectSpread({}, state, {
        selectItemsList: []
      });
    //Payload: itemId for item to be checked
    //Toggle checked for item in selectItemList

    case _types.CHECK_SELECT_ITEM:
      var selectItemsListAfterCheck = _toConsumableArray(state.selectItemsList);

      var checkId = action.payload;
      var checkIndex = selectItemsListAfterCheck.findIndex(function (item) {
        return item.data.id === checkId;
      });

      if (checkIndex >= 0) {
        var itemToCheck = selectItemsListAfterCheck[checkIndex];
        itemToCheck.checked = !itemToCheck.checked;
        selectItemsListAfterCheck[checkIndex] = itemToCheck;
        return _objectSpread({}, state, {
          selectItemsList: selectItemsListAfterCheck
        });
      } else {
        console.log('Cannot find item to check id: ', checkId);
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports["default"] = _default;