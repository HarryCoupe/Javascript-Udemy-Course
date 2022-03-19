'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initial State
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//variables
let scores, currentScore, currentPlayer, playing;
//Functions
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//Dice Roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for 1, if true switch player, if false add score
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to current players score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    //2.is score >= 100
    if (scores[currentPlayer >= 100]) {
      //End game
      player = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
    } else {
      //if no switch
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
