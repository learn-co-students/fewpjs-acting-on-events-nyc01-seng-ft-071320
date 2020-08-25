// Your code here
let dodger = document.getElementById("dodger");

function lateral() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    return left;
}

function longitudinal() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    return bottom;
}

function moveDodgerLeft() {
    let left = lateral();

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let left = lateral();

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerUp() {
    let bottom = longitudinal();

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerDown() {
    let bottom = longitudinal();

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
});