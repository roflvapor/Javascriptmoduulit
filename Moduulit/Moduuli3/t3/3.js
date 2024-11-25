'use strict';

const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

const c1 = document.createElement('li');
const c2 = document.createElement('li');
const c3 = document.createElement('li');

for(let i = 0; i < names.length; i++){
    if(i == 0){
        c1.innerHTML = names[i];
        target.appendChild(c1);
    }
    if(i == 1){
        c2.innerHTML = names[i];
        target.appendChild(c2);
    }
    if(i == 2){
        c3.innerHTML = names[i];
        target.appendChild(c3);
    }
}


