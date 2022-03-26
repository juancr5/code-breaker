const codeBreaker = require('./code_breaker')
var express = require('express');
var router = express.Router();

router.get("/api/code_breaker", function (req, res) {
    res.json({
        result: codeBreaker.solve(req.query.number),
        counter: codeBreaker.counter(),
    });
});

module.exports = router;