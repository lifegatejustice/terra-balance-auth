// --- Initialize the Users Database ---
// For demonstration, we initialize with a dummy user if none exists.
if (!localStorage.getItem('users')) {
  const dummyUsers = { "Alice": { password: "password123", email: "alice@example.com" } };
  localStorage.setItem('users', JSON.stringify(dummyUsers));
}

// --- Select DOM Elements ---
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const welcomeContainer = document.getElementById('welcome-container');
const userDisplay = document.getElementById('user-display');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const toRegisterLink = document.getElementById('to-register');
const toLoginLink = document.getElementById('to-login');
const logoutButton = document.getElementById('logout-button');

// --- Toggle between Login and Registration ---
toRegisterLink.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
});

toLoginLink.addEventListener('click', () => {
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

// --- Registration Form Submission ---
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Retrieve current users and check for duplicates.
  const users = JSON.parse(localStorage.getItem('users'));
  if (users[username]) {
    alert('Username already exists. Please choose another one.');
    return;
  }

  // Save new user (note: password stored in plain text for demonstration).
  users[username] = { email, password };
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful! Please check your email for confirmation (simulation) and then log in.');
  console.log(`Simulated email: Confirmation email sent to ${email}.`);

  // Switch to the login form.
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  registerForm.reset();
});

// --- Login Form Submission ---
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const users = JSON.parse(localStorage.getItem('users'));

  if (users[username] && users[username].password === password) {
    // Save the logged-in user.
    localStorage.setItem('loggedInUser', username);
    // Redirect to homepage or show welcome:
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

// --- Logout Action ---
// (This logout button appears in the welcome section on the account details page.)
logoutButton.addEventListener('click', function() {
  localStorage.removeItem('loggedInUser');
  // Redirect to the homepage after logout.
  window.location.href = 'index.html';
});

// --- UI Update Functions ---
// When a user is logged in, hide the login and registration forms and display only the welcome section.
function showWelcome(username) {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'none';
  welcomeContainer.style.display = 'block';
  userDisplay.textContent = username;
}

function showLogin() {
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  loginForm.reset();
}

// --- Check Login Status on Page Load ---
window.onload = function() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    showWelcome(loggedInUser);
  } else {
    showLogin();
  }
};
