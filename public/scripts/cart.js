// cart.js

// Function to get logged-in user (adjust as needed)
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

// Function to determine the key for storing cart items
function getCartKey() {
    const user = getLoggedInUser();
    return user ? `cartItems_user_${user}` : "cartItems_guest";
}

// Function to retrieve cart items from localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem(getCartKey())) || [];
}

// Function to update the cart count display
function updateCartCount() {
    const cartItems = getCartItems();
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) { // Only update if the element exists on the page
        cartCountElement.innerText = totalQuantity;
    }
}

// Optionally, you can call updateCartCount on DOMContentLoaded
document.addEventListener("DOMContentLoaded", updateCartCount);

// Expose functions if you need to call them from other scripts
window.updateCartCount = updateCartCount;
window.getCartItems = getCartItems;
window.getCartKey = getCartKey;
window.getLoggedInUser = getLoggedInUser;
