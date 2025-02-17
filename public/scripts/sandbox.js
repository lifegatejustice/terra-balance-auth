// DOM elements
const mainContent = document.getElementById('mainContent');
const homeLink = document.getElementById('homeLink');
const buyLink = document.getElementById('buyLink');
const sellLink = document.getElementById('sellLink');
const profileLink = document.getElementById('profileLink');
const authLink = document.getElementById('authLink');

// State
let currentUser = null;
let cart = [];

// Event listeners
homeLink.addEventListener('click', showHome);
buyLink.addEventListener('click', showBuyPage);
sellLink.addEventListener('click', showSellPage);
profileLink.addEventListener('click', showProfile);
authLink.addEventListener('click', showAuthPage);

// Check if user is logged in
function init() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateAuthUI();
    }
    loadCart();
    showHome();
}

// Update UI based on auth state
function updateAuthUI() {
    if (currentUser) {
        authLink.textContent = 'Logout';
        authLink.removeEventListener('click', showAuthPage);
        authLink.addEventListener('click', logout);
        profileLink.style.display = 'inline';
    } else {
        authLink.textContent = 'Login';
        authLink.removeEventListener('click', logout);
        authLink.addEventListener('click', showAuthPage);
        profileLink.style.display = 'none';
    }
}

// Load cart from local storage
function loadCart() {
    if (currentUser) {
        const storedCart = localStorage.getItem(`cart_${currentUser.id}`);
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    }
}

// Save cart to local storage
function saveCart() {
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cart));
    }
}

// Home page
function showHome() {
    mainContent.innerHTML = `
        <h2>Welcome to Terra Balance</h2>
        <p>Your marketplace for sustainable products and farming</p>
        <div>
            <button onclick="showBuyPage()">Buy Products</button>
            <button onclick="showSellPage()">Sell Products</button>
        </div>
    `;
}

// Buy page
function showBuyPage() {
    const products = [
        { id: 1, name: 'Organic Tomatoes', price: 2.99 },
        { id: 2, name: 'Eco-friendly Water Bottle', price: 15.99 },
        { id: 3, name: 'Bamboo Toothbrush', price: 4.99 },
    ];

    let productsHTML = '<div class="product-grid">';
    products.forEach(product => {
        productsHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
    });
    productsHTML += '</div>';

    mainContent.innerHTML = `
        <h2>Buy Sustainable Products</h2>
        ${productsHTML}
    `;
}

// Sell page
function showSellPage() {
    mainContent.innerHTML = `
        <h2>Sell Your Sustainable Products</h2>
        <form id="sellForm">
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" id="productName" required>
            </div>
            <div class="form-group">
                <label for="productPrice">Price</label>
                <input type="number" id="productPrice" step="0.01" min="0" required>
            </div>
            <div class="form-group">
                <label for="productDescription">Description</label>
                <textarea id="productDescription" required></textarea>
            </div>
            <button type="submit">List Product</button>
        </form>
    `;

    document.getElementById('sellForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, you'd send this data to a backend
        alert('Product listed successfully!');
        this.reset();
    });
}

// Profile page
function showProfile() {
    if (!currentUser) {
        showAuthPage();
        return;
    }

    let cartHTML = '<ul>';
    cart.forEach(item => {
        cartHTML += `
            <li class="cart-item">
                <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                <div class="cart-item-controls">
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </li>
        `;
    });
    cartHTML += '</ul>';

    mainContent.innerHTML = `
        <h2>Your Profile</h2>
        <div class="user-icon">${currentUser.name[0].toUpperCase()}</div>
        <p>Name: ${currentUser.name}</p>
        <p>Email: ${currentUser.email}</p>
        <h3>Your Cart</h3>
        ${cart.length > 0 ? cartHTML : '<p>Your cart is empty.</p>'}
    `;
}

// Auth page
function showAuthPage() {
    mainContent.innerHTML = `
        <h2>Login</h2>
        <form id="authForm">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" id="switchToSignup">Sign up</a></p>
    `;

    document.getElementById('authForm').addEventListener('submit', handleAuth);
    document.getElementById('switchToSignup').addEventListener('click', showSignupForm);
}

// Show signup form
function showSignupForm(e) {
    e.preventDefault();
    mainContent.innerHTML = `
        <h2>Sign Up</h2>
        <form id="authForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" required>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="#" id="switchToLogin">Login</a></p>
    `;

    document.getElementById('authForm').addEventListener('submit', handleAuth);
    document.getElementById('switchToLogin').addEventListener('click', showAuthPage);
}

// Handle authentication
function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name') ? document.getElementById('name').value : '';

    if (name) {
        // Sign up
        currentUser = { id: Date.now(), name, email };
    } else {
        // Login (in a real app, you'd validate credentials)
        currentUser = { id: Date.now(), name: 'John Doe', email };
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    loadCart();
    showHome();
}

// Logout
function logout() {
    currentUser = null;
    cart = [];
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showHome();
}

// Add item to cart
function addToCart(id, name, price) {
    if (!currentUser) {
        alert('Please log in to add items to your cart.');
        return;
    }

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    saveCart();
    alert('Item added to cart!');
}

// Update cart item quantity
function updateCartItemQuantity(id, newQuantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            removeFromCart(id);
        }
        saveCart();
        showProfile();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    showProfile();
}

// Initialize the app
init();






// ----- cart.js -----

// Function to get logged-in user
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser")); // Expected format: { id: 123, name: "John Doe" }
  }
  
  // Function to get a unique cart key based on the logged-in user or guest
  function getCartKey() {
    const user = getLoggedInUser();
    return user ? `cartItems_user_${user.id}` : "cartItems_guest";
  }
  
  // Function to retrieve the user-specific cart from localStorage
  function getCartItems() {
    return JSON.parse(localStorage.getItem(getCartKey())) || [];
  }
  
  // Function to update all elements with the "cart-count" class
  function updateCartCount() {
    const cartItems = getCartItems();
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
      el.innerText = count;
    });
  }
  
  // Update the cart count when the DOM loads
  document.addEventListener("DOMContentLoaded", updateCartCount);
  
  // Listen for localStorage changes (for multi-tab updates)
  window.addEventListener('storage', (event) => {
    if (event.key === getCartKey()) {
      updateCartCount();
    }
  });
  
  // Single event listener for "Add to Cart"
  document.getElementById("add-to-cart").addEventListener("click", function() {
    // Ensure the product exists (this assumes your product object is defined globally)
    if (!product) return;
  
    // Get the desired quantity from the input
    const quantity = parseInt(document.getElementById("quantity").value);
    let cartItems = getCartItems();
  
    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }
  
    // Save the updated cart in localStorage using the unique cart key
    localStorage.setItem(getCartKey(), JSON.stringify(cartItems));
  
    // Provide feedback to the user
    document.getElementById("cart-message").innerText = "Product added to cart!";
    setTimeout(() => {
      document.getElementById("cart-message").innerText = "";
    }, 2000);
  
    // Update the cart count on the page
    updateCartCount();
  });
  