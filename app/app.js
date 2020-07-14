#!/usr/bin/env node

import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'
import { execInquirer } from './inquirer'
import { executeScripts } from './scripts/executeScripts'

clear()

console.log(chalk.yellow(figlet.textSync('R A Boosted ', { horizontalLayout: 'full' })))

execInquirer().then(choices => {
  const chosenOnes = Object.keys(choices).filter(x => !!choices[x] && x !== 'name')
  executeScripts(choices.name, chosenOnes)
})
