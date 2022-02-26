#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import fs from 'fs';

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
        name: "selectedComponents",
        type: "checkbox",
        message: "Which component you want to import?",
        choices: [
            'Button',
            'BreadCrumbs',
            'progress bar',
            'Switch'
        ]
    })
    answers.selectedComponents.map((component) => {
        fs.copyFile(
        `./${component}/${component}.tsx`,
        `src/components/${component}`,
        () => { console.log(chalk.cyan(`Created ${component} sucessfully!`)) }
        )
    })
    //handle answer (copying from components to X directory in some way)
}

await askForComponent();