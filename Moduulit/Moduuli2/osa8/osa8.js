'use strict';

let l = ["Johnny", "DeeDee", "Joey", "Marky", "Jeff Bezos"];

function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

let result = concat(l);
document.querySelector('#target').innerHTML = result;
