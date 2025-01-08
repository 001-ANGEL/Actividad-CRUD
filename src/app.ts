import express from "express";

import { connectDB } from "./mongo/db";

const app = express();
const port = 3000;

app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(` Server running in port  ${port} `);
});
