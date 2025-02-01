// Function to handle user login
function loginUser(email, password) {
    // Implement login logic here (e.g., API call)
    console.log('Logging in:', email);
}

// Function to handle user registration
function registerUser(username, email, password) {
    // Implement registration logic here (e.g., API call)
    console.log('Registering:', username, email);
}

// Function to handle user logout
function logoutUser() {
    // Implement logout logic here
    console.log('Logging out');
}

// Function to check user session
function checkUserSession() {
    // Implement session checking logic here
    console.log('Checking user session');
}

// Event listeners for login and registration forms
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    loginUser(email, password);
});

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    registerUser(username, email, password);
});


document.addEventListener("DOMContentLoaded", function () {
    const loginDialog = document.getElementById("loginDialog");
    const openLoginDialog = document.getElementById("openLoginDialog");
    const closeLoginDialog = document.getElementById("closeLoginDialog");

    // Open the dialog when the sign-in icon is clicked
    openLoginDialog.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        loginDialog.showModal(); // Open dialog
    });

    // Close the dialog when the cancel button is clicked
    closeLoginDialog.addEventListener("click", function () {
        loginDialog.close(); // Close dialog
    });
});