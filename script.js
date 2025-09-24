'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 3;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guessedNumber = Number((document.querySelector('.guess').value));


    // No input
    if (guessedNumber == null || !guessedNumber) {
        alert('Please enter a number between 1 -20');
    }

    //when the player wins
    else if (guessedNumber === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('body').style.backgroundColor = '#6cac58ff';
        document.querySelector('.number').textContent = secretNumber;
        highScore++
        document.querySelector('.highscore').textContent = highScore;
    }
    //when guessed number is too high
    else if (guessedNumber > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number is too high'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game :('
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#c55c5cff';
        }
    }
    //when guessed number is too low
    else if (guessedNumber < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number is too Low'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game :('
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#c55c5cff';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 3;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#1b70a8';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highScore;
});
