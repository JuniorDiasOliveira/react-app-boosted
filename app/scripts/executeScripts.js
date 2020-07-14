import shell from 'shelljs'
import scriptList from './installers/index'

const path = process.cwd()

export const executeScripts = (projectName, chosenOnes) => {
  const { defaultScript, scripts } = scriptList()
  const commands = [`cd ${path}/${projectName} &&`, 'yarn add']
  const extras = ['&&']

  if (shell.exec(defaultScript(projectName).modules).code === 0) {
    chosenOnes.forEach(scriptName => {
      const { modules, extraCommands } = scripts[scriptName]()
      commands.push(modules)
      extras.push(extraCommands || '')
    })
    return shell.exec(commands.concat(extras).join(' '))
  }
}
