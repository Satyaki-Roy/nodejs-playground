const readline = require("readline");
const util = require("util");

const questions = [
  "What is your name? ",
  "What is your father's name? ",
  "What is your mother's name? ",
];
const answers = [];

// create an interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask the questions
const askQuestion = () => {
  rl.question(`${questions[answers.length]}`, (answer) => {
    // collect the answer
    answers.push(answer);
    checkIfAllQuestionsAnswered();
  });
};

// check if all questions has been answered
const checkIfAllQuestionsAnswered = () => {
  if (answers.length < questions.length) {
    askQuestion();
  } else {
    console.log(answers);
    process.exit();
  }
};

// triggering the question function
askQuestion();
