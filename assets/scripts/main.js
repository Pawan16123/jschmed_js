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

// 4.
var johnbills = [124,48,268];
var tiparray =[];
var finalamtarray =[];
var tip=0;
johnbills.forEach(billfunc);

function billfunc(price,index){
     tipcalculator(price);
     console.log("the price is:"+price+"and the index is:"+index);
}

function tipcalculator(amount){
    if(amount<50){
        console.log("twenty percent bill");
        tip = amount*0.2;
        tiparray.push(Math.floor(tip));
        console.log(tip);

    }else if(amount>50 && amount<200){

        console.log("fifteen percent of thee bill");
        tip = amount*0.15;
        tiparray.push(Math.floor(tip));
        console.log(tip);

    }else if (amount>200){

        console.log("it's    ten percent ");
        tip = amount*0.10;
        tiparray.push(Math.floor(tip));
        console.log(tip);
    }
}

console.log(tiparray);
johnbills.forEach(totalamt);
function totalamt(price,index){

     finalamtarray.push(tiparray[index]+price);

}
console.log(finalamtarray);


// 5.
var mark ={

    name: "Mark mathew",
    mass: "45",    
    height: "1.45",
    bmical: function(){
                            this.bmi=Math.floor(this.mass/(this.height*this.height));
            }

}
var john ={

    name: "john cena",
    mass: "58",    
    height: "1.76",
    bmical: function(){
                this.bmi=Math.floor(this.mass/(this.height*this.height))
            }

}
mark.bmical();
john.bmical();
if (john.bmi>mark.bmi){
    console.log(john.name + " bmi is:"+john.bmi);
}else if (john.bmi === mark.bmi){
//     console.log(john.bmi,mark.bmi);
    console.log("YOur bmis are equal");
}else{console.log(mark.name +" bmi is:"+mark.bmi);}

console.log(mark,john);



// Section 4: 

// object and function prototype
// function constructor
var Fc = function(name,age,height){
    this.name=name;
    this.age = age;
    this.height = height;
    // this.calage = function(year){console.log("man you are old :"+year);}
}
Fc.prototype.method = function(year){console.log("man you are old :"+year);}


var joe = new Fc("rogan",50, "5'7")
// joe.calage(55);
joe.method(33);


joe.hasOwnProperty("age");
joe instanceof fc;

// ALl the property that you use in arrays and objects i.e push pull pop etc etc are all present in it's  prototype property 

// Object .create
var personProto = {
    calculateAge: function(){
        console.log(2020-this.yob);
    }
}; 
 
var john = Object.create(personProto);
john.name = "john";
john.yob = 1997;
john.job = "teacher";

var jane =  Object.create(personProto,
    {
        name:{value:"jane"},
        yob: {value:1985},
        job: {value:"designer"}
    });
// object.create benifits is that it allows to implement to create complex inheritance structure compared to function constructor, helps to directly specify which objects should be a prototpe


// function constructor and Object.create is most common used to create objects 

// Diff between primitive and obj
var obj1 = {name: "apaj", age:33};
var obj3= obj1;
obj1.age = 333;
console.log(obj1.age,obj3.age);

var a = 23;
var b=45;
a = 33;

console.log(a,b);



// first class functions
// Passing function as argumment
var years = [1922, 1996,1962,2018,1994];

function arrc(arr,fn){
    var arrRes = [];
      for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calage(val){
    return 2020 - val;
}
var agearr = arrc(years,calage);
function adult(val){
    return val >=22;
}
var newarr = arrc(agearr,adult);
function guards(val){
    if(val===true){
        console.log("you can enter "+val);
    }
    else {  
        console.log("sorry kid you can't "+val);
    }
}
function arrc(arr,ar,fn){
    var arrRes = [];
      for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i],ar[i]));
    }
    return arrRes;
}
​
var heights = [172,185,165,142];
var weights = [45,70,80,95];
​
function bmi(height,weight){
    var bmi = (weight/(height*height))*10000;       
    return Math.floor(bmi);
}
var bbmi= arrc(heights,weights,bmi);


// Firstclass functions : Returning functions.
function askme(job){
    if(job == "plumber"){
        return function(name){
            console.log("How long have you been working "+ name);
        }
    
    }else if(job == "teacher"){    

            return function(name){
               console.log("which class do you teach "+name);
            }
    }else{
            return function(name){
                    console.log("what are you hiding "+name);
                    }

            }
    

}
var answer = askme("plumber");
answer('amber');


// IIFE : Immediately Innvoked Function Expression.
(function(e){
    var val = Math.random()*10;
    consol.log("the parameter is:"+e);
    console.log(val>=5);
})(5)


// closure
function canijoin(para){
    var a = "some string";
return function(time){
        var man = 3240 - time;
        console.log((para - man)+a);
    }

}

var saveme = canijoin(5990);

saveme(9009);
// simole task
function job(profile){
    var a = "are you a ";

    return function(name){

      console.log(name+ " " +a + profile + "?");
      }

}

var teacher = job("teacher");
teacher("Alice");
var plumber = job("plumber");
plumber("johnny")
var nae = job("unknown person");
nae("anonymous");


// BInd , apply, call function methods that are available
var obj = {
    name:"jessy",
    age:"45",
    yob:"1983",
    myfun: function(mkbh){
               console.log(this.name+" i am "+this.age +" years old born in "+this.yob+" and then this parameter: "+mkbh);
           }   
       
   }
   var newobj={
       name:"boren",
       age:39,
       yob:2000,
   }
   obj.myfun("ada");
   obj.myfun.call(newobj,"it's defined");
   var newcall = obj.myfun.bind(newobj,"what's new");
   newcall();



// section 5: COding challenge
// edit later

function Ques(question,answers,correct){

    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Ques('is js the coolest programming lang ', ['Yes','No'], 0);


// refresher of section 5 and then continue with 6

// Everything is an object

// Similar to class JS has Constructors that are used to create multiple object you jst have to define the purpose and then create any number of required instances

// Inheritance take properties of other obj. JS is a prototype based language which make inheritance is made possbile using prototype.NULL is the only one which doesn't have prototype property


// 61. creating object using function constructor

var People = function(surname, age, height) {
    this.surname = surname;
    this.age = age;
    this.height=height;
} 

var bruce = new People("wayne", "thirtynine",5.9);

People.prototype.calculateage = function(){console.log("no cal needed:"+ this.age);}
People.prototype.key = "value";

// 62THe protype chain in console.
// Just understanding the link between all prototype , how it's stored and how it's used.
// pretty long jrny
// Section 
// timrpsdddrd ny   
// wip work load
// webpack\
// ;ala la ala lalala
// yes I am back will continue iwth the extension
// successfully added new feature to searchnfil

// sept 1 this in the only active documentation

// workflow

// Added the tags scnning method