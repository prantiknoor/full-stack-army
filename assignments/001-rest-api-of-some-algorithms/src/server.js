const express = require("express");
const middlewares = require("./middlewares");
const router = require("./routes");
const {
    notFoundHandler,
    globalErrorHandler,
} = require("./global-error-handlers");

const app = express();

app.use(middlewares);
app.use("/api/v1", router);
app.use(notFoundHandler);
app.use(globalErrorHandler);

const port = process.env.PORT || 2023;

app.listen(port, () => {
    console.log("App is listening on PORT", port);
});

module.exports = app;
