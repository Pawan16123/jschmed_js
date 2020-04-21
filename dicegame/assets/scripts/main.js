var playeroneScore, playertwoScore, pcOne, pcTwo;

playeroneScore = document.getElementsByClassName("pone");
playertwoScore = document.getElementsByClassName("ptwo");
pcOne = document.getElementsByClassName("pcone");
pcTwo = document.getElementsByClassName("pctwo");


console.log(playeroneScore,playertwoScore,pcOne,pcTwo);

var initialScore, finalScore, currentScore;
// SCORE arrays
initialScore = [0, 0];
finalScore = [0, 0];
currentScore = [0, 0];

var newGame, rollDice, hold;
// Buttons
newGame = document.getElementsByClassName("new-game");
rollDice = document.getElementsByClassName("dice");
hold = document.getElementsByClassName("hold");

newGame[0].addEventListener("click",reset);
function reset(){
    playeroneScore[0].textContent = initialScore[0];
    playertwoScore[0].textContent = initialScore[1];
    pcOne[0].textContent = currentScore[0];
    pcTwo[0].textContent = currentScore[1];
}
