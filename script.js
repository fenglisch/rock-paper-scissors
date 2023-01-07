
let userScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
    console.log("Round " + i)
    let userChoice;
    let computerChoice;

    function getComputerChoice() {
        let computerNumber = Math.floor(Math.random()*100) + 1;
        console.log(computerNumber);
        if (computerNumber <= 33) {
            computerChoice = "rock";
            console.log("computerChoice = " + computerChoice);
            return computerChoice
        }
        else if (computerNumber <= 66) {
            computerChoice = "paper";
            console.log("computerChoice = " + computerChoice);
            return computerChoice
        }
        else if (computerNumber <= 99) {
            computerChoice = "scissors";
            console.log("computerChoice = " + computerChoice);
            return computerChoice
        }
        else {
            getComputerChoice()
        }
    }

    function getUserChoice() {
        let userAnswer = prompt("Round " + i + " of 5. What do you choose?","Type 'Rock', 'Paper' or 'Scissors'").toLowerCase()
        console.log("userAnswer = " + userAnswer)

        if (userAnswer === "rock" || userAnswer === "paper" || userAnswer === "scissors") {
            userChoice = userAnswer
            console.log("userChoice '" + userChoice + "' is valid");
            return userChoice;
        }
        else {
            alert("The text '" + userAnswer + "' you entered is not valid. Please try again");
            getUserChoice()
        }
        return userChoice;
    }

    computerChoice = getComputerChoice()
    userChoice = getUserChoice()


    if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper") {
        alert("You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". You win!");
        ++userScore;
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore)
    }
    else if (userChoice == "rock" && computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissors" || userChoice == "scissors" && computerChoice == "rock") {
        alert("You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". You lose.");
        ++computerScore;
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore);

    }
    else {
        alert("You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". It's a draw.")
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore);
    }
}

console.log("Final computerScore = " + computerScore)
console.log("Final userScore = " + userScore)

if (userScore > computerScore) {
    alert("Your score is " + userScore + " and the computer's score is " + computerScore + ". Congratulations, you won! Refresh the page to play again.")
}

else if (userScore < computerScore) {
    alert("Your score is " + userScore + " and the computer's score is " + computerScore + ". You lost! Refresh the page to play again.")
}
else {
    alert("You and the computer both scored " + userScore + " point(s). It's a draw. Refresh the page to play again.")
}