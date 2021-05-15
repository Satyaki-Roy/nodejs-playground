function hideString(str = "", done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, "X"))
  });
}

hideString("Hello World", (str) => {
  console.log(str);
});

console.log("end");
