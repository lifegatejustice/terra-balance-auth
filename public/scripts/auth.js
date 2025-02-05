// Register User
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const res = await fetch('/register', { // Updated URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    if (res.ok) {
        alert('Registration successful! Please log in.');
    } else {
        alert('Registration failed.');
    }
});

// Login User
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const res = await fetch('/login', { // Updated URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (res.ok) {
        alert('Login successful!');
        checkAuthStatus();
    } else {
        alert('Invalid credentials.');
    }
});

// Logout User
logoutBtn.addEventListener('click', async () => {
    await fetch('/logout'); // Updated URL
    alert('Logged out');
    checkAuthStatus();
});

// Check Authentication Status
async function checkAuthStatus() {
    const res = await fetch('/me'); // Updated URL
    if (res.ok) {
        logoutBtn.style.display = 'block';
    } else {
        logoutBtn.style.display = 'none';
    }
}