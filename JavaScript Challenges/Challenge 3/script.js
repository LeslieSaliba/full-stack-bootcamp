// Step 1 

// Basic Function

function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(2, 3);
console.log("first one " + result);

result = addNumbers(-6, 8);
console.log("second one " + result);

result = addNumbers(0, 7);
console.log("third one " + result);

// Function with Conditional Statements

function findMax(x, y) {
    if (x > y) {
        return `${x} is greater than ${y}`; // pour que les numéros apparaissent 
    }
    else if (y > x) {
        return y;
    }
    else {
        return "Both are equal"
    }
}

console.log(findMax(2, 3), findMax(7, -2), findMax(0, 0));


// Nested Function

function compute(a, b, operation) {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }

    let result3;
    switch (operation) {
        case "add":
            result3 = add(a, b); // ou directement -- return add() -- plus besoin de définir result3 au préalable 
            break;
        case "subtract":
            result3 = subtract(a, b);
            break;
        case "multiply":
            result3 = multiply(a, b);
            break;
        case "divide":
            result3 = divide(a, b);
            break;
    }

    return result3;
}

console.log(compute(10, 5, "add"));
console.log(compute(10, 5, "subtract"));
console.log(compute(10, 5, "multiply"));
console.log(compute(10, 5, "divide"));


// Step 2

// Arrow Function 

let squareNumber0 = (number) => number * number;  // cette écriture si la fonction est straightforward donc sans {}

let squareNumber = (number) => {
    let localVar = 6;
    console.log(squareNumber(localVar)); // working because the console.log is within the function
    return number * number
} // tout ce qui est dans les {} est la fonction 


console.log(squareNumber(9));

let globalVar = 7;
console.log(squareNumber(globalVar)); // peut être dans la fonction également  

// console.log(squareNumber(localVar)); // not working because the variable is declared within the function so is accessible only within the scope of this function. 

// Step 3 

// For Loop 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While Loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Do-While Loop with Conditionals
let h = 1;
do {
    if (h % 2 == 0) {
        console.log(h);
    }
    h++;
}
while (h <= 10);

// Advanced Loop Challenge

let favoriteFruits = ["banana", "cherry", "kiwi", "pear", "pineapple"];

console.log(favoriteFruits);

for (let i = 0; i < favoriteFruits.length; i++) {
    let oneFruit = favoriteFruits[i];
    if (oneFruit.length > 5) {
        console.log(oneFruit);
    }
}

// autre possibilité plus avancée
for (favoriteFruit of favoriteFruits) {
    if (favoriteFruit.length > 5)
        console.log(favoriteFruit)
}

// encore autre possibilité plus avancée
favoriteFruits.forEach((favoriteFruit) => {
    if (favoriteFruit.length > 5){
        console.log(favoriteFruit)}
});


console.log(favoriteFruits[4].length + " letters in " + favoriteFruits[4]); // just trying to understand length concept 


// Bonus Step 


// Higher order function 

function processArray(arrayTest, functionTest) {
    // ???
}



// Closures 
function multiplier(number1) {
    return function functionReturned(number2) {
        return number1 * number2;
    }
}

let multiplyBy5 = multiplier(5);
console.log(multiplyBy5(2));




