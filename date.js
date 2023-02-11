#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .command('current', 'Выводит текущую дату', () => {}, setDate)
    .command('add', 'Выводит текущую дату', () => {}, setDate)
    .command('sub', 'Выводит текущую дату', () => {}, setDate)
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

function setDate(argv)
{
    let command = argv._[0];
    let date = new Date;
    let currentDate = '';

    if (argv.y != undefined) {
        if(command == 'sub') {
            date.setFullYear(date.getFullYear() - Number.parseInt(argv.y));
        }
        else if(command == 'add') {
            date.setFullYear(date.getFullYear() + Number.parseInt(argv.y));
        }
        else {
            currentDate += date.getFullYear() + ' y ';
        }
    }
    if (argv.m != undefined) {
        if(command == 'sub') {
            date.setMonth(date.getMonth() - Number.parseInt(argv.m));
        }
        else if(command == 'add') {
            date.setMonth(date.getMonth() + Number.parseInt(argv.m));
        }
        else {
            currentDate += date.getMonth() + ' m ';
        }
    }
    if (argv.d != undefined) {
        if(command == 'sub') {
            date.setDate(date.getDate() - Number.parseInt(argv.d));
        }
        else if(command == 'add') {
            date.setDate(date.getDate() + Number.parseInt(argv.d))
        }
        else {
            currentDate += date.getDate() + ' d ';
        }
    }
    
    if (currentDate) {
        date = currentDate;
    }

    console.log(date);
}