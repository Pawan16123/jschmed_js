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





//    data 
[{"country":"US","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml"},{"country":"US ","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_US/terms_conditions/index.shtml"},{"country":"Canada","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml"},{"country":"Canada","language":"French","privacyLabel":"Notification de Confidentialite","privacyLink":"http://www.pg.com/privacy/frenchcanadian/privacy_statement.shtml","tnc":"Conditions d’utilisation","tncLink":"http://www.pg.com/fr_CA/terms_conditions/index.shtml"},{"country":"United Arab Emirates","language":"Arabic","privacyLabel":"إشعار الخصوصية","privacyLink":"http://www.pg.com/privacy/arabic/privacy_statement.shtml","tnc":"الشروط والأحكام","tncLink":"http://www.pg.com/ar_EG/terms_conditions/index.shtml#use"},{"country":"United Arab Emirates","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Argentina","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Austria","language":"German","privacyLabel":"Datenschutz","privacyLink":"http://www.pg.com/privacy/german/privacy_statement.shtml","tnc":"Geschäftsbedingungen","tncLink":"http://www.pg.com/de_DE/terms_conditions/index.shtml"},{"country":"Australia","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml"},{"country":"Belgium","language":"French","privacyLabel":"Notification de confidentialité","privacyLink":"http://www.pg.com/privacy/french/privacy_statement.shtml","tnc":"Conditions d’utilisation","tncLink":"http://www.pg.com/fr_BE/terms_conditions/index.shtml"},{"country":"Belgium","language":"Dutch","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/dutch/privacy_statement.shtml","tnc":"Algemene voorwaarden","tncLink":"http://www.pg.com/nl_BE/terms-conditions.shtml"},{"country":"Bulgaria","language":"Bulgarian","privacyLabel":"Поверителност","privacyLink":"http://www.pg.com/privacy/bulgarian/privacy_statement.shtml","tnc":"Срокове и условия","tncLink":"http://www.pg.com/bg_BG/terms_conditions/index.shtml"},{"country":"Brazil","language":"Potugues","privacyLabel":"PRIVACIDADE","privacyLink":"http://www.pg.com/privacy/brazilianportuguese/privacy_statement.shtml","tnc":"TERMOS E CONDIÇÕES","tncLink":"http://www.pg.com/pt_BR/termos_condicoes/index.shtml"},{"country":"Switzerland","language":"German","privacyLabel":"Datenschutz","privacyLink":"http://www.pg.com/privacy/german/privacy_statement.shtml","tnc":"Geschäftsbedingungen","tncLink":"http://www.pg.com/de_DE/terms_conditions/index.shtml"},{"country":"Chile","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"China","language":"Chinese (Simplified)","privacyLabel":"隐私权声明","privacyLink":"http://www.pg.com/privacy/chineseS/privacy_statement.shtml","tnc":"条款与条件","tncLink":"http://www.pg.com/zh_CN/terms_conditions/index.shtml"},{"country":"China","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/zh_CN/terms_conditions/index.shtml"},{"country":"Costa Rica","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Czech Republic","language":"Czech","privacyLabel":"Soukromí","privacyLink":"http://www.pg.com/privacy/czech/privacy_statement.shtml","tnc":"Smluvní podmínky","tncLink":"http://www.pg.com/cs_CZ/terms_conditions/index.shtml"},{"country":"Germany","language":"German","privacyLabel":"Datenschutz","privacyLink":"http://www.pg.com/privacy/german/privacy_statement.shtml","tnc":"Geschäftsbedingungen","tncLink":"http://www.pg.com/de_DE/terms_conditions/index.shtml"},{"country":"Denmark","language":"Danish","privacyLabel":"Privatlivsbemærkning","privacyLink":"http://www.pg.com/privacy/danish/privacy_statement.shtml","tnc":"betingelser og vilkår","tncLink":"http://www.pg.com/da_DK/terms_conditions/index.shtml"},{"country":"Dominican Rep.","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Egypt","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pampers-egypt.com/en-eg/terms-and-conditions"},{"country":"Egypt","language":"Arabic","privacyLabel":"إشعار الخصوصية","privacyLink":"http://www.pg.com/privacy/arabic/privacy_statement.shtml","tnc":"الشروط والأحكام","tncLink":"http://www.pg.com/ar_EG/terms_conditions/index.shtml#use"},{"country":"Spain","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/spanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Finland","language":"Finnish","privacyLabel":"Yksityisyys","privacyLink":"http://www.pg.com/privacy/finnish/privacy_statement.shtml","tnc":"Käyttöehdot","tncLink":"http://www.pg.com/fi_FI/terms_conditions/index.shtml"},{"country":"France","language":"French","privacyLabel":"Notification de confidentialité","privacyLink":"http://www.pg.com/privacy/french/privacy_statement.shtml","tnc":"Conditions d’utilisations","tncLink":"http://www.pg.com/fr_FR/terms_conditions/index.shtml"},{"country":"UK","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_UK/terms_conditions/index.shtml#use"},{"country":"Global","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Greece","language":"Greek","privacyLabel":"Δήλωση Απορρήτου","privacyLink":"http://www.pg.com/privacy/greek/privacy_statement.shtml","tnc":"Όροι και Προϋποθέσεις","tncLink":"http://www.pg.com/el_GR/terms_conditions/index.shtml"},{"country":"Guatemala","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Hong Kong","language":"Chinese (Traditional)","privacyLabel":"隱私權","privacyLink":"http://www.pg.com/privacy/chineseT/privacy_statement.shtml","tnc":"條款和協議","tncLink":"http://www.pg.com/zh_HK/terms_conditions/index.shtml"},{"country":"Hong Kong","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/zh_HK/terms_conditions/index.shtml"},{"country":"Honduras","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Croatia","language":"Croatian","privacyLabel":"Privatnost","privacyLink":"http://www.pg.com/privacy/croatian/privacy_statement.shtml","tnc":"Uvjeti","tncLink":"http://www.pg.com/hr_HR/terms_conditions/index.shtml#use"},{"country":"Hungary","language":"Hungarian","privacyLabel":"Adatvédelmi közlemény","privacyLink":"http://www.pg.com/privacy/hungarian/privacy_statement.shtml","tnc":"Felhasználási feltételek","tncLink":"http://www.pg.com/hu_HU/terms_conditions/index.shtml#use"},{"country":"Indonesia","language":"Indonesian","privacyLabel":"Privasi","privacyLink":"http://www.pg.com/privacy/indonesian/privacy_statement.shtml","tnc":"Syarat dan ketentuan","tncLink":"http://www.pg.com/id_ID/terms_conditions/terms_condition.shtml"},{"country":"Indonesia","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Ireland","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_IE/terms_conditions/index.shtml#use"},{"country":"Israel","language":"Hebrew","privacyLabel":"הודעה בדבר פרטיות","privacyLink":"http://www.pg.com/privacy/hebrew/privacy_statement.shtml","tnc":"תנאי שימוש","tncLink":"http://www.pg.com/he_IL/terms_conditions/index.shtml"},{"country":"Israel","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/he_IL/terms_conditions/index.shtml"},{"country":"India","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_IN/terms_conditions/index.shtml#use"},{"country":"Italy","language":"Italian","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/italian/privacy_statement.shtml","tnc":"Termini e condizioni","tncLink":"http://www.pg.com/it_IT/terms_conditions/index.shtml"},{"country":"Japan","language":"f","privacyLabel":"プライバシー","privacyLink":"http://www.pg.com/privacy/japanese/privacy_statement.shtml","tnc":"利用規約","tncLink":"http://www.pg.com/ja_Clean/terms_conditions/index.shtml"},{"country":"Kazakhstan","language":"Russian","privacyLabel":"Примечание о конфиденциальности","privacyLink":"http://www.pg.com/privacy/russian/privacy_statement.shtml","tnc":"Условия и положения","tncLink":"http://www.procterandgamble.ru/ru-RU/terms-conditions"},{"country":"Kazakhstan","language":"Kazakh","privacyLabel":"ҚҰПИЯЛЫЛЫҚ ЕСКЕРТУІ","privacyLink":"http://www.pg.com/privacy/russian/privacy_statement.shtml","tnc":"МЕРЗІМДЕР МЕН ШАРТТАР","tncLink":"https://www.pg.com/kk_KZ/terms_conditions/index.shtml"},{"country":"Morocco","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Multi-Country","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Mexico","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Malaysia","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Nigeria","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_NG/terms_conditions/index.shtml#use"},{"country":"Nicaragua","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Netherlands","language":"Dutch","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/dutch/privacy_statement.shtml","tnc":"Algemene voorwaarden","tncLink":"http://www.pg.com/nl_NL/terms-conditions.shtml"},{"country":"Norway","language":"Norwegian","privacyLabel":"Personvern","privacyLink":"http://www.pg.com/privacy/norwegian/privacy_statement.shtml","tnc":"Regler og vilkar","tncLink":"http://www.pg.com/no_NO/terms_conditions/index.shtml"},{"country":"Panama","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Peru","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Philippines","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"can we use https://www.pg.com/en_PH/terms_conditions/index.shtml"},{"country":"Pakistan","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Poland","language":"Polish","privacyLabel":"Prywatność","privacyLink":"http://www.pg.com/privacy/polish/privacy_statement.shtml","tnc":"Regulamin","tncLink":"http://www.pg.com/pl_PL/terms_conditions/index.shtml"},{"country":"Portugal","language":"Portuguese","privacyLabel":"Privacidade","privacyLink":"http://www.pg.com/privacy/portuguese/privacy_statement.shtml","tnc":"Termos e Condições","tncLink":"http://www.pg.com/pt_PT/terms_conditions/index.shtml"},{"country":"Paraguay","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Romania","language":"Romanian","privacyLabel":"Confidenţialitate ","privacyLink":"http://www.pg.com/privacy/romanian/privacy_statement.shtml","tnc":"Termeni și Condiţii","tncLink":"http://www.pg.com/ro_RO/terms_conditions/index.shtml#use"},{"country":"Russia","language":"Russian","privacyLabel":"Примечание о конфиденциальности","privacyLink":"http://www.pg.com/privacy/russian/privacy_statement.shtml","tnc":"Условия и положения","tncLink":"http://www.procterandgamble.ru/ru-RU/terms-conditions"},{"country":"Saudi Arabia","language":"Arabic","privacyLabel":"إشعار الخصوصية","privacyLink":"http://www.pg.com/privacy/arabic/privacy_statement.shtml","tnc":"الشروط والأحكام","tncLink":"http://www.pg.com/ar_EG/terms_conditions/index.shtml#use"},{"country":"Saudi Arabia","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Sweden","language":"Swedish","privacyLabel":"Integritetspolicy","privacyLink":"http://www.pg.com/privacy/swedish/privacy_statement.shtml","tnc":"Bestämmelser och villkor","tncLink":"http://www.pg.com/se_SE/terms_conditions/index.shtml"},{"country":"Singapore","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"El Salvador","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Thailand","language":"Thai","privacyLabel":"ความเป็นส่วนตัว","privacyLink":"http://www.pg.com/privacy/thai/privacy_statement.html","tnc":"ข้อตกลงและเงื่อนไข","tncLink":"http://www.pg.com/th_TH/terms_conditions/index.shtml"},{"country":"Thailand","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_US/terms_conditions/index.shtml#use"},{"country":"Turkey","language":"Turkish","privacyLabel":"Gizlilik","privacyLink":"http://www.pg.com/privacy/turkish/privacy_statement.shtml","tnc":"Hüküm ve Koşullar","tncLink":"http://www.pg.com/tr_TR/terms_conditions/index.shtml"},{"country":"Taiwan","language":"Chinese (Traditional)","privacyLabel":"隱私權","privacyLink":"http://www.pg.com/privacy/chineseT/privacy_statement.shtml","tnc":"條款和協議","tncLink":"http://www.pg.com/zh_TW/terms_conditions/index.shtml"},{"country":"Uruguay","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"Venezuela","language":"Spanish","privacyLabel":"Privacidad","privacyLink":"http://www.pg.com/privacy/americaspanish/privacy_statement.shtml","tnc":"Términos y condiciones","tncLink":"http://www.pg.com/es_ES/terms_conditions/index.shtml"},{"country":"South Africa","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_ZA/terms_conditions/index.shtml"},{"country":"Kenya","language":"English","privacyLabel":"Privacy","privacyLink":"http://www.pg.com/privacy/english/privacy_statement.shtml","tnc":"Terms and Conditions","tncLink":"http://www.pg.com/en_KE/terms_conditions/index.shtml"},{"country":"Slovenia","language":"Slovenian","privacyLabel":"Zasebnost","privacyLink":"   no privacy link","tnc":"Pogoji","tncLink":"http://www.pg.com/sl_SI/terms_conditions/"},{"country":"Slovakia","language":"Slovakian","privacyLabel":"Ochrana osobných údajov  ","privacyLink":"https://www.pg.com/privacy/slovakian/privacy_statement.shtml","tnc":"Zmluvné podmienky ","tncLink":"https://www.pg.com/sk_SK/terms_conditions/index.shtml"},{"country":"UA-Ukraine","language":"Ukranian","privacyLabel":"Kонфіденційності та Правові положення ","privacyLink":" https://www.pg.com/privacy/ukrainian/privacy_statement.shtml","tnc":"Правові положення ","tncLink":"https://www.pg.com.ua/uk-UA/terms-conditions "},{"country":"Algeria","language":"French","privacyLabel":"Notification de confidentialité","privacyLink":"http://www.pg.com/privacy/french/privacy_statement.shtml","tnc":"Conditions d’utilisation","tncLink":"http://www.pg.com/fr_FR/terms_conditions/index.shtml"},{"country":"Algeria","language":"Arabic","privacyLabel":"إشعار الخصوصية","privacyLink":"http://www.pg.com/privacy/arabic/privacy_statement.shtml","tnc":"الشروط والأحكام","tncLink":"http://www.pg.com/ar_EG/terms_conditions/index.shtml#use"},{"country":"Estonian","language":"Estonian","privacyLabel":"Privaatsus ","privacyLink":"http://www.pg.com/privacy/estonian/privacy_statement.shtml","tnc":"Tingimused","tncLink":"http://www.pg.com/et_EE/terms_conditions/index.shtml"},{"country":"Korean","language":"Korean","privacyLabel":"개인정보처리방침","privacyLink":"http://www.pg.com/privacy/korean/privacy_statement.shtml ","tnc":"이용약관","tncLink":"http://www.pg.com/ko_Clean/terms_conditions/"},{"country":"Lithuanian","language":"Lithuanian","privacyLabel":"Privatumas","privacyLink":"http://www.pg.com/privacy/lithuanian/privacy_statement.shtml","tnc":"Terminai ir sąlygos ","tncLink":"http://www.pg.com/lt_LT/terms_conditions/"},{"country":"Latvia","language":"Latvian","privacyLabel":"Privātums","privacyLink":"http://www.pg.com/privacy/latvian/privacy_statement.shtml","tnc":"Noteikumi un nosacījumi","tncLink":"http://www.pg.com/lv_LV/terms_conditions/index.shtml#use"},{"country":"Macedonia","language":"Macedonian","privacyLabel":"Заштита на податоци","privacyLink":"http://www.pg.com/privacy/macedonian/privacy_statement.shtml","tnc":"Правила и услови","tncLink":"http://www.pg.com/mk_MK/terms_conditions/"},{"country":"Morocco","language":"French","privacyLabel":"Notification de confidentialité","privacyLink":"http://www.pg.com/privacy/french/privacy_statement.shtml","tnc":"Conditions d’utilisation","tncLink":"http://www.pg.com/fr_FR/terms_conditions/index.shtml"},{"country":"Serbian","language":"Serbian/Bosnian","privacyLabel":"Privatnost","privacyLink":"http://www.pg.com/privacy/serbian/privacy_statement.shtml","tnc":"Uslovi i odredbe","tncLink":"http://www.pg.com/sr_RS/terms_conditions/index.shtml"},{"country":"Vietnam","language":"Vietnamese","privacyLabel":"Thông báo bảo mật","privacyLink":"http://www.pg.com/privacy/vietnamese/privacy_statement.shtml","tnc":"Điều khoản & điều lệ ","tncLink":"http://www.pg.com/vi_VN/terms_conditions/index.shtml"},{"country":""}]