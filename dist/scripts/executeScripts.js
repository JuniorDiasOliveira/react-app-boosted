"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeScripts = void 0;

var _shelljs = _interopRequireDefault(require("shelljs"));

var _index = _interopRequireDefault(require("./installers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = process.cwd();

var executeScripts = function executeScripts(projectName, chosenOnes) {
  var _scriptList = (0, _index["default"])(),
      defaultScript = _scriptList.defaultScript,
      scripts = _scriptList.scripts;

  var commands = ["cd ".concat(path, "/").concat(projectName, " &&"), 'yarn add'];
  var extras = ['&&'];

  if (_shelljs["default"].exec(defaultScript(projectName).modules).code === 0) {
    chosenOnes.forEach(function (scriptName) {
      var _scripts$scriptName = scripts[scriptName](),
          modules = _scripts$scriptName.modules,
          extraCommands = _scripts$scriptName.extraCommands;

      commands.push(modules);
      extras.push(extraCommands || '');
    });
    return _shelljs["default"].exec(commands.concat(extras).join(' '));
  }
};

exports.executeScripts = executeScripts;