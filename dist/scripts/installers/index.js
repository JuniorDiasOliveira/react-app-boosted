"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth2 = require("./auth/_auth");

var _redux2 = require("./redux/_redux");

var _materialui = require("./material-ui/_materialui");

var _router2 = require("./router/_router");

var _default3 = require("./_default");

var scripts = function scripts() {
  return {
    scripts: {
      _auth: _auth2._authentication,
      _redux: _redux2._redux,
      _materialUi: _materialui._materialUi,
      _router: _router2._router
    },
    defaultScript: _default3._default
  };
};

var _default2 = scripts;
exports["default"] = _default2;