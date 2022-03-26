let secret = "";
let attemps = 0;

var arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * 10);
    if(arr.indexOf(r) === -1) arr.push(r);
}

arr.forEach(element => {
  secret = secret + element;
});

console.log(secret)


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

function counter() {
  attemps++;
  return attemps;
}

module.exports.solve = solve;
module.exports.counter = counter;
