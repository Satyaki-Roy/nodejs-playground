const path = require("path");

const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const beep = () => process.stdout.write("\x07");
const delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

Promise.all([
  writeFile("readme.md", "Hello World"),
  writeFile("readme.txt", "Hello World"),
  writeFile("readme.json", "messageHello World"),
])
  .then(() => readdir(path.join(__filename, "..")))
  .then(console.log);
