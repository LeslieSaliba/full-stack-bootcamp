// Step 1: Arrays and Objects

let firstNum; // declare variables before destructuration 
let secondNum;
let thirdNum;

// destructuration below : si je veux pas forcément les premiers je laisse des virgules --> [, , , fouthNumber]
// il est possible de destructurer une seconde fois avec d'autres noms 
let fiveNumbers = [firstNum, secondNum, thirdNum, ...restOfNumbers] = [1, 7, 8, 25, 29];
console.log(fiveNumbers);

let name; // same as above 
let age;
let height;
let locationn;
let nationality;

let contactInfo = { email: 'leslie@gmail.com', number: 812 } // object created to try nested destructuring

let personalInfo = { name, age, height, locationn, nationality, contactInfo: { email, number } } = { name: "Leslie", age: 24, height: "163cm", locationn: "Lebanon", nationality: "French-Lebanese", contactInfo };
console.log(personalInfo);

personalInfo.contactInfo = {website: "none"}; // pour ajouter une key et value après coup sans modifier le statement initial 

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


// Step 4: Advanced Operations
console.log("email alone: " + email, "number alone: " + number, "both contact info: " + contactInfo);

console.log(restOfNumbers); // how to transform it into a new array?

let object1 = { ingredient: "tomato", fruit: "yes", color: "red", price: 1 };
let object2 = { ingredient: "onion", vegetable: "yes", color: "white", price: 1 };
console.log(object1);
console.log(object2);

let objectMerge = { ...object1, ...object2 }; // if commun properties in merged objects, take the values of the second/last objet
console.log(objectMerge); 