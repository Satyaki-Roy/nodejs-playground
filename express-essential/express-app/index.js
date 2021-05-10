import express from "express";
import favicon from "serve-favicon";
import path from "path";

import data from "./data/data.json";

const app = express();
const PORT = 3000;

// middleware to serve static files
app.use(express.static("public"));
app.use("/images", express.static("images"));

// middleware to serve favicon
console.log(__dirname);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// middleware to parse JSON data
app.use(express.json());

// middleware to parse URL encoded string
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(data);
});

app.get(
  "/items/:id",
  (req, res, next) => {
    const id = Number(req.params.id);
    res.send(data[id]);
    next();
  },
  () => {
    console.log(`Data has been sent...`);
  }
);

app
  .route("/items")
  .get((req, res) => {
    res.send(`response from GET /items`);
  })
  .post((req, res) => {
    res.send(`response from POST /items`);
  })
  .put((req, res) => {
    res.send(`response from PUT /items`);
  })
  .delete((req, res) => {
    res.send(`response from DELETE /items`);
  });

app.post("/new-item", (req, res) => {
  res.send(req.body);
});

app.post("/new-item-2", (req, res) => {
  res.send(req.body);
});

app.get("/error", (req, res) => {
  throw new Error();
});

// error handling middleware (should be at the last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// opening the port and listening to the requests
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
