import express from "express";
import sum from "./sum.js";

const app = express();
const port = 8000;

app.get("/home", async (req, res) => {
  res.json({
    message: "Welcome to the Home Page",
  });
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;
  res.json({
    answer: sum(Number(a), Number(b)), // convert to numbers (logic fix)
  });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
