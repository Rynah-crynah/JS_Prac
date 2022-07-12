// var name = "Conslate"

// function me(){
//     var car = "Toyota"
//     console.log(name)
// }
// me()
// console.log(car);

// var a;
// var b = undefined
// console.log(typeof a)

// let num = ([1,2,"3",[4]])
// console.log(num.length)
// console.log(num[3][0])

// let a = "foo"
// let b = a.concat("bar")
// console.log(b)

// class Pupil{
//     constructor(name){
//         this.name = name;
//     }
// }
// Pupil = new Pupil("Hunter");
// console.log(Pupil.name)
// Pupil.prototype.age= 34;
// console.log(pupil.age);

// var a = "34";
// Number(a);
// console.log(typeof(a))

// var a = "34";
// console.log(Number(a)+3) // Explicit Coercion
// let d = ""
// console.log(Number(d))
// console.log(typeof(a))
// let b = 4
// let l = 4 + " Hey"  // Implicit Coercion
// console.log(l)
// console.log(typeof(l))

// var a = "34";
// Number(a);
// console.log(typeof(a))

// const greet = 'Hello';
// const name = 'Jack';

// console.log(greet + ' ' + name);

// const name1 = "Practice"
// const name2 = "JavaScript"
// const name3 = `The words are ${name1} and ${name2}`
// console.log(name3)

// const num1 = 3/0;
// console.log(num1); //Infinity

// const num2 = -3/0;
// console.log(num2); // Infinity

// // Strings can't be divided by numbers
// const num3 = "abc"/3
// console.log(num3)

// // BigInt value
// const value1 = 9008832764762738n;

// // Adding two big integers
// const results1 = value1 + 1n;
// console.log(results1);

// const value2 = 9008832764762739;
// const results2 = value2 + 1;
// console.log(results2);

// // Conversions
// // There are two types of conversion in JS
// // Implicit Conversion (Automatic) and Explicit Conversion(manual)

// // Example 1: Implicit Conversion too String
// // # numeric string used with + gives string type

// let result;
// result = '3' + 2
// console.log(result)

// result = '3' + ' ' + true
// console.log(result)

// result = '3' + undefined
// console.log(result)

// // Example 2: Implicit Conversion to Number
// // # numeric string used with -, /, * results number type

// let result1;
// result = '4' - 2
// console.log(result)

// result = '4' - "2"
// console.log(result)

// result = '4' / 2
// console.log(result)

// result = '4' * 2
// console.log(result)

// // Exa,ple 3: Non-Numeric String to NaN
// // # on-numeric string used with -, /, * results to Nan

// let results;
// results = 'hello' - 'world';
// console.log(results)

// // Example 4: Boolean conversion to Numeric
// //  # If boolean is used, true = 1 and false = 0

// let result2;
// result2 = '4' - true;
// console.log(result2)

// result2 = 4 + true
// console.log(result2)

// // Example 5: null conversion to Number
// // # null is 0 when used with number

// let result3;
// result3 = 4 / null;
// console.log(result3)

// // Example6: Undefinied used with number, boolean or null
// // # Arithmetic operation of undefined with number, boolean 

// let result4;
// result4 = 4 + undefined
// console.log(result4)

// result4 =true + undefined
// console.log(result4)

// result4 = 4 - undefined
// console.log(result4)

// result4 = null + undefined
// console.log(result4)

// // 

// // Week 9
// // anonymous function are funtions that have no name
// let z = function(){
//     console.log("Hello Word")
// }
// a()

// function people(){
//     console.log("Hey there");
// };
// function newest(){
//     console.log(45);
// }
// newest()

// let nums = [1,4,6,2,5];
// let b = nums.map(a =>a*2)
// let c = nums.map(function(a){
//     return a*2
// })
// console.log(b);
// console.log(c);
// let button = document.getElementById("button").addEventListener("click", function(){
//     this.innerText = "Hey"
// })

// const[data, setData] = useState;
// const onHandleChange = (){
//     setData(data)
// }

// (function(){
//     console.log(34);
// })
// ()

// let a = (()=>{
//     return 5
// })()
// console.log(a);

// // Arrays
// // We can create an array using two ways;
// // 1. Using an array literal []. Fore example,
// const array1 = ["eat","sleep"]

