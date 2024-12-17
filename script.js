document.getElementById('email').addEventListener('input', function(event) {
    const emailField = event.target;
    const emailValue = emailField.value;

    // Check if the email has ".com" at the end and prevent further input after it
    if (emailValue.endsWith('.com') && emailValue.length > 4) {
        emailField.value = emailValue.slice(0, emailValue.indexOf('.com') + 4); // Allow only up to ".com"
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if all fields are filled
    if (!name || !email || !message) {
        alert("All fields are required!");
        return; // Exit the function if any field is empty
    }

    // Regular expression pattern for a strict Gmail address with no characters after .com
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Validate the email using the strict Gmail pattern
    if (!gmailPattern.test(email)) {
        alert("Please enter a valid Gmail address ending with '@gmail.com' and no extra characters after '.com'.");
        return; // Exit the function if the email doesn't match the Gmail pattern
    }

    // Display success message
    alert("Your message has been successfully sent!");

    // Reset the form fields
    document.getElementById('contactForm').reset();
});
