// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
// });

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`;
//     }
// });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//   why does't this work?!(below)

// function moveDodgerRight() {
//     let rightNumbers = dodger.style.right.replace("px", "");
//     let right = parseInt(rightNumbers, 10);

//     if (right < 360) {
//         dodger.style.right = `${right - 1}px`;
//     }
// }

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers)
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`
    }
  }

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});