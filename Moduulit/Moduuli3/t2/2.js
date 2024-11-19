'use strict';
const target = document.getElementById('target');

const c1 = document.createElement('li');
const c2 = document.createElement('li');
const c3 = document.createElement('li');

c1.innerHTML = "First item";
c2.innerHTML = "Second item";
c2.className = 'my-item';
c3.innerHTML = "Third item";

target.appendChild(c1);
target.appendChild(c2);
target.appendChild(c3);
