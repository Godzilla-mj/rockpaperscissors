//Odin Project [Web Develpment 101] [Project: Rock Paper Scissors]

function computerPlay() {
	const computerSelection = ['ROCK', 'PAPER', 'SCISSORS'];
	return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}


function playRound(){
	const ps = prompt("Rock, Paper, or Scissors?");
	player = ps.toUpperCase()
	console.log("You chose " + player)
	cpu = computerPlay();
	console.log("Computer chose " + cpu)
	if (player === cpu) {
		console.log("Draw!")
		return
	} if (player === "ROCK") {
		if (cpu === "PAPER") {playerLose()
		} else {playerWin()}
	} if (player === "PAPER") {
		if (cpu === "ROCK"){playerWin()
		} else {playerLose()}
	} if (player === "SCISSORS") {
		if (cpu === "ROCK"){playerLose()
		} else {playerWin()}
	}
}

function playerWin(){
	console.log("You Win! " + player + " beats " + cpu)
	++playerScore
}

function playerLose(){
	console.log("You Lose! " + cpu + " beats " + player)
	++computerScore
}

function gameEnd(){
	if (playerScore > computerScore){
			console.log("You Won! Play Again?")
	}else{
			console.log("You Lost! Play Again?")
	}
}


function game(){
	playerScore = 0
	computerScore = 0
	console.log("Best out of 5 rounds!")
	while ((playerScore + computerScore) < 5){
		playRound()
		console.log("Player Score: " + playerScore + "\n Computer Score " + computerScore)
		if (playerScore >= 3 || computerScore >= 3){
			gameEnd()
			break;
	}
}
}






