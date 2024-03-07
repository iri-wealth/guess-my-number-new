'use strict';
/*
//example of DOM manipulation
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
//console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 20;
*/

//EventListener - when something happens on btn click , etc

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //The rules of the game
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //let highScore = score;
    //document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        'Too high! Please try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
    }
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        'Too low! Please try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
