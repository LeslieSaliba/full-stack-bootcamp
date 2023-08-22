// Step 1: Arrays and Objects

let firstNum; // declare variables before destructuration 
let secondNum;
let thirdNum;

let fiveNumbers = [firstNum, secondNum, thirdNum, fourthNum, fifthNum,] = [1, 7, 8, 25, 29];
console.log(fiveNumbers);

let name; // same as above 
let age;
let height;
let locationn;
let nationality;

let personalInfo = { name, age, height, locationn, nationality } = { name: "Leslie", age: 24, height: "163cm", locationn: "Lebanon", nationality: "French-Lebanese" };
console.log(personalInfo);

// Step 2: Spread Operator

let nextThreeNumbers = [21, 57, 64];

let allNumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);

let additionalInfo = { hobby: "design", favoriteDish: "lasagna" };
let fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);

// Step 3: Destructuring
console.log(firstNum, secondNum, thirdNum);

console.log(name, locationn, nationality); // Error in console: location (single n) already defined in js 1:1 

