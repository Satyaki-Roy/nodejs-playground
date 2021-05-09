const cp = require("child_process");

const questionApp = cp.spawn("node", ["readline-tricks.js"]);

questionApp.stdout.on("data", (data) => {
  console.log(`from question app: ${data}`);
});

questionApp.stdin.write("Satyaki\n");
questionApp.stdin.write("Goutam\n");
questionApp.stdin.write("Keya\n");

questionApp.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`)
})
