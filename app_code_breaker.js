const express = require("express");
var service = require("./services.js");
const codeBreaker = require("./code_breaker");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/code_breaker/:number", function (req, res) {
  res.json({
    result: codeBreaker.solve(req.params.number),
    counter: codeBreaker.counter(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
