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
	} if (player === "ROCK") {
		if (cpu === "PAPER") {
			console.log("You Lose! " + cpu + " beats " + player)
		} else {
			console.log("You Win! " + player + " beats " + cpu)
		}
	} if (player === "PAPER") {
		if (cpu === "ROCK"){
			console.log("You Win! " + player + " beats " + cpu)
		}
		else {
			console.log("You Lose! " + cpu + " beats " + player)
		}
	} if (player === "SCISSORS") {
		if (cpu === "ROCK"){
			console.log("You Lose! " + cpu + " beats " + player)
		} else {
			console.log("You Win! " + player + " beats " + cpu)
		}
	}
}








