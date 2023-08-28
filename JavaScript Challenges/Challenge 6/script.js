// Step 1: Introduction to Asynchronous JS

// setTimeout(function, milliseconds) = toujours 2 paramètres 

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

setInterval(updateClock, 1000); // update every second

// setInterval(() => {
//   let currentTime = new Date().toLocaleTimeString;
//   console.log(currentTime);
// }, 1000);


// Promises in JavaScript are a programming pattern that provides a structured way to work with asynchronous operations
// A promise represents a value that may be available now, or in the future, or never. Promises have three possible states:
// 1. Pending: The initial state when the promise is created, and it's neither fulfilled nor rejected.
// 2. Fulfilled: The state when the asynchronous operation is completed successfully, and the promise resolves with a value.
// 3. Rejected: The state when the asynchronous operation encounters an error or fails, and the promise is rejected with a reason.

const delayedPromise = new Promise((resolve) => { // created a new promise using the Promise constructor, which takes a single argument (i.e. a function with two parameters: resolve and reject)
  setTimeout(() => { // used the setTimeout function to introduce a delay of 2 seconds
    resolve("Promise resolved!"); // after the delay, the resolve function is called with the message "Promise resolved!"
  }, 2000); // 2000 milliseconds = 2 seconds
});

delayedPromise.then(() => {
  delayedPromise
    .then((message) => { // attach a .then() method to the promise to specify what should happen when the promise is resolved 
      console.log(message); // Output: Promise resolved!
    });
  return "Chained message!";
})
  .then((chainedMessage) => {
    console.log(chainedMessage); //  Logs "Chained message!"
  });

// voir correction, pas très clair 


// Step 2: Diving Deeper into Async Operations

function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network Error!");
      }
    }, 3000); // 3 seconds 
  });
}

async function fetchData() {
  try {
    const response = await simulateNetworkRequest();
    console.log(response);

    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!postResponse.ok) {
      throw new Error("Failed to fetch post data");
    }

    const postData = await postResponse.json();
    console.log("Fetched post data:", postData);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData(); // initiate the network request 


// Step 3: Advanced Async Patterns

const fetchPostsData = async () => {
  const postIds = [1, 2, 3];
  const fetchPromises = postIds.map(id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // endpoint = specific location within an API that accepts requests and sends back responses
      .then(response => response.json())
  );

  const results = await Promise.all(fetchPromises); // ensures all requests are completed before processing the results
  console.log("Fetched post data:", results); // show all results of 1, 2, & 3 (array of objets)

  fetchPostsData();

  // # Ensuring All Requests Complete Before Processing Results:
  // When you have a list of promises that you want to execute in parallel, 
  // you can use Promise.all to ensure that all promises are completed before you start processing the results. 
  // Promise.all takes an array of promises and returns a new promise that resolves to an array of results 
  // when all input promises have resolved.

  const fetchAndProcessPostsSequentially = async () => {
    const postIds = [4, 5, 6, 7, 8];
    const results = [];

    for await (const id of postIds) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const postData = await response.json();
      results.push(postData);
      console.log("Processed post:", postData); // show each result on seperate line 
    }

    console.log("Sequential processing completed. Results:", results); // show all results of 4, 5, 6, 7 & 8 (array of objets)
  };
};

fetchAndProcessPostsSequentially();

// # Async Iteration to Process Promises Sequentially:
    // allows you to iterate over a collection of asynchronous items such as promises, in a sequential manner.
    // This is achieved using the for await...of loop
    // When you use for await...of, it will iterate through the promises one by one,
    // awaiting each promise to complete before moving to the next iteration.
    // This ensures that the promises are processed sequentially, and the code inside the loop is executed in order.
