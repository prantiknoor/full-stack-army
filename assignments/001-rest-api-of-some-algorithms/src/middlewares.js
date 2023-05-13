const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const middlewares = [
    cors(),
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: true }),
];

module.exports = middlewares;
