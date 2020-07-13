"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeScripts = void 0;

var _shelljs = _interopRequireDefault(require("shelljs"));

var _index = _interopRequireDefault(require("./installers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = process.cwd();

var executeScripts = function executeScripts(name, chosenOnes) {
  var _scriptList = (0, _index["default"])(),
      defaultScript = _scriptList.defaultScript,
      scripts = _scriptList.scripts;

  if (_shelljs["default"].exec(defaultScript(name).modules).code === 0) {
    var commands = ["cd ".concat(path, "/").concat(name, " &&"), 'yarn add'];
    var extras = ['&&'];
    chosenOnes.forEach(function (name) {
      var _scripts$name = scripts[name],
          modules = _scripts$name.modules,
          extraCommands = _scripts$name.extraCommands;
      commands.push(modules);
      extras.push(extraCommands || '');
    });
    console.log(commands, extras);
    return '';
  }
};

exports.executeScripts = executeScripts;