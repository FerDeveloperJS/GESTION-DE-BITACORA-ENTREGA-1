// filepath: /web-controller-project/web-controller-project/public/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("mensaje");

    function showMessage(text, type = "info", duration = 6000) {
        messageContainer.textContent = text;
        messageContainer.style.color = type === "error" ? "red" : "green";

        setTimeout(() => {
            messageContainer.textContent = "";
        }, duration);
    }

    // Example of handling a button click
    const exampleButton = document.getElementById("example-button");
    if (exampleButton) {
        exampleButton.addEventListener("click", () => {
            showMessage("Button clicked!", "info");
        });
    }

    // Additional event listeners and functionality can be added here
});