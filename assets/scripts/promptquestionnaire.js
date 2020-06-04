var val = prompt("enter the value");
function cal(){
    if (val ==33){
        console.log("you are an adult");

    }else{console.log("grow up kid");}
}
cal();
// jsut for two day rule

function Question(question,answers,option){
    this.question =  question;
    this.answers = answers;
    this.option = option;
    
}
Question.prototype.displayques = function(){
    console.log(this.question);

    for (var i=0; i< this.answers.length; i++){
          console.log(i + ":"+ this.answers[i]);
    }
}

var q1 = new Question("Is js the best programming language", ["hell yeah", "Meh"], 0);

var q2 = new Question("Who's course is this",["Jonas","colt","max"],0);

var q3 = new Question("Is coding",["boring","hard","fun","tedious"],2);

var questions = [q1,q2,q3];

var n = Math.floor(Math.random()*questions.length);
questions[n].displayques();
