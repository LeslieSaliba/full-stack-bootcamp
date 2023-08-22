// Step 1: Arrays and Objects

let fiveNumbers = [1, 7, 8, 25, 29]; 
console.log(fiveNumbers); 

let personalInfo = {name:"Leslie", age:24, height:"163cm", location:"Lebanon", nationality:"French-Lebanese"};
console.log(personalInfo); 

// Step 2: Spread Operator

let nextThreeNumbers = [21, 57, 64]; 

let allNumbers = [...fiveNumbers, ...nextThreeNumbers]; 
console.log(allNumbers); 

let additionalInfo = {hobby:"design", favoriteDish:"lasagna"}; 
let fullInfo = {...personalInfo, ...additionalInfo}; 
console.log(fullInfo); 

