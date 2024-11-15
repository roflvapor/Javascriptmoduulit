   'use strict';
    let l = []
  function mybrainhurts() {
    let x
    while(true) {
      let dice = Math.floor(Math.random() * 6) + 1;
      l.push(dice);
      if(dice === 6) {
        break;
      }
    }
  }
 mybrainhurts()
       let list = document.getElementById("target");

   for (let i = 0; i < l.length; ++i) {
       let li = document.createElement('li');
       li.innerText = l[i];
       list.appendChild(li);
   }