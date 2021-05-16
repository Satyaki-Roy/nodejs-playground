const fs = require("fs");
const http = require("http");
const path = require("path");

const file = path.join(__filename, "..", "powder-day.mp4");

http
  .createServer((req, res) => {

    // without streams
    // fs.readFile(file, (error, data) => {
    //   if (error) {
    //     console.log("hmmmm: ", error);
    //   } else {
    //     res.writeHead(200, {
    //       "Content-Type": "video/mp4",
    //     });
    //     res.end(data)
    //   }
    // });

    // with streams
    res.writeHead(200, {
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(file).pipe(res).on("error", console.error);

  })
  .listen(3000, () => console.log("buffer - http://localhost:3000"));
