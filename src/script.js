// Variables
let timer = 5;
let clicks = 0;
let clicked = false;

// Elements
let btn = document.getElementById("btn");

function addClick() {
    if (!clicked) {
        clicks = 1;
        clicked = true;
    } else {
        clicks++;
    }
}

function reset() {
    timer = 5;
    clicks = 0;
    clicked = false;
}

function addSec() {
    if (clicked) {
        timer--;
    }
}

function checkTimer() {
    if (timer == 0) {
        alert(`You performed ${clicks} clicks in 5 seconds`);
        reset();
    }
}

setInterval(addSec, 1000);
