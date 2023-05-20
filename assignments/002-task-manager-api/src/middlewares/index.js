const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const middlewares = [morgan('dev'), cors(), express.json()]

module.exports = {
    middlewares,
    globalErrorHandler: require('./global-error-handler'),
    notFoundHandler: require('./not-found-handler'),
}
