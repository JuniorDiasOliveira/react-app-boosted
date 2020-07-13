import inquirer from 'inquirer'

const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'What is the name of the project?',
    validate: (value) => !!value
  },
  {
    name: '_redux',
    type: 'confirm',
    message: 'Will you need redux?',
    validate: (value) => !!value
  },
  {
    name: '_auth',
    type: 'confirm',
    message: 'Will you need authentication?',
    validate: (value) => !!value
  },
  {
    name: '_routes',
    type: 'confirm',
    message: 'Will you need routes?',
    validate: (value) => !!value
  },
  {
    name: '_materialui',
    type: 'confirm',
    message: 'Do you want to use material UI?',
    validate: (value) => !!value
  }
]

export const execInquirer = () => {
  return inquirer.prompt(questions)
}
