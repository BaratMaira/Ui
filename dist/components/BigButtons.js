"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/bigButtons.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BigButtons = props => {
  const {
    text,
    textColor,
    bgColor,
    iconColor,
    hideIcon,
    disabled
  } = props;
  const customStyle = {
    block: {
      color: textColor,
      textTransform: 'upperCase',
      backgroundColor: bgColor
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-container",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: disabled ? 'disabled-big-btn' : 'big-btn',
    style: customStyle.block
  }, text));
};

var _default = BigButtons;
exports.default = _default;