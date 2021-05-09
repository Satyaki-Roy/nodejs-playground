const {
  collectAnswers,
  collectAnswersEmitter,
} = require("./lib/collect-answers");

const questions = [
  "What is your name? ",
  "What is your father's name? ",
  "What is your mother's name? ",
];

collectAnswers(questions, (message) => {
  console.log(message);
});

collectAnswersEmitter.on("answer", (answer) => console.log(answer));
