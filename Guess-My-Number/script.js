'use strict';

let score = 20;
let hiscore = 0;
const number = Math.trunc(Math.random() * 20) + 1;
const updateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input
  if (!guess) {
    updateMessage('No Number!');

    //Win
  } else if (guess === number) {
    updateMessage('Correct!');

    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hiscore) {
      document.querySelector('.highscore').textContent = score;
      hiscore = score;
    }

    //Wrong
  } else if (guess != number) {
    if (score > 1) {
      updateMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      updateMessage('shit cunt!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  updateMessage('Start guessing...');
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  const number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
