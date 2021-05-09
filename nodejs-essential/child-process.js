const cp = require("child_process");

// cp.exec("open https://www.linkedin.com/feed/");

// cp.exec("open -a Terminal .");

cp.exec("lst", (err, data, stderr) => {
  if (err) {
    console.log(stderr);
  }
  console.log(data);
});
