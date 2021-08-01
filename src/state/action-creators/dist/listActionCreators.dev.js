"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateList = exports.deleteList = exports.postList = exports.fetchLists = void 0;

var _types = require("./types");

var fetchLists = function fetchLists() {
  return function (dispatch) {
    console.log('fetchList action called');
    fetch('http://localhost:5000/lists').then(function (res) {
      return res.json();
    }).then(function (data) {
      //console.log('fetchLists', lists)
      return dispatch({
        type: _types.FETCH_LISTS,
        payload: data
      });
    });
  };
}; //POST LIST
//Parameter: list object to be created


exports.fetchLists = fetchLists;

var postList = function postList(list) {
  return function (dispatch) {
    console.log('POST LIST', list);
    fetch('http://localhost:5000/lists', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(list)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      dispatch({
        type: _types.POST_LIST,
        payload: data
      });
    });
  };
}; //Delete all items from list before deleting list
//Parameter: List object to be deleted


exports.postList = postList;

var deleteList = function deleteList(list) {
  return function (dispatch) {
    //console.log('DELETE LIST');
    console.log(list.id);
    fetch("http://localhost:5000/lists/".concat(list.id), {
      method: 'DELETE'
    }).then(function () {
      return dispatch({
        type: _types.DELETE_LIST,
        payload: list
      });
    });
  };
}; //UPDATE LIST
//Parameter: List object with the needed changes applied to it, DO NOT EDIT ID


exports.deleteList = deleteList;

var updateList = function updateList(list) {
  return function (dispatch) {
    fetch("http://localhost:5000/lists/".concat(list.id), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list)
    }).then(function (res) {
      return res.json;
    }).then(function (data) {
      return dispatch({
        type: _types.UPDATE_LIST,
        payload: list
      });
    });
  };
}; // export const updateItem = (item) => (dispatch) => {
//     fetch(`http://localhost:5000/listItems/${item.id}`, {
//         method: 'PATCH',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(item)
//     })
//     .then(res => res.json)
//     .then(data => dispatch({type: UPDATE_ITEM, payload: item}));
// }
// //DELETE ITEM
// //Parameter: item id
// export const deleteItem = (itemId) => (dispatch ) => {
//     fetch(`http://localhost:5000/listItems/${itemId}`, {method: 'DELETE'})
//     .then(() => dispatch({type: DELETE_ITEM, payload: itemId}));
// }


exports.updateList = updateList;