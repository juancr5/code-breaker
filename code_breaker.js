const secret = "1234";

function solve(a) {
  let result = "";
  if (a == secret) {https://github.com/SotalvaroO/code-breaker
    return "XXXX";
  }
  for (let i = 0; i < 4; i++) {
    if (secret.charAt(i) === a.charAt(i)) {
      result = result + "X";
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i != j) {
        if (secret.charAt(i) === a.charAt(j)) {
          result = result + "-";
        }
      }
    }
  }

  return result;
}

module.exports.solve = solve;
