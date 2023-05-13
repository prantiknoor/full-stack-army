const { error } = require("./utils");

const globalErrorHandler = (error, _req, res, _next) => {
    if (error.status) {
        res.status(error.status).json({ message: error.message });
    } else {
        res.status(500).json({ message: "Something went wrong!" });
    }
};

const notFoundHandler = (_req, _res) => {
    throw error(404, "404 Not found");
};

module.exports = {
    globalErrorHandler,
    notFoundHandler,
};
