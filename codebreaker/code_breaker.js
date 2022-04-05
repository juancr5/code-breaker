var secret = "";
let attemps = 0;

// Asigna un numero aleatorio al secreto
function secretRandom() {
  var arr = [];
  while (arr.length < 4) {
    var r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  arr.forEach(element => {
    secret = secret + element;
  });

  console.log(secret + "\n")
}

secretRandom();


//
function secretSet(number) {
  secret = number;
}

//
function solve(a) {
  let result = "";

  if (a == "start") {
    attemps = -1;
    secretRandom()
    return "Empiece";
  }
  if (a == secret) {
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
module.exports.secretSet = secretSet;
module.exports.counter = counter;
