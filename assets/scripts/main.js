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
    break;
}

