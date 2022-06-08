"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _BigButtons = _interopRequireDefault(require("./components/BigButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_BigButtons.default, {
    text: "SWAP",
    iconColor: "#FFF",
    textColor: "#FFFFFF",
    bgColor: "#7C63F5"
  }));
}

var _default = App;
exports.default = _default;