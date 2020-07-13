import shell from 'shelljs'
import scriptList from './installers/index'

const path = process.cwd()

export const executeScripts = (name, chosenOnes) => {
  const { defaultScript, scripts } = scriptList()
  if (shell.exec(defaultScript(name).modules).code === 0) {
    const commands = [`cd ${path}/${name} &&`, 'yarn add']
    const extras = ['&&']

    chosenOnes.forEach(name => {
      const { modules, extraCommands } = scripts[name]
      commands.push(modules)
      extras.push(extraCommands || '')
    })
    console.log(commands, extras)
    return ''
  }
}
