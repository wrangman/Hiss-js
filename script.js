const elevator = document.getElementById("elevator");
const buttons = document.querySelectorAll("[data-floor]");
const display = document.querySelector(".elevator-display"); // Select the display
const totalFloors = 10;
const floorHeight = 50;
let activeFloor = 1; // Height of each floor in pixels

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const floor = parseInt(button.getAttribute("data-floor")); // Convert floor to number

    if (floor >= 1 && floor <= totalFloors) { // Validate floor range
        if (floor !== activeFloor) { // If it's a different floor
            activeFloor = floor;
            moveToFloor(floor);
            updateDisplay("Åker till våning:", floor);

        } else if (floor === activeFloor) {
            updateDisplay("Du är på våning:", floor);
        }

    } else {
        updateDisplay("Ogiltig våning:", floor);
        console.error(`Ogiltig våning: ${floor}`); // Handle out-of-range floors
    }
  });
});

// Function to move the elevator to the specified floor
function moveToFloor(floor) {
  const targetPosition = (floor - 1) * floorHeight; // Calculate the Y offset based on floor
  elevator.style.transform = `translateY(-${targetPosition}px)`; // Move the elevator upwards
  elevator.style.transition = "transform 1s 1s ease-in-out"; // Smooth animation
}

// Function to update the elevator display
function updateDisplay(message, floor) {
    // Prepend the new message at the top of the display
    display.innerHTML = `${message} ${floor}<br>` + display.innerHTML;
  }
  