"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _offcourseComponentCardHeader = require("offcourse-component-card-header");

var _offcourseComponentCardHeader2 = _interopRequireDefault(_offcourseComponentCardHeader);

var _offcourseComponentCardContent = require("offcourse-component-card-content");

var _offcourseComponentCardContent2 = _interopRequireDefault(_offcourseComponentCardContent);

var _offcourseComponentCardFooter = require("offcourse-component-card-footer");

var _offcourseComponentCardFooter2 = _interopRequireDefault(_offcourseComponentCardFooter);

var Card = (function (_React$Component) {
  function Card(props) {
    _classCallCheck(this, Card);

    _get(Object.getPrototypeOf(Card.prototype), "constructor", this).call(this, props);
    this.name = "card";
  }

  _inherits(Card, _React$Component);

  _createClass(Card, [{
    key: "classes",
    value: function classes() {
      var _classnames;

      var context = this.props.context;

      var contextClass = this.name + "-" + context;
      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, contextClass, context), _classnames));
    }
  }, {
    key: "splitChildren",
    value: function splitChildren(children) {
      if (children && Array.isArray(children)) {
        var _children = _toArray(children);

        var head = _children[0];

        var tail = _children.slice(1);

        return [head, tail];
      }
      return [children];
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var model = _props.model;
      var schema = _props.schema;
      var context = _props.context;
      var selectModel = _props.selectModel;
      var children = _props.children;

      var _splitChildren = this.splitChildren(children);

      var _splitChildren2 = _slicedToArray(_splitChildren, 2);

      var image = _splitChildren2[0];
      var buttons = _splitChildren2[1];

      return _react2["default"].createElement(
        "section",
        { className: this.classes() },
        image && _react2["default"].createElement(_offcourseComponentCardHeader2["default"], { image: image }),
        _react2["default"].createElement(_offcourseComponentCardContent2["default"], { schema: schema[context] || schema, model: model }),
        buttons && _react2["default"].createElement(_offcourseComponentCardFooter2["default"], { buttons: buttons })
      );
    }
  }]);

  return Card;
})(_react2["default"].Component);

Card.defaultProps = {};

Card.propTypes = {
  model: _react2["default"].PropTypes.object.isRequired,
  schema: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.object, _react2["default"].PropTypes.array]).isRequired
};

exports["default"] = Card;
module.exports = exports["default"];