// // 2. Using the new keyword
// const array2 = new Array("eat","sleep")

// Anything written in curly braces in JS is object

const newData = [
    {"task1": "exercise"},
    [1,2,3],
    function hello() {
        console.log("hello")
    }

];
console.log(newData)

// Add an element 
// we can use the built-in method push() and unshift()
// The push() method adds an element at the end of the array.
// let dailyActivities = ["eat","sleep","learn","workout"]
// // add an element at the end
// dailyActivities.push("Shop");
// console.log(dailyActivities)

// // The unshift() method adds an element at the beginning of the array.
// let dailyActivities1 = ["eat","sleep","learn","workout"]
// // add an element at the start
// dailyActivities1.unshift("Shop")
// console.log(dailyActivities1)

// // You can also add elements or change the elements by accessing the index value.
// let dailyActivities2 = [ 'eat', 'sleep'];

// // this will add the new element 'exercise' at the 2 index
// dailyActivities[2] = 'exercise';

// console.log(dailyActivities2); // ['eat', 'sleep', 'exercise']

// let dailyActivities3 = ["eat","sleep"]
// dailyActivities3[1] = "Walk"
// console.log(dailyActivities3)

// // Remove an Element from an Array
// // You can use the pop() method to remove the last element from an array.
// let dailyActivities4 = ["eat","sleep"]
// dailyActivities4.pop();
// console.log(dailyActivities4);

// // If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element. For example,
// let dailyActivities5 = ['work', 'eat', 'sleep'];
// dailyActivities5.shift();
// console.log(dailyActivities5); // ['eat', 'sleep']


// // practice
// let b = ["Mango","Apple"];
// b.push("Orange")
// b.unshift("Grapes")

// let c = new Array("Banana", "Kiwi")
// console.log(b)
// console.log(c)

// let d = c.map(item => `I love ${item}`);
// console.log(d);

// function people(){
//     console.log("You guys");
// }

// function students(a,callback){
//     console.log(a);
//     console.log(callback)
// }
// students(26,people())

// // Objects
// var people={
//     name:20,
//     country:"Kenya"
// };

// console.log(people["country"]);
// console.log(people.country);

// var person = new Object(people);
// console.log(person.name)
// person["age"] = 35;
// console.log(person);

// for (key of Object.entries(person)){
//     console.log(key)

// }

// // Object.freeze(person)
// person[`school`] = "AkiraChix"
// Object.seal(person)
// person.name = "Anita";

// console.log(person)

// Object.assign(person,{school: "AkiraChix"})
// console.log(person)

// var student = {
//     name :"Anita",
//     country:"Kenya",
//     hobby: function(){
//         console.log(`My name is ${this.name} and my hobby is cooking`)
//         return "My favourite hobby is baking";
//     },
//     friends:{
//         name: "Joy",
//         age: 23,
//         hobby:{
//             first:"Cooking",
//             play: function(){
//                 return "I love playing"
//             }
//         }
//     }

// }
// console.log(student.country);
// console.log(student.hobby());
// console.log(student.friends.name);
// console.log(student.friends.hobby.first);
// console.log(student.friends.hobby);

// // Classes
// class Students{
//     constructor(name,age,school){
//         this.name = name
//         this.age = age
//         this.school = school
//         this.hobby= function(){
//             return "I love playing"
//         }

//     }
// }
// Students.prototype.country = "Kenya"
// Students.prototype.country = function(){
//     return "I love my country Kenya"
// }

// var firstStudent = new Students("Cudra",19,"AkiraChix");
// console.log(firstStudent);
// console.log(firstStudent.hobby());
// console.log(firstStudent.age);
// console.log(firstStudent.country);
// console.log(firstStudent.country());


// // Function Constructor
// function Students(name,age,school){
//     this.name = name
//     this.age = age
//     this.school = school
//     this.hobby= function(){
//         return "I love playing"
//     }

// }


let names = ["Chirii", "Zipporah","Shamim"]
names[0] = "Conslate"
console.log(names)
// let dailyActivities3 = ["eat","sleep"]
// dailyActivities3[1] = "Walk"
// console.log(dailyActivities3)















