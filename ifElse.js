let name = "Ninah"
if (name != "Synthina"){
    console.log("Hey there");
    if (name.length <= 3){
        console.log("Name is too short")
    }
    else{
        console.log("name accepted")
    }
}
else{
    console.log("No name");
}

// && -> and both conditions are true
// || -> or either one or both are true

let a = 20;
let b = 10;
let add = a+b

if(add <30 && a >20){
    console.log(true)
}
console.log(false)

if(add >=30 || a >20){
    console.log(true)
}else
console.log(false)

// Switch Statement
// switch (expression) {
//     case 1:
//      //this code will execute if the case matches the expression
//       break;
//     case 2:
//      //this code will execute if the case matches the expression
//       break;
//     case 3:
//      //this code will execute if the case matches the expression
//       break;
//     default:
//       //this code will execute if none of the cases match the expression
//       break;
//   }

const material1 = ["Lockers","Tables","Chairs","Computers","Television"]
for(let i = 0; i<material1.length;i++){
console.log(material1[i]);
}

const material2 = ["Lockers","Tables","Chairs","Computers","Television"]
for(let i = 0; i<material2.length;i++){
console.log(material2[i]);
if(i ===2){
    break;
}
}

const material = ["Lockers","Tables","Chairs","Computers","Television"]
for(let i = 0; i<material.length;i++){
if(i ===2){
    continue;
}
console.log(material[i]);
}

function children(){
    var name1 = "Swabrina"
    let name2 = "Suhaila"
    const name3 = "Zulekha"
    
    console.log({name1})
    console.log({name2})
    console.log({name3})
}
children();

function num(){  //parent scope
    var a = 2;
    function add(){ // child scope
        var b = 3;
        var c = a+c;
        console.log(c);
    }
    add();
}
num();

var num = [1,2,3,4,5,6,7,8,9,10];
for (let i=0; i<num.length; i++){
console.log(num[i]);
}

"use strict"
let myName;








