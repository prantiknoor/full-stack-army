const randomNumberGenerator = require("./algorithms/random-number-generator");

module.exports.randomNumber = (req, res) => {
  let { start, end } = req.query;
  if (!start && !end) (start = 0), (end = 100);
  (start = parseInt(start)), (end = parseInt(end));
  if (isNaN(start) || isNaN(end)) {
    return res.status(400).json({ message: "Invalid input" });
  }
  const number = randomNumberGenerator(start, end);
  res.status(200).json({ number, start, end });
};
