const morgan = require("morgan");
const express = require("express");
const codeBreaker = require("./code_breaker");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/code_breaker/:number", function (req, res) {
  console.log(codeBreaker.secret)
  res.json({
    result: codeBreaker.solve(req.params.number),
    counter: codeBreaker.counter(),
  });
});

module.exports = app;