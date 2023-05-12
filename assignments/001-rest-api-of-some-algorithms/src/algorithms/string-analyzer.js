/**
 * a function that can accept a string as an argument and
 * return an object containing the number of letters, number
 * of symbols and number of numeric characters.
 * 
 * @param {string} str
 * @returns {object}
 */
module.exports = function stringAnalyzer(str) {
  const alphabets = new Set([..."abcdefghijklmnopqrstuvwxyz"]);
  const digits = new Set([..."0123456789"]);
  return [...str].reduce(
    (acc, char) => {
      if (alphabets.has(char.toLowerCase())) acc.alphabets++;
      else if (digits.has(char)) acc.numbers++;
      else acc.symbols++;
      return acc;
    },
    { alphabets: 0, numbers: 0, symbols: 0 }
  );
};