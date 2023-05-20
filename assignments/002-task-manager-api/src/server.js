const express = require("express");

const app = express();

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK' });
});

const PORT = process.env.PORT || 2023;

app.listen(PORT, () => {
    console.log('App is listening on PORT', PORT);
});

