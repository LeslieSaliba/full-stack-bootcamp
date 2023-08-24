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

