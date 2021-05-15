const { promisify } = require("util");

const delay = (sec, callback) => {
  if (sec > 3) {
    callback(new Error(`Please pass >=3sec`));
  } else {
    setTimeout(() => {
      callback(null, `${sec}sec delay is over`);
    }, sec * 1000);
  }
};

delay(1, (error, message) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(message);
  }
});

// using promisify
const promisifyDelay = promisify(delay);

promisifyDelay(5)
  .then(console.log)
  .catch((err) => {
    console.log(err.message);
  });

console.log("start");
