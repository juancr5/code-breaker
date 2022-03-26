const api = require("./api.calculator");

api.listen(3030, () => {
    console.log("running")
});
const app = require("./app_code_breaker")
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
  });