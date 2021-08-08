"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSelectedList = exports.selectList = exports.updateList = exports.deleteList = exports.postList = exports.fetchLists = void 0;

var _types = require("./types");

var fetchLists = function fetchLists() {
  return function (dispatch) {
    //console.log('fetchList action called');
    fetch('http://localhost:5000/lists').then(function (res) {
      return res.json();
    }).then(function (data) {
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
};

exports.updateList = updateList;

var selectList = function selectList(listId) {
  return function (dispatch) {
    dispatch({
      type: _types.SELECT_LIST,
      payload: listId
    });
  };
};

exports.selectList = selectList;

var removeSelectedList = function removeSelectedList() {
  return function (dispatch) {
    dispatch({
      type: _types.REMOVE_SELECT_LIST,
      payload: {}
    });
  };
};

exports.removeSelectedList = removeSelectedList;