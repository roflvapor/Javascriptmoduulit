   'use strict';
   let numerot = [];
while(true) {
  let x = parseInt(prompt("Anna luku, sama luku lopettaa"))
  let index = numerot.indexOf(x);
  if(index != -1) {
    alert("Annettu luku on jo annettu, printtaan annetut luvut konsoliin");
    break
  }
  else {
    numerot.push(x);
  }
}

    numerot.sort((a, b) => a - b);
  let result = numerot.join(" ");
   console.log(result)