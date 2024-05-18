import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    {
        question: chalk.greenBright("What is full form in HTML?"),
        choices: [
            "A programming language",
            "Hyper Text Markup Language",
            "None of the Above",
        ],
        correct_answer: "Hyper Text Markup Language",
    },
    {
        question: chalk.greenBright("Which tag is used to define an ordered list?"),
        choices: ["td", "ol", "ul"],
        correct_answer: "ol",
    },
    {
        question: chalk.greenBright("What does HTML do?"),
        choices: ["Web Structure", "App Structure", "None of these"],
        correct_answer: "Web Structure",
    },
];
async function startQuiz() {
    console.log(chalk.yellowBright("\n\t ********* Welcome To The Quiz Game **********\n"));
    let score = 0;
    for (let question of questions) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "Answer",
                message: question.question,
                choices: question.choices,
            },
        ]);
        if (answer.Answer === question.correct_answer) {
            console.log(chalk.magenta("Correct Answer"));
            score++;
        }
        else {
            console.log(chalk.redBright("Incorrect, please try again!"));
        }
    }
    console.log(chalk.cyan("Quiz end : Here are your results:"));
    console.log(chalk.yellowBright(`\n\tYour score is ${score} out of ${questions.length}\n`));
}
startQuiz();
