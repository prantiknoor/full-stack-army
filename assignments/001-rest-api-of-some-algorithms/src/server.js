const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

app.use([cors(), morgan("dev"), express.json()]);

app.use('/api/v1', router);

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});


app.use((_req, _res, next) => {
  const err = new Error("404 Not found");
  err.status = 404;
  next(err);
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

const port = process.env.PORT || 2023;
app.listen(port, () => {
  console.log("App is listening on PORT", port);
});
