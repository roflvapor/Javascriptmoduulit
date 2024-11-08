   'use strict';
   let x1 = prompt("Give name of dog 1");
   let x2 = prompt("Give name of dog 2");
   let x3 = prompt("Give name of dog 3");
   let x4 = prompt("Give name of dog 4");
   let x5 = prompt("Give name of dog 5");
   let x6 = prompt("Give name of dog 6");

   let names = [];
   names.push(x1);names.push(x2);names.push(x3);names.push(x4);names.push(x5);names.push(x6);


   let sortedNames = names.sort().reverse();
       let list = document.getElementById("target");
   for (let i = 0; i < names.length; ++i) {
       let li = document.createElement('li');
       li.innerText = names[i];
       list.appendChild(li);
   }
