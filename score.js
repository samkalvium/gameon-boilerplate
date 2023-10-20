// Iteration 5: Store the player score and display it on the game over screen
const again = document.querySelector("#play-again-button")
const totsr = sessionStorage.getItem('score');

again.addEventListener("click",() =>{ 
    sessionStorage.removeItem("score")
    window.location.href = "game.html"
})

//score part
const scre = document.getElementById("score-board")
scre.innerText = totsr;
