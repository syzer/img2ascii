#!/usr/bin/env node

const errMsg = require('./errorMsg')
const version = require('./package.json').version
const argv = require('yargs')
  .usage('Usage: $0 [url|file] --cols [num] --ratio [num]')
  .option('c', {
    alias: 'cols',
    default: 80,
    describe: 'Number of columns in terminal'
  })
  .option('r', {
    alias: 'ratio',
    default: 1,
    describe: 'Aspect ratio. Try 0.5 to flatten image\nand 2 to lengthen image'
  })
  .option('v', {
    alias: 'version',
    describe: `Prints version: ${version}`
  })
  .demand(1)
  .argv

process.on('uncaughtException', errMsg.printErr)

const img2ascii = require('./img2ascii')(argv)
  .pipe(process.stdout)
