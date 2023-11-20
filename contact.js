// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform basic validation (you can add more complex validation as needed)
    if (name && email && message) {
      // For demonstration purposes, you can log the values or send them to a backend
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Reset the form after submission
      document.getElementById('contactForm').reset();
      alert('Message sent successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  