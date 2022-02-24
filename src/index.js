#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';

//console.log(chalk.cyan("Which component you want to import?"))

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms))

const welcome = async () => {
    const question = chalkAnimation.rainbow("Mini Component Library")

    await sleep();
    question.stop();
}

await welcome();

const askForComponent = async () => {
    //should be multiple choices probably
    const answers = await inquirer.prompt({
        name: "question_component",
        type: "list",
        message: "Which component you want to import?",
        choices: [
            'Button',
            'BreadCrumbs',
            'progress bar',
            'Switch'
        ]
    })
    //handle answer (copying from components to X directory in some way)
}

await askForComponent();