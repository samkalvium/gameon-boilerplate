// Iteration 2: Generate 2 random number and display it on the screen

const randnum1 = document.getElementById("number1")
const randnum2 = document.getElementById("number2")

const num1 = Math.floor(Math.random() * 100)
const num2 = Math.floor(Math.random() * 100)

randnum1.innerText = num1
randnum2.innerText = num2

var score = Number(sessionStorage.getItem("score")) || 0;
// Iteration 3: Make the options button functional

const btn = document.getElementById("buttons");

btn.addEventListener("click", (event) => {
    // console.log(event.target);
    if (num1 > num2 && event.target.alt == "greater-than-button") {
        console.log("correct")
        seconds = 6;
        score += 1;
        sessionStorage.setItem("score", score);
        window.location.href = "game.html"
    }
    else if (num1 == num2 && event.target.id == "equal-to") {
        console.log("correct")
        seconds = 6;
        score += 1;
        sessionStorage.setItem("score", score);
        window.location.href = "game.html"
    }
    else if (num1 < num2 && event.target.id == "lesser-than") {
        console.log("correct")
        seconds = 6;
        score += 1;
        sessionStorage.setItem("score", score);
        window.location.href = "game.html"
    }
    else {
        window.location.href = "gameover.html"
        sessionStorage.setItem("score", score);
    }
})
console.log(score)


// Iteration 4: Build a timer for the game


const timerElement = document.getElementById("timer");

let seconds = 6;
let timerInterval;

function updateTimer() {
    seconds--;
    timerElement.textContent = seconds;
    if (seconds == 0) {
        window.location.href = "gameover.html"
    }
}
// Start the timer immediately
timerInterval = setInterval(updateTimer, 1000); // Update the timer every 1 second (1000 milliseconds)



//set-time out method.
// var counter = 0;
// function timer() {
// setTimeout(() => {
// console.log(counter)
// counter -= 1
// if (counter == 0) {
// window.location.href = "gameover.html"
// }
// timer()
// },1000)
// }
// 
