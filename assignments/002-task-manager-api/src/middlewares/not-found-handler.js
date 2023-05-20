const { HttpError } = require('../utils');

module.exports = function notFoundHandler(_req, _res) {
    throw new HttpError(404, "Not found");
}
