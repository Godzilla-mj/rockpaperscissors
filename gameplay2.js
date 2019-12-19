const gameinfo = document.querySelector('#game-info');
const info = document.createElement('p');
const playerinfo = document.createElement('p');
const gameMsg = document.createElement('h5');
const scoreboard = document.createElement('h6');

gameinfo.appendChild(gameMsg);
gameinfo.appendChild(scoreboard);
gameinfo.appendChild(playerinfo);
gameinfo.appendChild(info);

const pSelect = document.querySelectorAll('.playerselection');

let playerScore = 0;
let computerScore = 0;

scoreboard.textContent = ("Player Score: " + playerScore +
	"\nComputer Score " + computerScore)

function computerPlay() {
	const computerSelection = ['ROCK', 'PAPER', 'SCISSORS'];
	return computerSelection[Math.floor(Math.random() * computerSelection.length)];
} //computer hand selection

function playerWin(){
	info.textContent = "You Win! " + player + " beats " + cpu;
	console.log("You Win! " + player + " beats " + cpu)
	playerScore++
	score()
	console.log(playerScore + " " + computerScore)
	if (playerScore == 5 || computerScore == 5){playRound()}
} //output if player wins round

function playerLose(){
	info.textContent = "You Lose! " + cpu + " beats " + player;
	console.log("You Lose! " + cpu + " beats " + player)
	computerScore++
	score()
	if (playerScore == 5 || computerScore == 5){playRound()}
} //output if computer wins round



function playRound(){
	cpu = computerPlay()
	if (playerScore == 5 || computerScore == 5){
		if (playerScore > computerScore) {
			gameMsg.textContent = "You Win! Play Again?"
			gameEnd()
		} else {
			gameMsg.textContent = "You Lose! Play Again?"
			gameEnd()}
	}
	if (player === cpu) {
		info.textContent = "Draw!";
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

function gameEnd(){
	document.getElementByClass(".playerselection").disabled = true;
}


pSelect.forEach((button) => {
	button.addEventListener('click', (e) => {
		player = button.id
		playRound()
		});
});

function score(){
	scoreboard.textContent = ("Player Score: " + playerScore +
		 "\nComputer Score " + computerScore)
}

function reset(){
	playerScore = 0;
	computerScore = 0;
	scoreboard.textContent = ("Player Score: " + playerScore +
	"\nComputer Score " + computerScore);
	info.textContent = "Game Reset";
	gameMsg.textContent = "";
}