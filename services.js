const codeBreaker = require('./code_breaker')
var express = require('express');
var router = express.Router();


router.get('/api/code_breaker/:number', function(req, res){
    res.send(codeBreaker.solve(req.params.number));

});
