const fs = require("fs");

const writeStream = fs.createWriteStream("./sample/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./sample/lorem-ipsum.txt", "UTF-8");

readStream.pipe(writeStream);
