   'use strict';
let participantsamount = parseInt(prompt("How many participants: "))
   let l = []
   for(let i = 0; i < participantsamount; i++) {
     let x = prompt("Name of participant "+(i+1)+": ");
    l.push({name:x,votes:0})
   }
  console.log(l)
   const voters = parseInt(prompt("how many voters:"));
for (let i = 0; i < voters; i++){
    const who = prompt("Who are you tossing your vote for");
    const trump = l.find(trump => trump.name === who);
    if (trump) {
        trump.votes += 1;
    }else {
        console.log("candidate doesnt exist");
    }
}

l.sort((a, b) => b.votes - a.votes);
l.forEach(trump => {
        console.log(trump.name+": "+ trump.votes +" votes");
    });

const winner = l[0];

console.log("Election winner is "+winner.name);