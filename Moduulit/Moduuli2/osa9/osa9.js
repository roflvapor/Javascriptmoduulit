   'use strict';
  function even(arr) {
    const evenNumbers = [];
    for (let numero of arr) {
      if (numero % 2 === 0) {
        evenNumbers.push(numero);
      }
    }
    return evenNumbers;
  }

const numerot = [5,6262,14,676,2,35,61,140,9865,242,15,72,4345]
const parilliset = even(numerot);

console.log(numerot)
console.log(parilliset);