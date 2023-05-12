const generateFakePerson = require("./algorithms/generate-fake-person");
const randomNumberGenerator = require("./algorithms/random-number-generator");
const stringAnalyzer = require("./algorithms/string-analyzer");

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

module.exports.analyzeString = (req, res) => {
  const { s } = req.query;
  if (!s) return res.status(400).json({ message: "Invalid input" });
  const report = stringAnalyzer(s);
  res.status(200).json({ s, report });
};

module.exports.getFakePerson = (req, res, next) => {
  try {
    let props = JSON.parse(req.query.props ?? "[]");
    props = props.length ? props : null;
    const fakePerson = generateFakePerson(props);
    res.status(200).json(fakePerson);
  } catch {
    const err = new Error("Invalid input");
    err.status = 400;
    next(err);
  }
};
