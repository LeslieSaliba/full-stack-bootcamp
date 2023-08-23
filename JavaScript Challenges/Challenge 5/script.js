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
h1js.style.fontStyle = "italic";

let h3JS = document.querySelector("h3");
h3js.style.fontStyle = "italic";

