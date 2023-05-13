/**
 * @param {number} status http status code
 * @param {string} message error message
 * @returns {Error}
 */
const error = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};

module.exports = { error };
