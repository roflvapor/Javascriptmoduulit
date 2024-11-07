   'use strict';
   const year = prompt('Enter a year');
   /*
   A year is a leap year if it is divisible by four.
    However, years divisible by 100 are leap years only if they are also divisible by 400.
     Print the result on the HTML document.
    */
   const year1 = parseInt(year)
   let kaka;
    if(year % 100 === 0) {
       if(year%400 === 0) {
         kaka = " is a leap year"
       }
       else {
         kaka = " is not a leap year"
       }
    }
    else if (year % 4 === 0) {
      kaka = " is a leap year"
    }
    else {
      kaka = " is not a leap year"
    }
    document.querySelector('#target').innerHTML = year1 + kaka;