/** Initialze Square/Buttons Event Handlers */
function square() {
  // Use selector to get references to the three elements
  // Select by ids
  const orangeButton = document.querySelector("#orange")
  const blueButton = document.querySelector("#blue")
  const square = document.querySelector("#square")

  // Confirm elements of correct type
  if (!(blueButton instanceof HTMLButtonElement)) {
    console.log("Blue button not found")
    return
  }
  if (!(orangeButton instanceof HTMLButtonElement)) {
    console.log("Orange button not found")
    return
  }
  if (!(square instanceof HTMLDivElement)) {
    console.log("Square not found")
    return
  }

  // Register event handlers
  orangeButton.addEventListener("click", (event: MouseEvent) => {
    square.classList.remove("blue")
    square.classList.add("orange")
  })

  blueButton.addEventListener("click", (event: MouseEvent) => {
    square.classList.remove("orange")
    square.classList.add("blue")
  })


}

/** Intialize Table Event Delegation */
function table() {
  // get references to the table, output area, and button
  const table = document.querySelector("table")
  const output = document.querySelector("#output")
  const button = document.querySelector("#clear")

  // check
  if (! (table instanceof HTMLTableElement)) {
    console.log("table not found", table)
    return
  }
  if (! (output instanceof Element)) {
    console.log("table not found", output)
    return
  }
  if (! (button instanceof HTMLButtonElement)) {
    console.log("table not found", button)
    return
  }
}

// Initialize after page has loaded
document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Event Handling
  square();
  table();
});

// Needed to turn this into a TypeScript Module
export {};
