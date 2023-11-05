document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = textElement.innerHTML;

    // Clear the text initially
    textElement.innerHTML = "";

    function typeText() {
        textElement.innerHTML = "";
        let index = 0;
        const typeInterval = setInterval(function () {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
                setTimeout(eraseText, 1000); // Wait for 1 second before erasing
            }
        }, 50); // Faster typing speed (adjust as needed)
    }

    function eraseText() {
        let index = text.length;
        const eraseInterval = setInterval(function () {
            if (index > 0) {
                textElement.innerHTML = text.substring(0, index - 1);
                index--;
            } else {
                clearInterval(eraseInterval);
                setTimeout(typeText, 1000); // Wait for 1 second before typing again
            }
        }, 65); // Erasing speed (adjust as needed)
    }

    // Start the typing animation
    typeText();
});
