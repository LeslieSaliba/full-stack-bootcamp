// Step 1
console.log('I am linked now!');

// Step 2
let name = "Leslie";
alert(name);

function alertBox() {
    alert(name);
}

//Step 3
var age;
const lastName = "Saliba";
let DOB;

age = 24;
DOB = "25 October 1998";

console.log(age);

age = 25;

//Step 4
console.log(age, lastName, DOB);

console.log("This is a text");
console.log(true);
console.log(false);
console.log(1215);
console.log("999");
console.log({}); // object (can be object, array, date)
console.log([]); // array
console.log(null);
console.log(undefined);

let text = "This is a random text.";
let numbers = 123;
let suite = ["array1", 2];
let car = { type: "Mercedes", color: "white" };
let x = true;
let y;

console.log(text + " string");
console.log(numbers + " number");
console.log(suite + " array");
console.log(car + " object");
console.log(x + " boolean");
console.log(y + " undefined");

//Step 5
let myText = "Test";
let myText2 = 'Test2';
let myText3 = `Test3`;

console.log(myText + " " + myText2 + " " + myText3 + " ");

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote = 'This is my text using single quotations ${counter} times';
const doubleQuote = "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);

console.log("Single and double quotations don't allow interpolation usage. It only works with backticks.");

//Step 6
let string1 = "hello, ";
let string2 = "goodbye";
let result = string1.concat(string2);
console.log(result);

