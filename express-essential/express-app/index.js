import express from "express";
import data from "./data/data.json";

const app = express();
const PORT = 3000;

// middleware to serve static files
app.use(express.static("public"));
app.use("/images", express.static("images"));

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

// opening the port and listening to the requests
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
