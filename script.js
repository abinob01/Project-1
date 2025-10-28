'use strict';

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const newBB = function (message) {
  document.querySelector('.M1').textContent = message;
};
document.querySelector('.btn2').addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('input').value);
  if (inputGuess === hiddenNumber) {
    newBB('🙀 Correct Guess!');
    if (score > Number(document.querySelector('.M3').textContent)) {
      document.querySelector('.M3').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.dd').textContent = hiddenNumber;
    document.querySelector('.dd').style.width = '160px';
  } else if (inputGuess !== hiddenNumber) {
    if (score > 1) {
      newBB(inputGuess > hiddenNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.M2').textContent = score;
    } else {
      newBB('💥 You Lost the Game!');
      document.querySelector('.M2').textContent = 0;
      document.querySelector('body').style.backgroundImage = 'url("c9.png")';
    }
  }
});

document.querySelector('.btn1').addEventListener('click', function () {
  document.querySelector('.M2').textContent = 20;
  score = 20;
  newBB('Start guessing...');
  document.querySelector('input').value = '';
  document.querySelector('body').style.backgroundColor = 'bisque';
  document.querySelector('.dd').textContent = '?';
  document.querySelector('.dd').style.width = '80px';
});
