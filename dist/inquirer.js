"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execInquirer = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var questions = [{
  name: 'name',
  type: 'input',
  message: 'What is the name of the project?',
  validate: function validate(value) {
    return !!value;
  }
}, {
  name: '_redux',
  type: 'confirm',
  message: 'Will you need redux?',
  validate: function validate(value) {
    return !!value;
  }
}, {
  name: '_auth',
  type: 'confirm',
  message: 'Will you need authentication?',
  validate: function validate(value) {
    return !!value;
  }
}, {
  name: '_router',
  type: 'confirm',
  message: 'Will you need routes?',
  validate: function validate(value) {
    return !!value;
  }
}, {
  name: '_materialUi',
  type: 'confirm',
  message: 'Do you want to use material UI?',
  validate: function validate(value) {
    return !!value;
  }
}];

var execInquirer = function execInquirer() {
  return _inquirer["default"].prompt(questions);
};

exports.execInquirer = execInquirer;