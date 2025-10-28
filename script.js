'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.div').textContent = number;
let score = 20;

document.querySelector('.btn2').addEventListener('click', function () {
  const input = Number(document.querySelector('input').value);
  if (input == number) {
    document.querySelector('.M1').textContent = 'Correct Number! 😲';
    document.querySelector('.M3').textContent = score;
  } else if (input > number) {
    document.querySelector('.M1').textContent = 'Too High!';
    score--;
    if (score < 0) {
      document.querySelector('.M3').textContent = 'You Lost The Game! 😞';
    }
    document.querySelector('.M2').textContent = score;
  } else if (input < number) {
    document.querySelector('.M1').textContent = 'Too Low!';
    score--;
    document.querySelector('.M3').textContent = 'You Lost The Game! 😞';
    document.querySelector('.M2').textContent = score;
  }
});

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function () {
  document.querySelector('.M1').textContent = 'Start guessing...';
  document.querySelector('.M2').textContent = '20';
  document.querySelector('input').value = '';
  score = 20;
});

// const object = {
//   name: 'Hiluf',
//   age: 2025 - 2001,
//   Email: 'lavumamaye@gmail.com',
//   location: 'Mekelle',
// };
// object.country = 'Ethiopia';
// object['job'] = 'student';
// console.log(object);

// const colors = ['red', 'blue', 'green', 'yellow'];

// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i]);
//   for (let j = 0; j < colors.length; j++) {
//     console.log('colors[j]----');
//   }
// }

 of HTML file.
