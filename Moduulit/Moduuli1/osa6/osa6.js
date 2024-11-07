   'use strict';
   const ask = confirm('Should I calculate the square root?');
  if(ask===true) {
   const integ = prompt('Give int');
   const integ1 = parseInt(integ);
    if(integ1<0){
      document.querySelector('#target').innerHTML = "The square root of a negative number is not defined";
    }
    else if(integ1>0) {
      const answ = Math.sqrt(integ1)
      document.querySelector('#target').innerHTML = "Square root of "+integ1+" is "+answ;
    }
  }
  if(ask===false) {
      document.querySelector('#target').innerHTML = "The square root is not calculated.";
  }