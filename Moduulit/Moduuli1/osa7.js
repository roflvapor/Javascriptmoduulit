   'use strict';
   let dicerolls = parseInt(prompt('How many rolls should I do?'));
   let total = 0
   for(let i = 0; i < dicerolls; i++){
     let y = 1 + Math.floor(Math.random() * 6);
     console.log(y)
     total += y
   }
   document.querySelector('#target').innerHTML = total;