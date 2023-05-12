const router = require("express").Router();
const { text } = require("express");
const { randomNumber, analyzeString, getFakePerson } = require("./controllers");

router.get("/random-number", randomNumber);
router.get("/analyze-string", analyzeString);
router.post("/analyze-string", text(), analyzeString);
router.get("/generate-fake-person", getFakePerson);

module.exports = router;