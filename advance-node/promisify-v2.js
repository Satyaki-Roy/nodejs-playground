const fs = require("fs");
const { promisify } = require("util");

const writeFilePromisify = promisify(fs.writeFile);

writeFilePromisify("sample.txt", "This is simple text")
  .then(() => console.log("file successfully created"))
  .catch((error) => console.log(error.message));
