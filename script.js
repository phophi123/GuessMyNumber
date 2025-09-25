'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 3;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

function displayColour(colour) {
    document.querySelector('body').style.backgroundColor = colour;
}

function displaySecretNumber(number) {
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessedNumber = Number((document.querySelector('.guess').value));

    // No input
    if (guessedNumber == null || !guessedNumber) {
        alert('Please enter a number between 1 -20');
    }

    //when the player wins
    else if (guessedNumber === secretNumber) {
        displayMessage('🏆Correct Number!')
        displayColour('#6cac58ff')
        displaySecretNumber(secretNumber)
        highScore++
        document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
    else if (guessedNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessedNumber > secretNumber ? 'Number is too high' : 'Number is too Low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lost the game :(')
            document.querySelector('.score').textContent = 0;
            displaySecretNumber(secretNumber)
            displayColour('#da5252ff');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 3;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...')
    displayColour('#0e0303');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highScore;
});