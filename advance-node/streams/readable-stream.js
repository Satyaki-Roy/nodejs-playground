const { Readable } = require("stream");

const peaks = [
  "Tallac",
  "Ralston",
  "Rubicon",
  "Twin Peaks",
  "Castle Peak",
  "Rose",
  "Freel Peak",
];

class MyReadableStreamForPeaks extends Readable {
  constructor(peaks) {
    super({
      encoding: "UTF-8",
    });
    this.peaks = peaks;
    this.index = 0;
  }

  _read() {
    if (this.index <= this.peaks.length) {
      const chunk = this.peaks[this.index];
      this.push(chunk);
      this.index++;
    } else {
      this.push(null);
    }
  }
}

const peaksReadableStream = new MyReadableStreamForPeaks(peaks);

peaksReadableStream.on("data", (chunk) => console.log(chunk));
peaksReadableStream.on("end", () => console.log("END!!!"));
