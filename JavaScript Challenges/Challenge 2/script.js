//Step 1
let age = 24;
if (age >= 20) {
    console.log('You can enter this room.');
}
else {
    console.log("You can't enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1); // true
console.log(expression2); // false
console.log(expression3); // false
console.log(expression4); // true

//Step2
const age1 = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;

if (age1 >= 18 && hasDriverLicense == true) {
    canDrive = true;
    console.log(canDrive + " after checking age and license");
}

let canRentCar = false;

if (age1 >= 22 && hasDriverLicense == true && hasCar == false) { //or != true
    canRentCar = true;
    console.log(canRentCar + " after checking age, license and car possession");
}

let needDriver = false;

if (age1 < 18 && hasDriverLicense == false && hasCar == false) {
    needDriver = true;
    console.log(needDriver + " after rechecking age, license and car possession");
}else{
    console.log(needDriver + " doesn't need driver")
}

//Step3