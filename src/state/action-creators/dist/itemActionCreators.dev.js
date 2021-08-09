"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkItem = exports.removeItemListData = exports.setSelectItemListData = exports.deleteItem = exports.updateItem = exports.postItem = exports.fetchItems = void 0;

var _types = require("./types");

//FETCH ITEMS
var fetchItems = function fetchItems() {
  return function (dispatch) {
    //console.log("fetchItems action called");
    fetch('http://localhost:5000/listItems').then(function (res) {
      return res.json();
    }).then(function (listItems) {
      return dispatch({
        type: _types.FETCH_ITEMS,
        payload: listItems
      });
    });
  };
}; //POST ITEM
//Parameter: created item object


exports.fetchItems = fetchItems;

var postItem = function postItem(newItem) {
  return function (dispatch) {
    //console.log('POST ITEM', newItem);
    fetch('http://localhost:5000/listItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: _types.POST_ITEM,
        payload: data
      });
    });
  };
}; //UPDATE ITEM
//Parameter: item object with changes applied, DO NOT EDIT ID


exports.postItem = postItem;

var updateItem = function updateItem(item) {
  return function (dispatch) {
    fetch("http://localhost:5000/listItems/".concat(item.id), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (res) {
      return res.json;
    }).then(function (data) {
      return dispatch({
        type: _types.UPDATE_ITEM,
        payload: item
      });
    });
  };
}; //DELETE ITEM
//Parameter: item id


exports.updateItem = updateItem;

var deleteItem = function deleteItem(itemId) {
  return function (dispatch) {
    fetch("http://localhost:5000/listItems/".concat(itemId), {
      method: 'DELETE'
    }).then(function () {
      return dispatch({
        type: _types.DELETE_ITEM,
        payload: itemId
      });
    });
  };
}; //Initialise items list data for SelectItemsList component
//Parameters: list of items from the selected list


exports.deleteItem = deleteItem;

var setSelectItemListData = function setSelectItemListData(listId) {
  return function (dispatch) {
    dispatch({
      type: _types.SELECT_ITEM_LIST_DATA,
      payload: listId
    });
  };
};

exports.setSelectItemListData = setSelectItemListData;

var removeItemListData = function removeItemListData() {
  return function (dispatch) {
    dispatch({
      type: _types.REMOVE_ITEM_LIST_DATA,
      payload: {}
    });
  };
};

exports.removeItemListData = removeItemListData;

var checkItem = function checkItem(itemId) {
  return function (dispatch) {
    dispatch({
      type: _types.CHECK_SELECT_ITEM,
      payload: itemId
    });
  };
}; //const [selectedItems, setSelectedItems] = useState(listItems.map(item => {return {name: item.name, checked: false}}));


exports.checkItem = checkItem;