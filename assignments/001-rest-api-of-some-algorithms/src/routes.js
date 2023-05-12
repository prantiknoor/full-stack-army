const router = require('express').Router();
const { randomNumber } = require('./controllers');

router.get('/random-number', randomNumber);
router.get('/analyze-string');
router.get('/generate-fake-person');

module.exports = router;