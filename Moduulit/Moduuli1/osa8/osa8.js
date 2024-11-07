   'use strict';
   let startyear = parseInt(prompt('Start year?'));
   let endyear = parseInt(prompt('End year?'));
   const kaka = [];
   let loops = 0
   for(let i = startyear; i <= endyear; i+=1){
    if(i % 100 === 0) {
       if(i%400 === 0) {
         kaka[loops] = [i]
           console.log("first if")
           loops += 1
       }
    }
    else if (i % 4 === 0) {
      kaka[loops] = [i]
        console.log("second if")
        loops += 1

    }
   }



    console.log(kaka);
   document.querySelector('#target').innerHTML = kaka.toString();