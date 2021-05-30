const http = require("http");
const { cpus } = require("os");
const cluster = require("cluster");

const numOfCPUs = cpus().length;

if (cluster.isMaster) {
  console.log(`This is the Master Process: ${process.pid}`);

  for (let i = 0; i < numOfCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      const message = `Worker Process: ${process.pid}`;
      console.log(message);
      res.end(message);
    })
    .listen(3000);
}
