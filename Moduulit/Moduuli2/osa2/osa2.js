   'use strict';
   let x = parseInt(prompt("Give amount of participants"));
  let names = []
  for (let i = 0; i < x; i++) {
    let i2 = i + 1
   let x1 = prompt("Give name of participant " + i2  );
  names.push(x1);
  }

  let list = document.getElementById("target");
  names.sort();
   for (let i = 0; i < names.length; ++i) {
       let li = document.createElement('li');
       li.innerText = names[i];
       list.appendChild(li);
   }
