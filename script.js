const rollDice = document.getElementById("roll");
const playAgain = document.getElementById("playAgain");
const diceImage = document.getElementById("dice");
const outcome = document.getElementById("outcome");
let totalScore = document.getElementById("totalScore");

let currentScore = 0;
totalScore.textContent = 0;
playAgain.style.display = "none";


rollDice.addEventListener("click", function () {
    console.log("roll button pressed");

    let randomNumber = Math.floor(Math.random() * 6 + 1);

    if (randomNumber == 1) {
        diceImage.src = "./dice1.png";
    } else if (randomNumber == 2) {
        diceImage.src = "./dice2.png";
    } else if (randomNumber == 3) {
        diceImage.src = "./dice3.png";
    } else if (randomNumber == 4) {
        diceImage.src = "./dice4.png";
    } else if (randomNumber == 5) {
        diceImage.src = "./dice5.png";
    } else if (randomNumber == 6) {
        diceImage.src = "./dice6.png";
    }

    currentScore = currentScore + randomNumber;
    totalScore.textContent = currentScore;

    console.log("my Current Score is " + currentScore);
    if (randomNumber == 1) {
        finalResult.style.display = "inline-block";
        finalResult.textContent = "You Lose!";
        outcome.style.display = "none";
        reset();
    }

    if (currentScore > 20) {
        finalResult.style.display = "inline-block";
        finalResult.textContent = "You Win! You have " + currentScore + " points!";
        outcome.style.display = "none";
        reset();
    }
});

playAgain.addEventListener("click", function () {
    console.log("button pressed");
    rollDice.style.display = "inline-block";
    playAgain.style.display = "none";
    finalResult.style.display = "none";
    outcome.style.display = "inline-block";
});

function reset() {
    console.log("reset");
    rollDice.style.display = "none";
    playAgain.style.display = "inline-block";
    currentScore = 0;
    totalScore.textContent = 0;


}