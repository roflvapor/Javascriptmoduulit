    'use strict';
   const name = prompt('Give name.');
   const int1 = Math.floor(Math.random() * 4);
   let kaka = ""
   console.log(int1)
    if(int1 == 0) {
       kaka = "Gryffindor"
    }
    else if(int1 == 1) {
         kaka = "Slytherin"
    }
    else if(int1 == 2) {
         kaka = "Hufflepuff"
    }
    else if(int1 == 3) {
         kaka = "Ravenclaw"
    }
    document.querySelector('#target').innerHTML = name + ', you are ' + kaka + '.';