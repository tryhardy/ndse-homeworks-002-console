#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const date = new Date;
const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'string',
    })
    .option('month', {
        alias: 'm',
        type: 'string',
    })
    .option('date', {
        alias: 'd',
        type: 'string',
    })
    .argv;

if (argv.y != undefined) {
    date.setFullYear(date.getFullYear() + Number.parseInt(argv.y));
}
if (argv.m != undefined) {
    date.setMonth(date.getMonth() + Number.parseInt(argv.m));
}
if (argv.d != undefined) {
    date.setDate(date.getDate() + Number.parseInt(argv.d))
}

console.log(date);