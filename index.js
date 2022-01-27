#!/usr/bin/env node

import inquirer from  'inquirer';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import gradient from 'gradient-string'

console.log("Hi there");

let player;

const sleep = (ms = 2500) => new Promise((r) => setTimeout(r,ms));

async function welcome() {
    console.log('Are you palying');
}

await welcome()

async function determiningName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'I dont know';
        },
    });
    player = answers.player_name;
}

await determiningName();

async function test() {
    const decision = await inquirer.prompt({
        name: 'testAC',
        type: 'list',
        message: 'Who invented AC technology?',
        choices: [
            'Albert Einstein',
            'Nikola Tesla',
            'Max Planck',
            'Donald Trump',
        ],
    });
    return decisionP(decision.testAC == 'Nikola Tesla');
}

await test();

async function decisionP(isCorrect) {
    const spinner = createSpinner('Checking...').start();
    
    await sleep();

    if (isCorrect) {
        spinner.success({text:`Nice work ${player}`});
    }else{
        spinner.error({text: `Wrong answer ${player}`})
        process.exit(1);
    }
}