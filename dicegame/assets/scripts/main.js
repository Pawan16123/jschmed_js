var playeroneScore, playertwoScore, pcOne, pcTwo;

playeroneScore = document.getElementsByClassName("pone");
playertwoScore = document.getElementsByClassName("ptwo");
pcOne = document.getElementsByClassName("pcone");
pcTwo = document.getElementsByClassName("pctwo");


console.log(playeroneScore,playertwoScore,pcOne,pcTwo);

// Highlight
var hlOne, hlTwo;
hlOne = document.getElementById("amone");
hlTwo = document.getElementById("amtwo");

var diceno = document.getElementsByClassName("justnumber");


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
    diceno[0].textContent = diceface;
    if(diceface === 1){
        save = 0;
        diceno[0].style.backgroundColor = "tomato";
        holdme();
        
    }else{
        save += diceface;
        diceno[0].style.backgroundColor = "white";
    }
    cswitch();
    console.log(diceface);
    // console.log('this is one ' + one);
    return diceface;
}

function cswitch(){
    if(currentSwitch){
        // hlTwo.style.transform ="scale(1)";
        // hlOne.style.transform ="scale(1.05)";
        pcOne[0].textContent = save;
    }else{
        // hlOne.style.transform ="scale(1)";
        // hlTwo.style.transform = "scale(1.05)";
        pcTwo[0].textContent =save;
    }
}


// function borderswitch(){

// }
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
    diceno[0].textContent = 0;
}
