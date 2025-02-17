// --- Cart Functions ---
// Get the logged-in user (as a string)
function getLoggedInUser() {
    return localStorage.getItem("loggedInUser"); // using the second method
  }
  
  // Get a unique cart key based on the logged-in user or guest.
  function getCartKey() {
    const user = getLoggedInUser();
    return user ? `cartItems_user_${user}` : "cartItems_guest";
  }
  
  // Retrieve the user-specific cart from localStorage.
  function getCartItems() {
    return JSON.parse(localStorage.getItem(getCartKey())) || [];
  }
  
  // Update every element with the 'cart-count' class.
  function updateCartCount() {
    const cartItems = getCartItems();
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
      el.innerText = count;
    });
  }
  
  // Update cart count when the DOM loads.
  document.addEventListener("DOMContentLoaded", updateCartCount);
  
  // Listen for localStorage changes (useful for multi-tab updates).
  window.addEventListener('storage', (event) => {
    if (event.key === getCartKey()) {
      updateCartCount();
    }
  });
  