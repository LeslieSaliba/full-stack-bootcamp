// Step 1: DOM Creation and Navigation

// DOM Tree Navigation

let menuJS = document.querySelector('.menu');
let headerJS = document.querySelector('header');
let footerJS = document.querySelector('footer');


for (let i = 0; i < menuJS.children.length; i++) {
    console.log("Child elements of 'menu': ", menuJS.children[i]);
}

for (let i = 0; i < headerJS.children.length; i++) {
    console.log("Child elements of 'header': ", headerJS.children[i]);
}

for (let i = 0; i < footerJS.children.length; i++) {
    console.log("Child elements of 'footer': ", footerJS.children[i]);
}

// DOM Element Creation 

let newDiv = document.createElement('div'); // creation of a new div 
newDiv.className = "container"; // assigning it a class name - & setAttribute("id", "idName") to add id 

let newParagraph = document.createElement('p'); // creation of a new p 
newParagraph.textContent = 'Hello, World!'; // entering its text - could use innerText 

document.body.appendChild(newDiv); // making newDiv a child of the body directly 
newDiv.appendChild(newParagraph); // making newParagraph a child of newDiv 

// Element Styling

newDiv.style.backgroundColor = "blue";
newParagraph.style.color = "white";
newParagraph.style.fontSize = "24px";
newParagraph.style.fontFamily = "Helvetica";
newParagraph.style.border = "1px solid black";

let h1JS = document.querySelector("h1");
h1JS.style.fontStyle = "italic";

let h3JS = document.querySelector("h3");
h3JS.style.fontStyle = "italic";


// Step 2: Event Handling

// Multiple Event Listeners

let newButton = document.createElement('button');
document.body.appendChild(newButton);
newButton.innerHTML = "start";

newButton.addEventListener("mouseover", function () {
    newButton.style.backgroundColor = "green";
})
newButton.addEventListener("mouseout", function () {
    newButton.style.backgroundColor = "red";
})

// Event Delegation

let originalJS = document.getElementById('original');

let buttonsJS = document.querySelectorAll('button');

for (let i = 0; i < buttonsJS.length; i++) {
    buttonsJS[i].addEventListener("click", function () {
        console.log(this.textContent); // this.textContent same as buttonsJS[i].textContent
    });
}

// `this` refers to the current context or the object that the code is being executed within.
// value of this is determined by the way a function is called, not where it is defined.
// In an event handler, this often refers to the DOM element that triggered the event.


// Form Data Extraction 

let newForm = document.createElement('form');
document.body.appendChild(newForm);

let nameInput = document.createElement('input');
nameInput.type = "text";
newForm.appendChild(nameInput);

let emailInput = document.createElement('input');
emailInput.type = "email";
newForm.appendChild(emailInput);

let submitButton = document.createElement('button');
submitButton.type = "submit";
newForm.appendChild(submitButton);

newForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Name: ", nameInput.value);
    console.log("Email: ", emailInput.value);
});








