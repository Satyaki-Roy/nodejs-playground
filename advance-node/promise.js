const delay = (sec) =>
  new Promise((resolve, reject) => {
    if (sec > 3) {
      reject(new Error(`Please pass >=3sec`));
    } else {
      setTimeout(() => {
        resolve(`${sec}sec delay is over`);
      }, sec * 1000);
    }
  });

delay(5)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));

console.log("start");
