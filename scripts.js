document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the data to send
    const formData = {
        name: name,
        email: email,
        message: message,
    };

    try {
        // Simulate sending the message to a backend endpoint
        const response = await fetch("https://example.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Handle the response
        if (response.ok) {
            const result = await response.json();
            document.getElementById("responseMessage").innerHTML = `
                <p style="color: green;">Thank you, ${name}. Your message has been sent successfully!</p>
            `;
        } else {
            document.getElementById("responseMessage").innerHTML = `
                <p style="color: red;">Sorry, something went wrong. Please try again later.</p>
            `;
        }
    } catch (error) {
        console.error("Error sending message:", error);
        document.getElementById("responseMessage").innerHTML = `
            <p style="color: red;">There was an error sending your message. Please check your internet connection and try again.</p>
        `;
    }
});

