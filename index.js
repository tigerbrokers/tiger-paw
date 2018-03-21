#!/usr/bin/env node
const yargs = require('yargs')

const create = require('./lib/create.js')

yargs.command({
  command: 'create [project]',
  desc: 'Create new project',
  builder (yargs) {
    yargs
      .option('force', {
        type: 'boolean',
        alias: 'f',
        default: false,
        describe: 'force to download template'
      })
      .option('template', {
        alias: 't',
        describe: 'use template',
        default: '@tigerbrokers/paw-simple'
      })
      .option('registry', {
        alias: 'r',
        describe: 'use npm registry',
        default: 'http://r.npm.tigerbrokers.com'
      })
  },
  handler: create
})

yargs.showHelpOnFail(true)
yargs.help().argv
