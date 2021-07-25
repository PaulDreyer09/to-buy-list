"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLists = void 0;

var _types = require("./types");

var fetchLists = function fetchLists() {
  return function (dispatch) {
    console.log('fetchList action called');
    fetch('http://localhost:5000/lists').then(function (res) {
      return res.json();
    }).then(function (lists) {
      //console.log('fetchLists', lists)
      return dispatch({
        type: _types.FETCH_LISTS,
        payload: lists
      });
    });
  };
};

exports.fetchLists = fetchLists;