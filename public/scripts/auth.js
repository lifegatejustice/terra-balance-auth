document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Register User
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;

        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
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
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
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
        await fetch('/auth/logout');
        alert('Logged out');
        checkAuthStatus();
    });

    // Check Authentication Status
    async function checkAuthStatus() {
        const res = await fetch('/auth/me');
        if (res.ok) {
            logoutBtn.style.display = 'block';
        } else {
            logoutBtn.style.display = 'none';
        }
    }

    checkAuthStatus();
});
