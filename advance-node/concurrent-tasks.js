const delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

const tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5),
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.todo = [...promises];
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }

  graphTasks() {
    const { todo, running, complete } = this;
    console.log(`
   ********************************
   todo: ${todo.length}
   running: ${running.length}
   complete: ${complete.length}
   ********************************
    `);
  }

  run() {
    while (this.runAnother) {
      const promise = this.todo.shift();
      this.running.push(promise);
      this.graphTasks();
      // below code will run after the while loop has ended
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.graphTasks();
        this.run();
      });
    }
  }
}

const delayQueue = new PromiseQueue(tasks, 5);
delayQueue.run();
