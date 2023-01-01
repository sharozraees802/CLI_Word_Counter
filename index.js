import gradient from 'gradient-string';
import figlet from "figlet";
import inquirer from 'inquirer';
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ CLI Word Count !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the word: "
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(`Your Sentence Word Count is ${word.length}`);
