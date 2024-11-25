'use strict';
const button = document.querySelector('#trigger'); // Use # for id selectors
button.addEventListener('mouseover', function (evt) {
  const target = document.getElementById('target'); // Select the image element
  target.src = 'img/picB.jpg';
});
button.addEventListener('mouseout', function (evt) {
  const target = document.getElementById('target'); // Select the image element
  target.src = 'img/picA.jpg';
});
