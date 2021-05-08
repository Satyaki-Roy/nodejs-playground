const writeFunction = (str) => process.stdout.write(`${str}`);

writeFunction(`progress 0%`)

const timeoutTime = 5000;
const timeoutFunction = () => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  writeFunction(`Done\n`)
};

let timer = 500;
const timeInterval = 500;
const intervalFunction = () => {
  if (timer < timeoutTime) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    writeFunction(`progress ${Math.floor(timer)/timeoutTime * 100}%`);
    timer += timeInterval;
  } else {
    clearInterval(interval);
  }
};

const interval = setInterval(intervalFunction, timeInterval);

setTimeout(timeoutFunction, timeoutTime);
