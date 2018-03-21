#!/usr/bin/env node
const yargs = require('yargs')

const create = require('./lib/create.js')

yargs.command({
  command: 'create [project]',
  desc: 'Create new project',
  builder (yargs) {
    yargs.option('template', {
      alias: 't',
      describe: 'use template'
    })
  },
  handler (argv) {
    create(argv)
  }
})

yargs.showHelpOnFail(true)
yargs.help().argv
