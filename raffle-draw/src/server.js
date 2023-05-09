const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use([cors(), morgan("dev"), express.json()]);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});

app.use((_req, _res, next) => {
  const err = new Error("Resource not found");
  err.status = 404;
  next(err);
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({
    message: "Something went wrong.",
  });
});

const port = process.env.PORT || 2023;

app.listen(port, () => {
  console.log("App is listening on PORT", port);
});
