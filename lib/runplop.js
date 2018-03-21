const nodePlop = require('node-plop')
const chalk = require('chalk')

module.exports = async function runPlop (plopFile, name) {
  const plop = nodePlop(plopFile)

  let generator
  try {
    generator = await plop.getGenerator('default')
  } catch (e) {
    console.log(chalk.red('[FAILED]'), 'template error.')
    return
  }

  const bypass = []
  const data = {}
  if (name) {
    bypass.push('name')
    data.name = name
  }

  const promptResult = await generator.runPrompts(bypass)
  Object.assign(data, promptResult)

  const result = await generator.runActions(data, {
    logging: true
  }).catch(e => {
    console.log(chalk.red('[FAILED]'), 'template error.')
    console.error(e)
    return
  })

  if (!result) return

  result.changes.forEach(function(line) {
    console.log(chalk.green('[SUCCESS]'), line.type, line.path)
  })

  result.failures.forEach(function (line) {
    const logs = [chalk.red('[FAILED]')]
    if (line.type) { logs.push(line.type) }
    if (line.path) { logs.push(line.path) }

    const error = line.error || line.message
    logs.push(chalk.red(error))

    console.log.apply(console, logs)
  })
}
