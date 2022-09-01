"use strict";

console.log("Hello World");
console.log("hiii");
// alert("hello");   #give a pop up 
// ["hello", 2].forEach(alert); gives a alert pop up for each element in the array

let msg = "felix"; // can be change after the creation
const NAME = "Afnan"; // constant Var can not be change once created
// alert(msg);

let cal = 1 / 0;
console.log(cal); // will give infinity unlike python ZeroDivisionError
const bigINT = BigInt(1234567890123456789012345678901234567890); // Big Int
console.log(bigINT);

const Monarch = "Jung Sunwoo"
let fString = `the shadow monarch ${Monarch}`; // fstring
console.log(fString);

console.log(typeof(Monarch)); // give Type of an object

// let res = prompt("enter a number: ", [1]); // Asks for user input which takes two params txt to display and default value if needed
// console.log(res);

// let question = confirm("Who are You?"); // Asks a question ok/cancel ==> true/false
// console.log(question);

// let num1 = prompt("enter no: ");    // Gives the string format
// let num2 = prompt("enter num: ");
// console.log(Number(num1) + Number(num2));