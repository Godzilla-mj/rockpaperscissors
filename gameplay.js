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
		if (cpu === "PAPER") {
			console.log("You Lose! " + cpu + " beats " + player)
			++computerScore
		} else {
			console.log("You Win! " + player + " beats " + cpu)
			++playerScore
		}
	} if (player === "PAPER") {
		if (cpu === "ROCK"){
			console.log("You Win! " + player + " beats " + cpu)
			++playerScore
		}
		else {
			console.log("You Lose! " + cpu + " beats " + player)
			++computerScore
		}
	} if (player === "SCISSORS") {
		if (cpu === "ROCK"){
			console.log("You Lose! " + cpu + " beats " + player)
			++computerScore
		} else {
			console.log("You Win! " + player + " beats " + cpu)
			++playerScore
		}
	}
}

playerScore = 0
computerScore = 0

function game(){
	while ((playerScore + computerScore) < 5){
		playRound()
		console.log("Player Score: " + playerScore + "\n Computer Score " + computerScore)
	}
	if ((playerScore + computerScore) === 5){
		if (playerScore > computerScore){
			console.log("You Won! Play Again?")
		}else{
			console.log("You Lost! Play Again?")
		}
	}
}






