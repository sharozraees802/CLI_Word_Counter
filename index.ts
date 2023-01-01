import gradient from 'gradient-string';
import figlet from "figlet";
import inquirer from 'inquirer';
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ CLI Word Count !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();