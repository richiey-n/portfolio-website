document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add code to actually send the message, e.g., using an API.
    this.reset(); // Reset the form after submission
});
