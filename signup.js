document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Replace this with your actual login validation logic
        if (username === 'example' && password === 'password') {
          // Redirect to dashboard or perform further actions upon successful login
          alert('Login successful!');
          // You can redirect the user to another page using window.location.href
          // For example: window.location.href = 'dashboard.html';
        } else {
          document.getElementById('error-message').innerText = 'Invalid username or password.';
        }
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
  
        // Replace this with your actual sign-up logic
        // This is just an example of successful sign-up message
        document.getElementById('signup-message').innerText = `Account created for ${fullname} with username ${newUsername}.`;
      });
    }
  });