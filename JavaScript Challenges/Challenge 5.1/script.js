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
