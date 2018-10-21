const express = require("express");

const app = express();

app.get("/health", async (req, res, next) => {
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
