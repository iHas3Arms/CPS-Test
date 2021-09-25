// Variables
let timer = 5;
let clicks = 0;
let clicked = false;
// Functions

function addClick() {
    if (!clicked) {
        document.getElementById("btn").innerHTML = "";
        clicks = 1;
        clicked = true;
        return;
    }
    clicks++;
    console.log(clicks);
}

function reset() {
    document.getElementById("btn").innerHTML = "CLICK TO START PLAYING";
    timer = 5;
    clicks = 0;
    clicked = false;
}

function removeSec() {
    if (clicked) {
        timer--;
    }
}

function checkTimer() {
    if (timer <= 0) {
        alert(`You performed ${clicks} clicks in 5 seconds\n`
        + `Your CPS was ${parseFloat(clicks/5).toFixed(1)}`);
        reset();
    }
}

function update() {
    checkTimer();
    document.getElementById("timer").innerHTML = timer;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicked) {
        document.getElementById("cps").innerHTML = parseFloat(clicks/5).toFixed(1);
    } else {
        document.getElementById("cps").innerHTML = 0;
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);
setInterval(removeSec, 1000);
