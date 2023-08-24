// Step 1: Introduction to Asynchronous JS

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let helloMessage = document.createElement("p");
        helloMessage.textContent = "Hello after 5 seconds!";
        document.body.appendChild(helloMessage)
    }, 5000); // 5000 milliseconds = 5 seconds
});


let clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    } else {
        hours = hours;
    }
    minutes = minutes < 10 ? "0" + minutes : minutes; // same thing, different way of wrting the if-else
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    clockDiv.textContent = timeString;
}

updateClock(); // initial update
setInterval(updateClock, 1000); // update every second


// Promises in JavaScript are a programming pattern that provides a structured way to work with asynchronous operations
// A promise represents a value that may be available now, or in the future, or never. Promises have three possible states:
// 1. Pending: The initial state when the promise is created, and it's neither fulfilled nor rejected.
// 2. Fulfilled: The state when the asynchronous operation is completed successfully, and the promise resolves with a value.
// 3. Rejected: The state when the asynchronous operation encounters an error or fails, and the promise is rejected with a reason.

const delayedPromise = new Promise((resolve, reject) => { // created a new promise using the Promise constructor, which takes a single argument (i.e. a function with two parameters: resolve and reject)
    setTimeout(() => { // used the setTimeout function to introduce a delay of 2 seconds
        resolve("Promise resolved!"); // after the delay, the resolve function is called with the message "Promise resolved!"
    }, 2000); // 2000 milliseconds = 2 seconds
});

delayedPromise.then((message) => {
    delayedPromise
        .then((message) => { // attach a .then() method to the promise to specify what should happen when the promise is resolved 
            console.log(message); // Output: Promise resolved!
        });
    return "Chained message!";
})
    .then((chainedMessage) => {
        console.log(chainedMessage); //  Logs "Chained message!"
    });


// Step 2: Diving Deeper into Async Operations

// Step 3: Advanced Async Patterns