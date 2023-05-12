const generateFakePerson = require('./generate-fake-person');
const randomNumberGenerator = require('./random-number-generator');
const stringAnalyzer = require('./string-analyzer');


console.log(generateFakePerson(['firstName', 'lastName', 'email', 'sdf']));
console.log(randomNumberGenerator(20, 30));
console.log(stringAnalyzer("AZabcd1231#"))