#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
// display a colorful welcome message
import chalk from "chalk";
console.log(chalk.bold.bgGreenBright("\n\t\t code with mohan - word counter"));
console.log("=".repeat(60));
// prompt the users to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence",
    }
]);
// triming the sentence and spliting it into words based on spaces
let words = answers.sentence.trim().split(" ");
// analyses of our input users sentence
console.log("=".repeat(60));
console.log(chalk.bold.bgBlueBright("sentence words: "));
console.log(words);
console.log(chalk.bold.yellowBright(`\n - word count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
