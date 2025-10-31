// CMPM 121 Smelly Code Activity

let counter = 0;

// These constants are for button IDs and heading text
const b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
  `;

  // Get the increment button element from the document
  const incrementButton = document.createElement("button");
  incrementButton.innerHTML = "Click Me!";
  document.body.appendChild(incrementButton);

  // Get the decrement button element from the document
  const decrementButton = document.createElement("button");
  decrementButton.innerHTML = "Decrement";
  document.body.appendChild(decrementButton);

  // Get the reset button element from the document
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  document.body.appendChild(resetButton);

  // Get the counter span element from the document
  const counterElement = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterElement) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    updateCounter(++counter, counterElement);
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    updateCounter(--counter, counterElement);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    updateCounter(0, counterElement);
  });
}

function updateCounter(setNumber: number, counterElement: HTMLElement) {
  counter = setNumber;
  counterElement.innerHTML = `${counter}`;
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

// Start the counter app
setup();
