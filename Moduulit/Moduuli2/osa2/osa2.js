   'use strict';
   let x = parseInt(prompt("Give amount of doggos"));
  let names = []
  for (let i = 0; i < x; i++) {
    let i2 = i + 1
   let x1 = prompt("Give name of dog " + i2  );
  names.push(x1);
  }

   let sortedNames = names.sort();
       let list = document.getElementById("target");
   for (let i = 0; i < names.length; ++i) {
       let li = document.createElement('li');
       li.innerText = names[i];
       list.appendChild(li);
   }
