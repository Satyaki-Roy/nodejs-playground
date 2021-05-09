const readline = require("readline");
const events = require("events");

const collectAnswersEmitter = new events();

// create an interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectAnswers = (questions, done = (f) => f) => {
  const answers = [];

  // ask the questions
  const askQuestion = () => {
    rl.question(`${questions[answers.length]}`, (answer) => {
      // collect the answer
      answers.push(answer);
      // emitting the answer event
      collectAnswersEmitter.emit("answer", answer);
      checkIfAllQuestionsAnswered();
    });
  };

  // check if all questions has been answered
  const checkIfAllQuestionsAnswered = () => {
    if (answers.length < questions.length) {
      askQuestion();
    } else {
      done(`Thanks for answering all the question`);
      process.exit();
    }
  };

  // triggering the question function
  askQuestion();
};

module.exports = {
  collectAnswers,
  collectAnswersEmitter,
};
