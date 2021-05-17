const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

// first duplex
const report = new PassThrough();
let total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log(`Total Bytes: ${total}`);
});

// second duplex
class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read() {}

  _final() {
    this.push(null);
  }
}

const throttle = new Throttle(1000);

// using pipes with duplex streams
readStream.pipe(throttle).pipe(report).pipe(writeStream);
