#!/usr/bin/env node
'use strict';

const gm = require('gm');
const request = require('request-promise');
const pictureTube = require('picture-tube');
let argv = require('yargs')
    .usage('Usage: $0 [url] --cols [num]')
    .option('c', {
        alias: 'cols',
        default: 80,
        describe: 'how many cols in terminal'
    })
    .demand(1)
    .argv;

gm(request(argv._[0]))
    .resize(240, 240)
    .stream('png')
    .pipe(pictureTube({cols: argv.cols}))
    .pipe(process.stdout);
