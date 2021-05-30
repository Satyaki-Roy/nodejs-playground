const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("this is the master process: ", process.pid);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker process ${process.pid} has died`);
    console.log(`Only ${Object.keys(cluster.workers).length} remaining`);

    console.log(`Starting a new worker`);
    cluster.fork();
    console.log(`Only ${Object.keys(cluster.workers).length} remaining`);
  });
} else {
  console.log(`Started a worker at ${process.pid}`);

  http
    .createServer((req, res) => {
      res.end(`process: ${process.pid}`);

      if (req.url === "/kill") {
        process.exit();
      } else if (req.url === "/") {
        console.log(`Serving from ${process.pid}`);
      }
    })
    .listen(3000);
}
