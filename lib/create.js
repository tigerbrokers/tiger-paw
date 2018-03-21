const runPlop = require('./runplop')
const download = require('./download')

module.exports = function ({
  project,
  registry,
  template,
  force
}) {
  const file = download(template, force, registry)
  runPlop(file, project)
}

