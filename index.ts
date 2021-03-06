import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./src/entity/User";

const app = express();

app.get("/api/health", async (req, res, next) => {
  try {
    res.json({ coucou: "coucou" });
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});

const path = require("path");
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "site-edgar-photo/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/site-edgar-photo/build/index.html"));
});
