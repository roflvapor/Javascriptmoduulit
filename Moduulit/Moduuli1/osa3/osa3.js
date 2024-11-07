    'use strict';
   const int1str = prompt('Give 1st int.');
   const int2str = prompt('Give 2st int.');
   const int3str = prompt('Give 3st int.');
   let total = 0
  let int1 = parseInt(int1str)
   let int2 = parseInt(int2str)
   let int3 = parseInt(int3str)
    total += int1; total += int2; total += int3;
    let average = total / 3;
    let product = int1 * int2 * int3;
    document.querySelector('#target').innerHTML = 'Total is: ' + total + '!';
    document.querySelector('#target2').innerHTML = 'Average is: ' + average + '!';
    document.querySelector('#target3').innerHTML = 'Product is: ' + product + '!';