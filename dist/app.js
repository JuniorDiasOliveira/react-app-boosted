#!/usr/bin/env node
"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

var _clear = _interopRequireDefault(require("clear"));

var _inquirer = require("./inquirer");

var _executeScripts = require("./scripts/executeScripts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _clear["default"])();
console.log(_chalk["default"].yellow(_figlet["default"].textSync('junior', {
  horizontalLayout: 'full'
})));
(0, _inquirer.execInquirer)().then(function (choices) {
  var chosenOnes = Object.keys(choices).filter(function (x) {
    return !!choices[x] && choices[x] !== 'name';
  });
  (0, _executeScripts.executeScripts)(choices.name, chosenOnes);
});