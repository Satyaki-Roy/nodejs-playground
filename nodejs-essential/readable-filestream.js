const fs = require("fs");

const readStream = fs.createReadStream("./sample/lorem-ipsum.txt", "UTF-8");

readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
});

readStream.once("data", (data) => {
  console.log(data);
});

readStream.on("end", () => {
  console.log(`Finished`);
});
