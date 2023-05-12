const router = require('express').Router();
const { randomNumber, analyzeString } = require('./controllers');

router.get('/random-number', randomNumber);
router.get('/analyze-string', analyzeString);
router.get('/generate-fake-person');

module.exports = router;