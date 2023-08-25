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

let form = document.querySelector('.form');
let fullName = document.querySelector('.full-name');
let emailAddress = document.querySelector('.email-address');
let password = document.querySelector('.password');
let confirmPassword = document.querySelector('.confirm-password');
let submitButton = document.querySelector('.submit');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!validateEmail()) {
        return; // Return if email is not valid
    }
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords don't match.";
    }
});


function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailAddress.value)) {
        emailError.textContent = 'Please enter a valid email address.'; 
        return false;
    } else {
        emailError.textContent = ''; // clear the error message when email becomes valid
        return true;
    }
}


submitButton.addEventListener('click', function () {
    fullNameValue = fullName.value;
    emailAddressValue = emailAddress.value;
    passwordValue = password.value;
    confirmPasswordValue = confirmPassword.value;

    if (fullName && emailAddress && password && password === confirmPassword) {
        let successMessage = document.createElement('p');
        successMessage.textContent = "Your form has been submitted."
        document.body.appendChild(successMessage);
    }
});

let allInputs = document.querySelectorAll('input');

allInputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        this.style.backgroundColor = "yellow";
    });

    input.addEventListener('blur', function () {
        this.style.backgroundColor = "";
    });
});
