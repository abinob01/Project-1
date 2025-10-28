'use strict';

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.btn2').addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('input').value);
  if (inputGuess === hiddenNumber) {
    document.querySelector('.M1').textContent = '🙀 Correct Guess!';
    if (score > Number(document.querySelector('.M3').textContent)) {
      document.querySelector('.M3').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.dd').textContent = hiddenNumber;
    document.querySelector('.dd').style.width = '160px';
  } else if (inputGuess > hiddenNumber) {
    if (score >= 1) {
      document.querySelector('.M1').textContent = '📈 Too High!';
      score--;
      document.querySelector('.M2').textContent = score;
    } else {
      document.querySelector('.M1').textContent = '💥 You Lost the Game!';
    }
  } else if (inputGuess < hiddenNumber) {
    if (score >= 1) {
      document.querySelector('.M1').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.M2').textContent = score;
    } else {
      document.querySelector('.M1').textContent = '💥 You Lost the Game!';
    }
  }
});

document.querySelector('.btn1').addEventListener('click', function () {
  document.querySelector('.M2').textContent = 20;
  score = 20;
  document.querySelector('.M1').textContent = 'Start guessing...';
  document.querySelector('input').value = '';
  document.querySelector('body').style.backgroundColor = 'bisque';
  document.querySelector('.dd').textContent = '?';
  document.querySelector('.dd').style.width = '80px';
});
