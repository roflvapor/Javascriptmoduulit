   'use strict';
   let numerot = [];
while(true) {
  let x = parseInt(prompt("Anna luku, 0 lopettaa"))

  if(x === 0) {
    break
  }
  else {
    numerot.push(x);
  }
}

    numerot.sort((a, b) => a - b);
    numerot.reverse()
  let result = numerot.join(" ");
   console.log(result)