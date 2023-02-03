#!/usr/bin/env node

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const random = getRandom(0, 10);

getQuestion(random);

function getQuestion(random)
{
    rl.question(
        'Загадано число в диапазоне от 0 до 10. Какое это число? ', 
        (answer) => {    

            let inputInt = Number.parseInt(answer);
            let randomInt = Number.parseInt(random);

            console.log(`Вы ввели - ${answer}`);

            if (inputInt > randomInt) {
                console.log(`Больше`);
            }
            else if (inputInt < randomInt) {
                console.log(`Меньше`);
            }
            else if(isNaN(inputInt)) {
                console.log(`Вы ввели НЕ ЧИСЛО`);
            }
            else if (inputInt === randomInt) {
                console.log(`Вы угадали! Это число - ${randomInt}`)
                rl.close();
                return;
            }

            getQuestion(random);
        }
    );
}

function getRandom(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}