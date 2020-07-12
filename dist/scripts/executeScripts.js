"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeScripts = void 0;

var _shelljs = _interopRequireDefault(require("shelljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = process.cwd();

var defaultScripts = function defaultScripts(name) {
  return {
    modules: "cd ".concat(path, " && yarn create react-app ").concat(name),
    extraCommands: ''
  };
};

var reduxScripts = function reduxScripts() {
  return {
    modules: 'redux react redux',
    extraCommands: null
  };
};

var routesScripts = function routesScripts() {
  return {
    modules: 'react-router react-router-dom',
    extraCommands: 'mkdir -p src/pages && touch src/pages/home.jsx'
  };
};

var materialUIScripts = function materialUIScripts() {
  return {
    modules: '@material-ui/core @material-ui/icons',
    extraCommands: null
  };
};

var authScripts = function authScripts() {
  return {
    modules: 'react-use-auth',
    extraCommands: null
  };
};

var executeScripts = function executeScripts(_ref) {
  var name = _ref.name,
      redux = _ref.redux,
      auth = _ref.auth,
      routes = _ref.routes,
      materialUI = _ref.materialUI;

  if (_shelljs["default"].exec(defaultScripts(name).modules).code === 0) {
    var commands = ["cd ".concat(path, "/").concat(name, " &&"), 'yarn add'];
    var extras = ['&&'];

    if (redux) {
      var _reduxScripts = reduxScripts(),
          modules = _reduxScripts.modules,
          extraCommands = _reduxScripts.extraCommands;

      commands.push(modules);
      extras.push(extraCommands || '');
    }

    if (routes) {
      var _routesScripts = routesScripts(),
          _modules = _routesScripts.modules,
          _extraCommands = _routesScripts.extraCommands;

      commands.push(_modules);
      extras.push(_extraCommands || '');
    }

    return _shelljs["default"].exec(commands.concat(extras).join(' ')).code;
  }
};

exports.executeScripts = executeScripts;