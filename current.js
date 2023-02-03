#!/usr/bin/env node
let currentDate = '';
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
    currentDate += date.getFullYear() + ' y ';
}
if (argv.m != undefined) {
    currentDate += date.getMonth() + ' m ';
}
if (argv.d != undefined) {
    currentDate += date.getDate() + ' d ';
}

if (currentDate) {
    console.log(currentDate);
}
else {
    console.log(date);
}