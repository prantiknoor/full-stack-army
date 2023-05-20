module.exports = function globalErrorHandler(error, _req, res, _next) {
    if(error.status) {
        res.status(error.status).json({ message: error.message });
    } else {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}
