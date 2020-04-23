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

var newGame, rollDice, hold, save=0;
// Buttons
newGame = document.getElementsByClassName("new-game");
rollDice = document.getElementsByClassName("dice");
hold = document.getElementsByClassName("hold");

newGame[0].addEventListener("click",reset);
rollDice[0].addEventListener("click",rolling);
hold[0].addEventListener("click",holdme);

var one = 1; 
var currentSwitch = 1;

function rolling(){
    var diceface = Math.floor((Math.random()*6)+1);
    if(diceface === 1){
        save = 0;
        holdme();
    }else{
        save += diceface;
    }
    cswitch();
    console.log(diceface);
    // console.log('this is one ' + one);
    return diceface;
}

function cswitch(){
    if(currentSwitch){
        pcOne[0].textContent = save;
    }else{
        pcTwo[0].textContent =save;
    }
}

// var one =0;
// console.log('this is outside ' + one);


console.log("vahar se "+save);
function holdme(){
    // finalScore[0] += save;
    // playeroneScore[0].textContent = finalScore[0];
    // console.log(finalScore);
    // console.log("ansder se "+ save);
    // save = 0;
    // pcOne[0].textContent = save;
    // console.log('this is if ' + one);
    if(one){
        finalScore[0] += save;
        playeroneScore[0].textContent = finalScore[0];
        console.log(finalScore);
        console.log("ansder se "+ save);
        save = 0;
        pcOne[0].textContent = save;
        console.log('this is if ' + one);
        one = 0;
        currentSwitch = 0;
        
    }else{
        console.log('this is else ' + one);
        
        finalScore[1] += save;
        playertwoScore[0].textContent = finalScore[1];
        console.log(finalScore);
        console.log("ansder se "+ save);
        save = 0;
        pcTwo[0].textContent = save;
        one = 1;
        currentSwitch = 1;
        
    }

}

function reset(){
    playeroneScore[0].textContent = initialScore[0];
    playertwoScore[0].textContent = initialScore[1];
    pcOne[0].textContent = currentScore[0];
    pcTwo[0].textContent = currentScore[1];
    finalScore = [0, 0];
    save=0;
}
