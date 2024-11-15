   'use strict';
let participantsamount = parseInt(prompt("How many participants: "))
   const l = []
   for(let i = 0; i < participantsamount; i++) {
     let x = prompt("Name of participant: ");
     l.name = x
     l.votes = 0
   }
   l.sort((a, b) => {
   console.log(a, b);
   return b - a;
});