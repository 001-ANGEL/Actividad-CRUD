import express from "express";

import { connectDB } from "./mongo/db";
import ContentType from './routes/contentType.routes'
import keywordGroup from "./routes/keywordGroup.routes";
import userProfile from "./routes/userProfile.routes"


const app = express();
const port = 3000;

app.use(express.json());
connectDB();

app.use(ContentType)
app.use(keywordGroup)
app.use(userProfile)

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(` Server running in port  ${port} `);
});
