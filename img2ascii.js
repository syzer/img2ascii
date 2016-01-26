#!/usr/bin/env node
'use strict';

const gm = require('gm');
const pictureTube = require('picture-tube');
const argv = require('yargs')
    .usage('Usage: $0 [url] --cols [num]')
    .option('c', {
        alias: 'cols',
        default: 80,
        describe: 'how many cols in terminal'
    })
    .demand(1)
    .argv;

const isUrl = (str) => str.match('http|0.0|localhost');

const pipeIn = (isUrl(argv._[0]) ?
    require('request-promise')(argv._[0]) :
    require('fs').createReadStream(argv._[0]))
    .on('error', err => {throw new Error(err)});

gm(pipeIn)
    .resize(240, 240)
    .stream('png')
    .pipe(pictureTube({cols: argv.cols}))
    .pipe(process.stdout);
