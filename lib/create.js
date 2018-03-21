const runPlop = require('./runplop')
const download = require('./download')

module.exports = function ({
  project,
  template = "@tigerbrokers/paw-simple",
  force = false
}) {
  const file = download(template, force)
  runPlop(file, project)
}

