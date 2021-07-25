"use strict";

var _listActionCreators = require("../state/action-creators/listActionCreators");

var _reactRedux = require("react-redux");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WishListsPage = function WishListsPage(props) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  console.log(state);
};