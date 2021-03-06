function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    if (playerSelection == "Reset") {
        playerWins = 0;
        computerWins = 0;
        draw = 0;
        return "";
    } else if (playerSelection == "container") {
        return document.querySelector('#results').innerHTML;
    } else {
        let computerSelection = computerPlay();
        if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Scissors")) {
            playerWins++;
            return "You Win! Rock beats Scissors"
        } else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Paper")) {
            computerWins++;
            return "You Lose! Paper beats Rock"
        } else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Rock")) {
            draw++;
            return "You Draw! Rock does Nothing to Rock"
        } else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Paper")) {
            draw++;
            return "You Draw! Paper does Nothing to Paper"
        } else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Scissors")) {
            computerWins++;
            return "You Lose! Scissors beat Paper"
        } else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Rock")) {
            playerWins++;
            return "You Win! Paper beats Rock"
        } else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Paper")) {
            playerWins++;
            return "You Win! Scissors beat Paper"
        } else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Scissors")) {
            draw++;
            return "You Draw! Scissors do Nothing to Scissors"
        } else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Rock")) {
            computerWins++;
            return "You Lose! Rock beats Scissors"
        } else {
            return "Error"
        }
    }
}
/*
function game(rounds) {
    let i = 0;
    let result = ""
    do {
        i++;
        let playerSelection = prompt()
        let computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection);
        if (result.charAt(4) == "W") {
            playerWins++;
            console.log(result);
        } else if (result.charAt(4) == "L") {
            computerWins++;
            console.log(result);
        } else {
            console.log(result);
        }
    } while (i < rounds);
}
*/
function updateResults(resetCheck) {
    if (resetCheck == "Reset") {
        resetGame();
        return "";
    } else if (playerWins == 5) {
        addReset(resetCheck);
        return "<br>YOU WIN!<br>You have Won " + String(playerWins) + " times!<br>The Computer Won " + String(computerWins) + " times. <br> You drew " + String(draw) + " times.";
    } else if (computerWins == 5) {
        addReset(resetCheck);
        return "<br>YOU LOSE!<br>The Computer Won " + String(computerWins) + " times.<br>You Won " + String(playerWins) + " times!<br>You drew " + String(draw) + " times.";
    } else {
        return "<br>You have Won " + String(playerWins) + " times!<br>The Computer has Won " + String(computerWins) + " times.<br>You have drawn " + String(draw) + " times.";
    }
}

function addReset(errorCheck) {
    if (errorCheck == "container") {
        return;
    } else {
        var elem1 = document.querySelector('#Rock');
    elem1.parentNode.removeChild(elem1);
    var elem2 = document.querySelector('#Paper');
    elem2.parentNode.removeChild(elem2);
    var elem3 = document.querySelector('#Scissors');
    elem3.parentNode.removeChild(elem3);
    var elem4 = document.querySelector('#results')
    let resetBtn = document.createElement("button");
    resetBtn.innerHTML = '<img src="Reset.png" id="Reset"/>';
    resetBtn.type = "button";
    resetBtn.id = "Reset";
    document.getElementById('container').appendChild(resetBtn);
    }
}

function resetGame() {
    var elem0 = document.querySelector('#Reset');
    let rockBtn = document.createElement("button");
    rockBtn.innerHTML = '<img src="Rock.png" id="Rock"/>';
    rockBtn.type = "button";
    rockBtn.id = "Rock";
    elem0.parentNode.insertBefore(rockBtn, elem0);
    let paperBtn = document.createElement("button");
    paperBtn.innerHTML = '<img src="Paper.png" id="Paper"/>';
    paperBtn.type = "button";
    paperBtn.id = "Paper";
    elem0.parentNode.insertBefore(paperBtn, elem0);
    let scissorsBtn = document.createElement("button");
    scissorsBtn.innerHTML = '<img src="Scissors.png" id="Scissors"/>';
    scissorsBtn.type = "button";
    scissorsBtn.id = "Scissors";
    elem0.parentNode.insertBefore(scissorsBtn, elem0);
    elem0.parentNode.removeChild(elem0);
}

let playerWins = 0;
let computerWins = 0;
let draw = 0;

const buttons = document.querySelector('#container');
buttons.addEventListener('click', (button) => {
    console.log(button.target.id);
    document.querySelector('#results').innerHTML = playRound(button.target.id);
    document.querySelector('#overall-results').innerHTML = updateResults(button.target.id);
});
/*
game(5);
console.log("You Won " + String(playerWins) + " times! \ The Computer Won " + String(computerWins) + " times.");
if (playerWins > computerWins) {
    console.log("You beat the Computer, Congrats!");
} else if (computerWins > playerWins) {
    console.log("The Computer beat you, too bad...");
} else {
    console.log("It was a Draw!");
}
*/