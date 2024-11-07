   'use strict';
   let givenint = parseInt(prompt("Give an integer and i'll tell you if its a prime number."));
   let result

if (givenint <= 1) {
  result = "This number is either 1 or a negative number"
} else if (givenint === 2) {
  result = "This number is a prime number: 2"
} else {
  result = "This number is a prime number: " + givenint;

  for (let i = 2; i <= Math.sqrt(givenint); i++) {
    if (givenint % i === 0) {
      result = "This number isn't a prime number: " + givenint
      break;
    }
  }
}
   document.querySelector('#target').innerHTML = result;
