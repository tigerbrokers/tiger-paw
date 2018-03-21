const { join } = require('path')
const { lstatSync } = require('fs')

const os = require('os')
const shell = require('shelljs')

const homedir = os.homedir()


module.exports = function (moduleName, force, registry) {
  const moduleDir = join(homedir, '.tiger-paw/lib')
  shell.exec(`mkdir -p ${moduleDir}`)

  const plopfile = join(moduleDir, 'node_modules', moduleName, 'plopfile.js')

  if (force) {
    download()
    return plopfile
  }

  try {
    const stats = lstatSync(plopfile)
    if (stats.isFile()) {
      return plopfile
    }
    download()
  } catch (e) {
    download()
  }

  function download () {
    console.log(`Download template ${moduleName}`)

    const cmds = [
      `cd ${moduleDir}`,
      `npm i --registry=${registry} ${moduleName}`
    ].join('&&')

    shell.exec(cmds, { silent: true })
  }

  return plopfile
}
