const express = require("express");
const { middlewares, globalErrorHandler, notFoundHandler } = require("./middlewares");

const app = express();

app.use(middlewares);

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.use(notFoundHandler);
app.use(globalErrorHandler);

const PORT = process.env.PORT || 2023;

app.listen(PORT, () => {
    console.log('App is listening on PORT', PORT);
});

