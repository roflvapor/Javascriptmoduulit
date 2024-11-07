   'use strict';
   let diceamount = parseInt(prompt("how many dice"));
   let sumuwant = parseInt(prompt("what sum u desire"));
   let result
   let total = 0
    for(let i = 0; i < 10000; i++) {
        let total1 = 0
        for(let i = 0; i < diceamount; i++){
            let y = 1 + Math.floor(Math.random() * 6);
            total1 += y
        if(total1 === sumuwant){
            total += 1
        }
   }
    }
    result = (total / 10000) * 100
   document.querySelector('#target').innerHTML = "Probability to get sum " + sumuwant + " with " + diceamount + " dice is " + result.toFixed(2) + "%";
