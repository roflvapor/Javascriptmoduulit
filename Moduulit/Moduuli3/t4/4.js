'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.getElementById('target');

const c1 = document.createElement('option')
const c2 = document.createElement('option');
const c3 = document.createElement('option');

for(let i in students){
  if(i == 0){
    c1.value = students[i].id;
    c1.innerHTML = students[i].name;
  }
  if(i == 1){
    c2.value = students[i].id;
    c2.innerHTML = students[i].name;
  }
  if(i == 2){
    c3.value = students[i].id;
    c3.innerHTML = students[i].name;
  }
}


target.appendChild(c1);
target.appendChild(c2);
target.appendChild(c3);
