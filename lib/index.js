"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _offcourseHelpersCardComponent = require("offcourse-helpers-card-component");

var _offcourseHelpersCardComponent2 = _interopRequireDefault(_offcourseHelpersCardComponent);

var _offcourseComponentCardSection = require("offcourse-component-card-section");

var _offcourseComponentCardSection2 = _interopRequireDefault(_offcourseComponentCardSection);

var Card = (function (_React$Component) {
  function Card(props) {
    _classCallCheck(this, Card);

    _get(Object.getPrototypeOf(Card.prototype), "constructor", this).call(this, props);
    var helpers = new _offcourseHelpersCardComponent2["default"]();
    this.partition = helpers.partition;
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
    key: "createSections",
    value: function createSections(schema, model) {
      var partitions = this.partition(schema, model);
      return _ramda2["default"].mapIndexed(function (partition, index) {
        return _react2["default"].createElement(_offcourseComponentCardSection2["default"], { key: index, section: partition });
      }, partitions);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var model = _props.model;
      var schema = _props.schema;

      var sections = this.createSections(schema, model);
      return _react2["default"].createElement(
        "section",
        { className: this.classes() },
        sections
      );
    }
  }]);

  return Card;
})(_react2["default"].Component);

Card.defaultProps = {};

Card.propTypes = {
  model: _react2["default"].PropTypes.object.isRequired,
  schema: _react2["default"].PropTypes.array.isRequired,
  context: _react2["default"].PropTypes.string
};

exports["default"] = Card;
module.exports = exports["default"];