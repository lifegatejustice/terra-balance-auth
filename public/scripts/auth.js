function updateAvatar() {
    const avatarImage = document.querySelector('.user-avatar');
    const isLoggedIn = localStorage.getItem('loggedInUser') !== null;

    if (isLoggedIn) {
        avatarImage.src = 'images/assets/account_circle_logged_in.svg'; // Path to the logged-in avatar image
    } else {
        avatarImage.src = 'images/assets/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'; // Default avatar image
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateAvatar);

    // In a real application, you would retrieve and verify these details from a backend.
    if (!localStorage.getItem('users')) {
      // Create a dummy user if none exists.
      const users = { "Alice": { password: "password123", email: "alice@example.com" } };
      localStorage.setItem('users', JSON.stringify(users));
    }

    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
      const users = JSON.parse(localStorage.getItem('users'));

      if (users[username] && users[username].password === password) {
        // Save the logged-in user in localStorage.
        localStorage.setItem('loggedInUser', username);
        // Redirect to the homepage.
        window.location.href = 'index.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
    