/** Custom color event */
interface ColorEvent {
  color: string;
}

declare global {
  interface DocumentEventMap {
    "color-event": CustomEvent<ColorEvent>;
  }
}

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

  // handle custom color events
  document.addEventListener("color-event", (event: CustomEvent<ColorEvent>) => {
    const color = event.detail.color;
    square.style.backgroundColor = color;
  });

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

  // register event handlers
  table.addEventListener("click", (event: MouseEvent) => {
    if ( !(event.target instanceof HTMLElement)) {
      console.log("event target not html element", event.target)
      return
    }
    const cell = event.target.closest("td")
    if (cell == null) {
      console.log("no cell")
      return
    }
    const text = cell.innerText
    const newElem = document.createElement("p")
    output.append(text, newElem)
  })
  button.addEventListener("click", (event: MouseEvent) => {
    if (output instanceof Element) {
      output.innerHTML = "";
    }
  })
}


/** Send a "green" ColorEvent when "g" is pressed anywhere. */
function custom() {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key == "g") {
      const color = new CustomEvent("color-event", {
        detail: {
          color: "green",
        },
      });
      document.dispatchEvent(color);
    }
  });
}

// Initialize after page has loaded
document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Event Handling
  square();
  table();
  custom();
});

// Needed to turn this into a TypeScript Module
export {};
