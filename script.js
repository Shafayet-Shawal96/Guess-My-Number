'use strict';
const body = document.getElementById('body');
const inputValue = document.getElementById('input');
const btn = document.getElementById('btn');
const response = document.getElementById('response');
const ans = document.getElementById('response');
const scoreOutput = document.getElementById('scoreOutput');
const highScoreOutput = document.getElementById('highScoreOutput');
const again = document.getElementById('again');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

btn.onclick = function () {
  console.log(randomNumber);
  const input = inputValue.value;
  if (input > 20 || input < 0) {
    response.innerText = 'Number has to be between 1 and 20';
    return;
  }
  if (input == randomNumber) {
    answer.innerText = randomNumber;
    body.style.backgroundColor = '#60b347';
    response.innerText = 'Correct';
    if (score > highScore) {
      highScoreOutput.innerText = score;
    }
  } else if (input < randomNumber) {
    response.innerText = 'Too low';
    scoreOutput.innerText = --score;
  } else if (input > randomNumber) {
    response.innerText = 'Too high';
    scoreOutput.innerText = --score;
  }
};

again.onclick = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  response.innerText = 'Start guessing...';
  scoreOutput.innerText = '20';
  answer.innerText = '?';
  body.style.backgroundColor = '#222';
  inputValue.value = '';
};
