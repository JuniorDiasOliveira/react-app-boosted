"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._router = void 0;

var _router = function _router() {
  return {
    modules: 'react-router react-router-dom',
    extraCommands: 'mkdir -p src/pages && touch src/pages/home.jsx'
  };
};

exports._router = _router;