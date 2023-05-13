const generateFakePerson = require("./algorithms/generate-fake-person");
const randomNumberGenerator = require("./algorithms/random-number-generator");
const stringAnalyzer = require("./algorithms/string-analyzer");
const { error } = require("./utils");
const express = require("express");

/**
 * Controller of /random-number
 * @param {express.Request} req
 * @param {express.Response} res
 */
const randomNumber = (req, res) => {
    let { start, end } = req.query;

    // if both start, end are undefined, set default value
    if (!start && !end) {
        start = 0;
        end = 100;
    }

    start = parseInt(start);
    end = parseInt(end);

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        throw error(400, "Invalid input");
    }

    const number = randomNumberGenerator(start, end);

    res.status(200).json({ number, start, end });
};

/**
 * Controller of /analyze-string
 * @param {express.Request} req
 * @param {express.Response} res
 */
const analyzeString = (req, res) => {
    let text;
    if (req.method === "POST") {
        text = req.body.toString();
    } else {
        if (!req.query.s) throw error(400, "Invalid input");

        try {
            text = decodeURIComponent(req.query.s);
        } catch {
            text = req.query.s;
        }
    }

    const report = stringAnalyzer(text);

    res.status(200).json({ s: text, report });
};

/**
 * Controller of /generate-fake-person
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getFakePerson = (req, res) => {
    try {
        let props;
        if (req.query.props) {
            props = JSON.parse(`[${req.query.props ?? ""}]`);
        }

        const fakePerson = generateFakePerson(props);

        res.status(200).json(fakePerson);
    } catch (err) {
        throw err instanceof SyntaxError ? error(400, "Invalid input") : err;
    }
};

module.exports = {
    randomNumber,
    analyzeString,
    getFakePerson,
};
