"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleItemImportant = exports.postItem = exports.fetchItems = void 0;

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


exports.fetchItems = fetchItems;

var postItem = function postItem(newItem) {
  return function (dispatch) {
    console.log('POST ITEM', newItem);
    fetch('http://localhost:5000/listItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log('post data', data);
      return dispatch({
        type: _types.POST_ITEM,
        payload: data
      });
    });
  };
}; //PATCH TOGGLE ITEM IMPORTANT
//Toggle important true or false in item


exports.postItem = postItem;

var toggleItemImportant = function toggleItemImportant(item) {
  return function (dispatch) {
    item.important = !item.important;
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
        type: _types.TOGGLE_ITEM_IMPORTANT,
        payload: item
      });
    });
  };
};

exports.toggleItemImportant = toggleItemImportant;