const { Transform } = require("stream");

class XTransformStream extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar))
    callback();
  }

  _flush(callback) {
    this.push("more stuff is being passed");
    callback();
  }
}

const xStream = new XTransformStream("x");

process.stdin.pipe(xStream).pipe(process.stdout);
