// Step 1 

let button = document.createElement("button");
button.textContent = "button";
document.body.appendChild(button);

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.cursor = "pointer";

button.addEventListener("click", function () {
    button.style.backgroundColor = "red";
    button.style.color = "gray";
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    button.textContent = `Clicked ${randomNumber}!`;
});

// Step 2 

let h1 = document.createElement("h1");
h1.textContent = "This is a h1";
document.body.appendChild(h1);

h1.style.border = "10px dotted green";

document.addEventListener("keydown", function () {
    let key = event.key.toLowerCase();

    if (key === "a") {
        h1.style.backgroundColor = "red";
    }
    else if (key === "s") {
        h1.style.marginLeft = "10px";
    } else if (key === "d") {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Key D was pressed!";
        document.body.appendChild(paragraph);
    } else if (event.key === "w") {
        toggleVisibility();
    }
    else if (key === " ") {
        h1.style.fontSize = "50px";
    }
});

function toggleVisibility() {
    if (h1.style.display === "none") {
        h1.style.display = "block";
    } else {
        h1.style.display = "none";
    }
}

// Step 3 

let form = document.createElement('form');
let fullName = document.createElement('input');
fullName.type = "text";

let emailAddress = document.createElement('input');
emailAddress.type = "email";

let password = document.createElement('input');
password.type = "password";

let confirmPassword = document.createElement('input');
confirmPassword.type = "password";

let submitButton = document.createElement('input');
submitButton.type = "submit";

document.body.appendChild(form);
form.append(fullName, emailAddress, password, confirmPassword, submitButton);

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (password.value !== confirmPassword.value) {
        let errorPassword = document.createElement('p');
        errorPassword.textContent = "Passwords don't match."
        document.body.appendChild(errorPassword);
    }
});

submitButton.addEventListener('click', function () {
    let fullName = form.fullName.value; // error in console: Cannot read properties of undefined (reading 'value')
    let emailAddress = form.emailAddress.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;

    if (fullName && emailAddress && password && password === confirmPassword) {
        let successMessage = document.createElement('p');
        successMessage.textContent = "Your form has been submitted."
        document.body.appendChild(successMessage);
    }
});

let allInputs = document.querySelectorAll('input');
console.log(allInputs);

function changeInputColor(){

}
allInputs.forEach(function (input) {
    input.addEventListener("click", function () {
        input.style.backgroundColor = "red";
    })
});

document.addEventListener("click", function () { // not working properly yet 
    allInputs.forEach(function (input) {
        input.style.backgroundColor = "green";
    });
});

