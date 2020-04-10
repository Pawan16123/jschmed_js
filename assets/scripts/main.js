console.log("There are lot of things that you need to learn");
alert("have you?");

// Just part of course and trials
// 1.
function bmi(mass,height){
    console.log(mass,height);
    return mass/(height*height);
}

var markheight = 78;
var markweight =1.69;
var johnheight = 92;
var johnweight = 1.95;

var m = bmi(markweight,markheight);
var j = bmi(johnweight,johnheight);

if(m >= j){console.log("mark is heavier");}
else {console.log("john  is fat")};


// 2.
prof = ["softwaredev", "webdev", "wjat"];
profile = prof[Math.floor(Math.random() * 4)];
console.log(profile);
switch (profile) {
    case "softwaredev":   
        console.log("acha software banayega");
    break;
    case "webdev":
        console.log("app atha haikya");
    break;
    case "wjat":
        console.log("uekya abb");
    break;
    default: console.log("uje less banda");

}

// 3.
var johnscore = [89,120,1103];
var mikescore = [116,94,123];

    var johnavg = (johnscore.reduce(add))/3;
//     console.log(johnscore.reduce(add));
//     console.log(johnavg);
    var mikeavg = (mikescore.reduce(add))/3;
//     console.log(mikescore.reduce(add));
//     console.log(mikeavg);
    
    if(johnavg < mikeavg){
        console.log("cha gya mike bhia");
        console.log(mikeavg);
    }else if(johnavg == mikeavg){
        console.log("wasn't expecting a draw");
     }

    else {
        console.log("welldone john");
        console.log(johnavg);
    }


    

function add(a,b){
//     console.log(a,b)
    return a+b;
}


// 3.b
var johnscore = [89,120,103];
var mikescore = [116,94,123];
var maryscore =  [97,134,105];
    var johnavg = (johnscore.reduce(add))/3;
//     console.log(johnscore.reduce(add));
//     console.log(johnavg);
    var mikeavg = (mikescore.reduce(add))/3;
//     console.log(mikescore.reduce(add));
//     console.log(mikeavg);
    var maryavg = (maryscore.reduce(add))/3;

    if(mikeavg>johnavg && mikeavg>maryavg){
        console.log("cha gya mike bhia");
        console.log(mikeavg);
    }else if(johnavg > mikeavg && johnavg > maryavg){
        console.log("john is the winner");
     }
    else if(maryavg>johnavg && maryavg>mikeavg){
        console.log("Mary you win");
    }
    else {
        console.log("bored");
        console.log(johnavg);
    }


    

function add(a,b){
//     console.log(a,b)
    return a+b;
}