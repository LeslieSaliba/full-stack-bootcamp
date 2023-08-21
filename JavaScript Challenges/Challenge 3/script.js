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
        return x;
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
            result3 = add(a, b);
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




