const path = process.cwd()

export const _default = (name) => ({
  modules: `cd ${path} && yarn create react-app ${name}`,
  extraCommands: ''
})
