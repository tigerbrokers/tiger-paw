#!/usr/bin/env node
const yargs = require('yargs')

const create = require('./lib/create.js')
const createTemplate = require('./lib/create-template.js')

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

yargs.command({
  command: 'create-template [name]',
  desc: 'Create an template for tiger-paw',
  handler: createTemplate
})

yargs.showHelpOnFail(true)
yargs.help().argv
