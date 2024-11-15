   'use strict';
    let l = []
  function mybrainhurts(dicesides) {
    let x
    while(true) {
      let dice = Math.floor(Math.random() * dicesides) + 1;
      l.push(dice);
      if(dice === dicesides) {
        break;
      }
    }
  }
  let x = parseInt(prompt("Monta noppa sivua?"))
 mybrainhurts(x)
       let list = document.getElementById("target");

   for (let i = 0; i < l.length; ++i) {
       let li = document.createElement('li');
       li.innerText = l[i];
       list.appendChild(li);
   }