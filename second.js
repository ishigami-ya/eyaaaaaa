// Get the No button element
const noButton = document.getElementById("noButton");

// Event listener to teleport the button when clicked
noButton.addEventListener("click", () => {
    // Get the window's width and height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the button's width and height
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate random position within the screen range
    const randomX = Math.random() * (windowWidth - buttonWidth);
    const randomY = Math.random() * (windowHeight - buttonHeight);

    // Position the button at the random coordinates
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
