document.getElementById('login-form').addEventListener('submit', function(event) {
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
  