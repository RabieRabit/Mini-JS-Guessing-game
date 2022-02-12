"use strict";

const start = document.getElementById('start');

start.addEventListener("click", startfunc);

let myNum;

function startfunc(){
    let max = window.prompt("Choose the max value:");
    myNum = Math.floor((Math.random() * max) + 1);
    let guess = window.prompt("Geuss my number!");
    checkGuess(guess);
}

function checkGuess(num) {
    let toHigh;
    while (myNum != num){
        if (num > myNum) {
            toHigh = "to high"
        } else {
            toHigh = "to Low"
        }
        num = window.prompt("Guess Again! " + toHigh);
    }
    alert("Well Done you did it! The num was " + myNum)
}