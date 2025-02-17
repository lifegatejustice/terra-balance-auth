// Wait for the DOM to load before rendering the cart items
document.addEventListener("DOMContentLoaded", function() {
    renderCartItems();
  });
  
  // Render all cart items using Bootstrap cards
  function renderCartItems() {
    const cartItems = getCartItems(); // Uses shared function from cart.js
    const container = document.getElementById('cart-items-container');
    container.innerHTML = ""; // Clear previous content
  
    if (cartItems.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
      updateCartSummary();
      return;
    }
    
    cartItems.forEach((item, index) => {
      // Create a Bootstrap card for each cart item
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('card', 'mb-3');
      
      itemDiv.innerHTML = `
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${item.image}" class="card-img" alt="${item.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Price: $${item.price.toFixed(2)}</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary decrease-qty" data-index="${index}" type="button">-</button>
                </div>
                <input type="number" class="form-control text-center quantity-input" min="1" value="${item.quantity}" data-index="${index}">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary increase-qty" data-index="${index}" type="button">+</button>
                </div>
              </div>
              <p class="card-text">Subtotal: $<span class="item-subtotal">${(item.price * item.quantity).toFixed(2)}</span></p>
              <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `;
      
      container.appendChild(itemDiv);
    });
    
    attachEventListeners();
    updateCartSummary();
  }
  
  // Attach event listeners to quantity and remove buttons
  function attachEventListeners() {
    // Increase quantity
    document.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        updateItemQuantity(index, 1);
      });
    });
    
    // Decrease quantity
    document.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        updateItemQuantity(index, -1);
      });
    });
    
    // Listen for manual quantity input changes
    document.querySelectorAll('.quantity-input').forEach(input => {
      input.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const newQuantity = parseInt(this.value);
        setItemQuantity(index, newQuantity);
      });
    });
    
    // Remove item from cart
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        removeItem(index);
      });
    });
  }
  
  // Update item quantity by delta (increase or decrease)
  function updateItemQuantity(index, delta) {
    const cartItems = getCartItems();
    cartItems[index].quantity += delta;
    if (cartItems[index].quantity < 1) {
      cartItems[index].quantity = 1;
    }
    localStorage.setItem(getCartKey(), JSON.stringify(cartItems));
    renderCartItems();
    updateCartCount(); // Updates shared cart count in the header
  }
  
  // Set item quantity directly (from input change)
  function setItemQuantity(index, quantity) {
    const cartItems = getCartItems();
    cartItems[index].quantity = quantity < 1 ? 1 : quantity;
    localStorage.setItem(getCartKey(), JSON.stringify(cartItems));
    renderCartItems();
    updateCartCount();
  }
  
  // Remove an item from the cart
  function removeItem(index) {
    const cartItems = getCartItems();
    cartItems.splice(index, 1);
    localStorage.setItem(getCartKey(), JSON.stringify(cartItems));
    renderCartItems();
    updateCartCount();
  }
  
  // Update the order summary (total items and total price)
  function updateCartSummary() {
    const cartItems = getCartItems();
    let totalItems = 0;
    let totalPrice = 0;
    
    cartItems.forEach(item => {
      totalItems += item.quantity;
      totalPrice += item.quantity * item.price;
    });
    
    document.getElementById('total-items').innerText = totalItems;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
  }
  