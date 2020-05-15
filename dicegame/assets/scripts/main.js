var playeroneScore, playertwoScore, pcOne, pcTwo;

playeroneScore = document.getElementsByClassName("pone");
playertwoScore = document.getElementsByClassName("ptwo");
pcOne = document.getElementsByClassName("pcone");
pcTwo = document.getElementsByClassName("pctwo");


// console.log(playeroneScore,playertwoScore,pcOne,pcTwo);

// Audio file
var x = document.getElementById("myAudio"); 
var y = document.getElementById("myaud"); 




// Highlight
var hlOne, hlTwo;
hlOne = document.getElementById("amone");
hlTwo = document.getElementById("amtwo");

var diceno = document.getElementsByClassName("justnumber");


// SCORE arrays
var initialScore, finalScore, currentScore, gameon = true;
initialScore = [0, 0];
finalScore = [0, 0];
currentScore = [0, 0];

// Buttons
var newGame, rollDice, hold, save=0, sound=true;
newGame = document.getElementsByClassName("new-game");
rollDice = document.getElementsByClassName("dice");
hold = document.getElementsByClassName("hold");
snd = document.getElementsByClassName("image");

newGame[0].addEventListener("click",reset);
newGame[0].addEventListener('keydown', reset);


rollDice[0].addEventListener("click",rolling);
rollDice[0].addEventListener('keydown', rolling);


hold[0].addEventListener("click",holdme);
hold[0].addEventListener('keydown', holdme);

var eve = 1;

snd[0].addEventListener("click",function(){ 
   if( eve== 1){
    sound =false; 
    eve =0; 
    console.log("sound turned off");
}else{
    sound =true; 
    eve =1;
    console.log("sound turned on");
   }
});

// score background
var scorea, scoreb;
scorea = document.querySelector(".scorea");
scoreb = document.querySelector(".scoreb");

var one = 1; 
var currentSwitch = 1;
scorea.classList.toggle("scoreactive");

function rolling(){
    if(gameon){
        var diceimg = document.getElementsByClassName("image");
        if(sound){
            x.play();
        }
    
        var diceface = Math.floor((Math.random()*6)+1);
        diceno[0].textContent = diceface;
        if(diceface === 1){
            if(sound){
                y.play();
            }
            save = 0;
            diceno[0].style.backgroundColor = "tomato";
            diceimg[0].style.border = "2px solid red";
            holdme();
            
        }else{
            save += diceface;
            diceno[0].style.backgroundColor = "white";
            diceimg[0].style.border = "none";
        }
        cswitch();
        // console.log(diceface);
    
    
        diceimg[0].src = "./assets/images/dice-"+ diceface +".png";

    }
    // console.log(diceimg);
    // console.log('this is one ' + one);
    // return diceface;
}

function cswitch(){
    if(currentSwitch){
        pcOne[0].textContent = save;
    }else{
        // hlOne.style.transform ="scale(1)";
        // hlTwo.style.transform = "scale(1.05)";
        pcTwo[0].textContent =save;
    }
}



// console.log("vahar se "+save);
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
        // console.log(finalScore);
        // console.log("ansder se "+ save);
        save = 0;
        pcOne[0].textContent = save;
        // console.log('this is if ' + one);
        one = 0;
        currentSwitch = 0;
        scorea.classList.toggle("scoreactive");
        scoreb.classList.toggle("scoreactive");
        
    }else{
        // console.log('this is else ' + one);
        
        finalScore[1] += save;
        playertwoScore[0].textContent = finalScore[1];
        // console.log(finalScore);
        // console.log("ansder se "+ save);
        save = 0;
        pcTwo[0].textContent = save;
        one = 1;
        currentSwitch = 1;
        scoreb.classList.toggle("scoreactive");
        scorea.classList.toggle("scoreactive");
        
    }

    winner();

}



var winnie = document.getElementsByClassName("win");
var winid = document.getElementsByClassName("winNum");

function winner(){
    if (finalScore[0]>=50){
        // console.log("Player one is the winner");
        winnie[0].style.display = "block";
        winid[0].textContent = "1";
        gameon = false;
        
        
    }else if(finalScore[1]>=50){
        // console.log("Player TWO is the winner");
        winnie[0].style.display = "block";
        winid[0].textContent = "2";
        gameon = false;
    }else{
        // console.log("Roll the dice");
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
    winnie[0].style.display = "none";
    // x.pause();
    sound = true;
    // console.log(gameon);
    // scorea.classList.remove("scoreactive");
    // scoreb.classList.toggle("scoreactive");

}
