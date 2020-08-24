// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

function moveDodgerUp() {
  let bot = parseInt(dodger.style.bottom, 10);
  if (bot < 380) {
    dodger.style.bottom = `${bot + 10}px`;
  }
}

function moveDodgerDown() {
  let bot = parseInt(dodger.style.bottom, 10);
  if (bot > 0) {
    dodger.style.bottom = `${bot - 10}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
    if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
    if (e.key === "ArrowUp") {
    moveDodgerUp()
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown()
  }
})