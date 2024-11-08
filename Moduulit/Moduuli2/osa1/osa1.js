   'use strict';
   let x1 = parseInt(prompt("Give int 1"));
   let x2 = parseInt(prompt("Give int 2"));
   let x3 = parseInt(prompt("Give int 3"));
   let x4 = parseInt(prompt("Give int 4"));
   let x5 = parseInt(prompt("Give int 5"));
   let numbers = [];
   let numbers2 = [];
   let result = " ";
   numbers.push(x1);numbers.push(x2);numbers.push(x3);numbers.push(x4);numbers.push(x5)
   let n1 = numbers.length;
   console.log(n1)
   for(let i = 0; i < numbers.length; i++) {
     let n2 = n1 - i - 1;
     console.log("n2 is " + n2)
     numbers2[i] = numbers[n2]

   }
   result = numbers2.join(" ");
   document.querySelector('#target').innerHTML = result
