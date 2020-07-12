import shell from 'shelljs'
const path = process.cwd()

export const executeScripts = ({ name, redux, auth, routes, materialUI }) => {
  if (shell.exec(defaultScripts(name).modules).code === 0) {
    const commands = [`cd ${path}/${name} &&`, 'yarn add']
    const extras = ['&&']

    if (redux) {
      const { modules, extraCommands } = reduxScripts()
      commands.push(modules)
      extras.push(extraCommands || '')
    }

    if (routes) {
      const { modules, extraCommands } = routesScripts()
      commands.push(modules)
      extras.push(extraCommands || '')
    }

    return shell.exec(commands.concat(extras).join(' ')).code
  }
}
