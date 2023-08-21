// Step 1
console.log('I am linked now!');

// Step 2
let name = "Leslie";
alert(name);


//function alertBox() {
//   alert(name);
//}

// correction (no need for box)
alert(name)

//Step 3
var age;
const lastName = "Saliba";
let DOB;

age = 24;
DOB = "25 October 1998";

console.log(age);

age = 25;

console.log(age, lastName, DOB);

//Step 4
console.log("This is a text");
console.log(true);
console.log(false);
console.log(1215);
console.log("999");
console.log({}); // object (can be object, array, date)
console.log([]); // array
console.log(null); // null is an object, for no reason 
console.log(undefined);


let text = "This is a random text.";
let numbers = 123;
let suite = ["array1", 2];
let car = { type: "Mercedes", color: "white" };
let x = true;
let y;

console.log(text + " string");
console.log(numbers + " number");
console.log(suite + " array donc objet");
console.log(car + " object");
console.log(x + " boolean");
console.log(y + " undefined");

//3 façons (2 dernières sont la même) de savoir si l'objet est un array 
console.log(suite.isArray({})); // réponse est true or false 
console.log(suite.isArray([])); // réponse est true or false 
console.log([1,2,3].length); // donne le nombre de valeurs
console.log({}.length) // pareil, donne le nombre de valeurs

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

//Step 7
let number1 = 1;
let string1bis = "1";
let booleanTrue = true;
let object1 = { value: 1 };

// Strict Equality (===) - Checks for both value and data type
console.log(number1 === number1);    // true
console.log(number1 === string1bis);    // false (Number ≠ String)
console.log(number1 === booleanTrue);   // false (Number ≠ Boolean)
console.log(number1 === object1);    // false (Number ≠ Object)

// Strict Inequality (!==) - Checks for value and data type
console.log(number1 !== number1);    // false 
console.log(number1 !== string1bis);    // true 
console.log(number1 !== booleanTrue);   // true 
console.log(number1 !== object1);    // true 

// Loose Equality (==) - Converts types and checks for value equality
console.log(number1 == number1);     // true 
console.log(number1 == string1bis);     // true (same value, after conversion into strings)
console.log(number1 == booleanTrue);    // true (same value as true is converted to 1 and false is converted to 0)
console.log(number1 == object1);     // false (So numbers can't be equal to objects?) 

// Loose Inequality (!=) - Converts types and checks for value inequality
console.log(number1 != number1);     // false 
console.log(number1 != string1bis);     // false
console.log(number1 != booleanTrue);    // false
console.log(number1 != object1);     // true (So numbers can't be equal to objects?) 


let number5 = 5;
let string10 = "10";
let booleanT = true;
let booleanF = false;

// Greater than (>)
console.log(number5 > 3);         // true 
console.log(number5 > 7);         // false 
console.log(string10 > "5");       // false (strings and numbers are compared character by character)
console.log(booleanT > 0);    // true (true is converted to 1)

// Greater than or equals (>=)
console.log(number5 >= 5);        // true
console.log(number5 >= 3);        // true
console.log(string10 >= "5");      // false (strings and numbers are compared character by character)
console.log(booleanF >= 0);  // true (false is converted to 0)

// Less than (<)
console.log(number5 < 8);         // true 
console.log(number5 < 3);         // false 
console.log(string10 < "8");       // true (strings and numbers are compared character by character)
console.log(booleanT < 2);    // true (true is converted to 1)

// Less than or equals (<=)
console.log(number5 <= 5);        // true 
console.log(number5 <= 8);        // true 
console.log(string10 <= "10");     // true (strings and numbers are compared character by character)
console.log(booleanF <= 0);  // true (false is converted to 0)

//Step 8

let result0 = 5 + 3 * 2; // 11
console.log(result0);

let result1 = 10 / 2 + 3; // 8
let result2 = 10 / (2 + 3); // 2
console.log(result1);
console.log(result2);
console.log('Same rules as in maths'); 