const { createWriteStream } = require("fs");

const writeStream = createWriteStream("./copy.txt");

process.stdin.pipe(writeStream);
