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
arrc(newarr,guards);