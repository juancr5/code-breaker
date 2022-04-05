const api = require("./calculator/api.calculator");
api.listen(3001, () => {
    console.log("Running on port 3000")
});

//
const app = require("./codebreaker/app_code_breaker")
app.listen(3000, () => {
    console.log(`Running on port 3000`);
  });