/**
 * a function that can take two arguments called start and end.
 * Both arguments will be a valid integer number.
 * The function will return a random value in the given range.
 * 
 * @param {number} start
 * @param {number} end (inclusive)
 * @returns {number}
 */
module.exports = function randomNumberGenerator(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};