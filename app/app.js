#!/usr/bin/env node

import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'
import { execInquirer } from './inquirer'
import { executeScripts } from './scripts/executeScripts'

clear()

console.log(chalk.yellow(figlet.textSync('junior', { horizontalLayout: 'full' })))

execInquirer().then(executeScripts)
