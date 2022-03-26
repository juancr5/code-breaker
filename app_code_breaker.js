const morgan = require("morgan");
const express = require("express");
// var service = require("./services.js");
const codeBreaker = require("./code_breaker");
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/code_breaker/:number", function (req, res) {
  res.json({
    result: codeBreaker.solve(req.params.number),
    counter: codeBreaker.counter(),
  });
});
// app.use(require("./services.js"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports = app;