const router = require('express').Router();
const { randomNumber, analyzeString, getFakePerson } = require('./controllers');

router.get('/random-number', randomNumber);
router.get('/analyze-string', analyzeString);
router.get('/generate-fake-person', getFakePerson);

module.exports = router;