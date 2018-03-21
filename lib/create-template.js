const { join } = require('path')
const runPlop = require('./runplop')

module.exports = function (args) {
  const pfile = join(__dirname, '../plopfile.js')
  runPlop(pfile, args.name)
}
