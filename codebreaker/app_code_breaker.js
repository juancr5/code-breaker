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
  res.send("Bienvenido a Code Breaker!, adjunte un numero de 4 digitos en la barra del navegador");
});

app.get("/api/code_breaker/:number", function (req, res) {
  res.json({
    result: codeBreaker.solve(req.params.number),
    counter: codeBreaker.counter(),
  });
});

//Asigna a la variable secret el numero por defecto 
app.get('/test', async function(req, res) {
  codeBreaker.secretSet('1234');
});

module.exports = app;

