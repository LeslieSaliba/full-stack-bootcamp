// Step 1

let container = document.createElement('div');
container.className = "container";

let loginContainer = document.createElement('div');
loginContainer.className = "login__container";

let loginSignIn = document.createElement('div');
loginSignIn.className = "login__signin";

let loginSignInNow = document.createElement('div');
loginSignInNow.className = "login__signin-now";

let h1 = document.createElement('h1');
h1.textContent = "Sign up NOW!";

let h3 = document.createElement('h3');
h3.textContent = "Enter your details"

let form = document.createElement('form');

let labelEmail = document.createElement('label');
labelEmail.textContent = "Email";

let inputEmail = document.createElement('input');
inputEmail.className = "input-field";
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.required = true

let labelPassword = document.createElement('label');
labelPassword.textContent = "Password";

let inputPassword = document.createElement('input');
inputPassword.className = "input-field";
inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.required = true

let labelConfirmPassword = document.createElement('label');
labelConfirmPassword.textContent = "Confirm Password";

let inputConfirmPassword = document.createElement('input');
inputConfirmPassword.className = "input-field";
inputConfirmPassword.type = "password"; // cPassword? 
inputConfirmPassword.placeholder = "Confirm Password";
inputConfirmPassword.required = true

let button = document.createElement('button');
button.className = "filled-btn";
button.id = "submit-btn";
button.textContent = "Submit";

labelConfirmPassword.appendChild(inputConfirmPassword);
labelPassword.appendChild(inputPassword);
labelEmail.appendChild(inputEmail);
form.append(labelEmail, labelPassword, labelConfirmPassword, button);
loginSignInNow.append(h1, h3, form);
loginSignIn.appendChild(loginSignInNow);
loginContainer.appendChild(loginSignIn);
container.appendChild(loginContainer);
document.body.appendChild(container);

// Step 1.1. 

let passwordError = document.createElement('p');
labelConfirmPassword.appendChild(passwordError);

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputPassword.value !== inputConfirmPassword.value) {
        passwordError.textContent = "Passwords don't match.";
    }
    else {
        window.location.href = "quotes.html";
    }
});
