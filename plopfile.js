const path = require('path')

module.exports = plop => {
    const cwd = process.cwd()
    plop.setWelcomeMessage('Welecome to use tiger-paw!')

    plop.setGenerator('demo', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Project name'
        }, {
            type: 'input',
            name: 'dist',
            default: 'dist',
            message: 'Release files folder'
        }],
        actions: data => {
            const workdir = path.join(cwd, data.name.toLowerCase())
            const d = file => path.join(workdir, file || '/')

            // Ensure path end with slash to upload files propertly
            data.dist = data.dist.replace(/\/?$/, '/')

            const actions = [{
                type: 'addMany',
                destination: d(),
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
