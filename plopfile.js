const path = require('path')

module.exports = plop => {
  const cwd = process.cwd()
  plop.setWelcomeMessage('Welecome to use tiger-paw!')

  plop.setGenerator('default', {
    description: 'this is a skeleton plopfile',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Template name'
    }],
    actions: data => {
      const workdir = path.join(cwd, data.name.toLowerCase())

      const actions = [{
        type: 'addMany',
        destination: workdir,
        templateFiles: [
          'templates/**/*',
          'templates/**/.*',
        ],
        globOptions: {}
      }]

      return actions
    }
  })
}
