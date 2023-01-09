
let userScore = 0;
let computerScore = 0;
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




let btns = document.querySelectorAll(".btn");
let feedback = document.querySelector(".feedback")
let finalResult = document.querySelector(".final-result")
let usBoard = document.querySelector(".user-score-board")
let csBoard = document.querySelector(".computer-score-board")
 
btns.forEach((button) => {
     button.addEventListener("click", function(e) {
        if (userScore < 5 && computerScore < 5) {
            computerChoice = getComputerChoice();
            if (e.target.id == "btn-rock") userChoice = "rock";
            else if (e.target.id == "btn-paper") userChoice = "paper";
            else if (e.target.id == "btn-scissors") userChoice = "scissors";
            console.log(userChoice)
            compareChoices(computerChoice, userChoice)
            usBoard.textContent = "Your score: " + userScore
            csBoard.textContent = "Computer's score: " + computerScore

            if (userScore >= 5 || computerScore >= 5) {
                console.log("Final computerScore = " + computerScore)
                console.log("Final userScore = " + userScore)
                if (userScore > computerScore) {
                    finalResult.textContent = "Your score is " + userScore + " and the computer's score is " + computerScore + ". Congratulations, you won! Refresh the page to play again."
                }
                else if (userScore < computerScore) {
                    finalResult.textContent = "Your score is " + userScore + " and the computer's score is " + computerScore + ". You lost! Refresh the page to play again."
                }
        }
        }
})});


/*
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
    };
*/
    



function compareChoices(computerChoice, userChoice) {

    if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper") {
        ++userScore;
        feedback.textContent = "You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". You win!"
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore)
    }
    else if (userChoice == "rock" && computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissors" || userChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        feedback.textContent = "You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". You lose.";
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore);

    }
    else {
        feedback.textContent = "You have chosen " + userChoice + " and the computer has chosen " + computerChoice + ". It's a draw";
        console.log("userScore = " + userScore);
        console.log("computerScore = " + computerScore);
    }
}
