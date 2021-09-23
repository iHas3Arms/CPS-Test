// Variables
let clicks = 0;
let clicked = false;

function addClick() {
    if (!clicked) {
        clicks = 1;
        clicked = true;
    } else {
        clicks++;
    }
}
