const question = [
  "What is your name?",
  "What is your father's name?",
  "What is your mother's name?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n${question[i]}`);
  process.stdout.write(` > `);
};

ask();

const answer = [];
let i = 0;

process.stdin.on("data", (data) => {
  i++;
  if (i < question.length) {
    answer.push(data.toString().trim());
    ask(i);
    return;
  }
  answer.push(data.toString().trim());
  console.log(answer);
  process.exit();
});
