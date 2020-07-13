"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._default = void 0;
var path = process.cwd();

var _default = function _default(name) {
  return {
    modules: "cd ".concat(path, " && yarn create react-app ").concat(name),
    extraCommands: ''
  };
};

exports._default = _default;